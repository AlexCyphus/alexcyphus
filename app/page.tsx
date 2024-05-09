"use client";

import { Stack } from "@chakra-ui/react";
import Desktop from "./_components/Desktop/Desktop";
import AboutModal from "./_components/Modals/AboutModal";
import TopBar from "./_components/TopBar/TopBar";
import { useSystemContext } from "./_providers/SystemContext";
import App from "./_components/App";
import Providers from "./_providers/Providers";

// TO DO
// ICONS FOR APPLICATIONS
// MODALS FOR APPLICATIONS
// CLOSE ALL APPLICATIONS
// ABOUT APPLICATION
// COUNTRIES APPLICATION
// PROJECTS APPLICATION
// DRAG AROUND WINDOWS
// DEPLOY

export default function Home() {
  return (
    <Providers>
      <App />
    </Providers>
  );
}
