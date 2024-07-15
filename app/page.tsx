"use client";

import App from "./_components/App";
import Providers from "./_providers/Providers";

export default function Home() {
  return (
    <Providers>
      <App />
    </Providers>
  );
}
