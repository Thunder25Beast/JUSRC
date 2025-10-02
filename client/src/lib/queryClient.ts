import { QueryClient } from "@tanstack/react-query";

// Simplified query client for frontend-only site
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
  },
});
