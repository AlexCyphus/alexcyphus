"use client";

import { Stack } from "@chakra-ui/react";
import Globe from "react-globe.gl";
import useDisableGlobeScroll from "./useDisableGlobeScroll";
import { globeCountriesData } from "./countriesData";

const CountriesGlobe: React.FC = () => {
  const globeRef = useDisableGlobeScroll();

  const globeSize = window.screen.width > 450 ? 450 : 250;

  return (
    <Stack
      cursor={"grabbing"}
      mt={{
        base: -8,
        md: -12,
      }}
      mb={{
        base: -8,
        md: -12,
      }}
      align={"center"}
      justify={"center"}
    >
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
        polygonsData={globeCountriesData}
        width={globeSize}
        height={globeSize}
        polygonCapColor="white"
        polygonSideColor="white"
        backgroundColor="rgba(0, 0, 0, 0)"
      />
    </Stack>
  );
};

export default CountriesGlobe;
