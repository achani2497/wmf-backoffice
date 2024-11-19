"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import SessionProvider from "@contexts/userContext";

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  const [client] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
