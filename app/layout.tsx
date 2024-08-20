import { ChakraProvider } from "@chakra-ui/react";
import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Alex's Corner of the Internet",
  description: "🌐 Welcome to my corner of the internet",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <ChakraProvider>
        <body
          style={{
            maxWidth: "100vw",
            maxHeight: "100vh",
            overflow: "hidden",
          }}
        >
          {children}
        </body>
      </ChakraProvider>
    </html>
  );
}
