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
        
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await res.json();
          if (!res.ok) {
            throw new Error("API status check failed");
          }
          return data;
        } else {
          throw new Error(`Server returned non-JSON health response (${res.status})`);
        }
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
    <div className="inline-flex items-center gap-2 rounded-full border border-border/30 bg-secondary/35 px-3 py-1 text-[11px] font-medium backdrop-blur-md transition-all duration-300 shadow-sm">
      {isLoading ? (
        <>
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-muted-foreground/30 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-muted-foreground/50"></span>
          </span>
          <span className="text-muted-foreground/80 tracking-wide font-sans">Checking API...</span>
        </>
      ) : isOnline ? (
        <>
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500/40 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
          <span className="text-muted-foreground font-sans tracking-wide flex items-center gap-1.5">
            API Active
            <span className="text-[9px] opacity-40 font-mono">({getPort()})</span>
          </span>
        </>
      ) : (
        <>
          <span className="relative flex h-1.5 w-1.5">
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-destructive/80"></span>
          </span>
          <span className="text-destructive/95 font-semibold font-sans tracking-wide flex items-center gap-1">
            <WifiOff size={9} />
            API Connection Error
          </span>
        </>
      )}
    </div>
  );
}
