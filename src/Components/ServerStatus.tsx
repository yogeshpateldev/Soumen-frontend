import { useQuery } from "@tanstack/react-query";
import { API_BASE_URL } from "../config";
import { WifiOff } from "lucide-react";

export function ServerStatus() {
  const { data, status } = useQuery({
    queryKey: ["serverHealth"],
    queryFn: async () => {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), 3000); // 3 seconds timeout

      try {
        const res = await fetch(`${API_BASE_URL}/api/health`, {
          signal: controller.signal,
        });
        clearTimeout(id);
        if (!res.ok) {
          throw new Error("API status check failed");
        }
        return await res.json();
      } catch (err) {
        clearTimeout(id);
        throw err;
      }
    },
    refetchInterval: 10000, // Check every 10 seconds
    refetchOnWindowFocus: false, // Disable refetch on window focus
    retry: 1,
  });

  const isOnline = status === "success" && data?.status === "ok";
  const isLoading = status === "pending";

  const getPort = () => {
    try {
      if (API_BASE_URL.startsWith("http")) {
        return new URL(API_BASE_URL).port || (API_BASE_URL.startsWith("https") ? "443" : "80");
      }
      return "80";
    } catch (e) {
      return "80";
    }
  };

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium backdrop-blur-sm transition-all duration-300">
      {isLoading ? (
        <>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-muted-foreground/40 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-muted-foreground/60"></span>
          </span>
          <span className="text-muted-foreground/80">Checking API...</span>
        </>
      ) : isOnline ? (
        <>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-muted-foreground flex items-center gap-1">
            API Online
            <span className="text-[10px] opacity-60">({getPort()})</span>
          </span>
        </>
      ) : (
        <>
          <span className="relative flex h-2 w-2">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive"></span>
          </span>
          <span className="text-destructive font-semibold flex items-center gap-1">
            <WifiOff size={10} />
            API Offline
          </span>
        </>
      )}
    </div>
  );
}
