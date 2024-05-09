import { Divider, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import { useModals } from "../../_providers/ModalContext";
import Modal from "./Modal/Modal";

const MODAL_ID = "travel";

const TravelModal = () => {
  const { modals } = useModals();

  const isOpen = modals.some((modal) => modal.id === MODAL_ID);

  if (!isOpen) return null;

  const livedIn = [
    "🇨🇦 Canada",
    "🇬🇧 United Kingdom",
    "🇪🇸 Spain",
    "🇩🇪 Germany",
    "🇨🇴 Colombia",
  ];

  const visited = [
    "🇺🇸 United States of America",
    "🇧🇿 Belize",
    "🇵🇪 Peru",
    "🇸🇪 Sweden",
    "🇩🇰 Denmark",
    "🇮🇹 Italy",
    "🇵🇹 Portugal",
    "🇭🇺 Hungary",
    "🇧🇪 Belgium",
    "🇹🇼 Taiwan",
    "🇫🇷 France",
    "🇦🇹 Austria",
    "🇵🇱 Poland",
    "🇭🇷 Croatia",
    "🇨🇿 Czechia",
    "🇲🇨 Monaco",
    "🇨🇺 Cuba",
    "🇳🇱 Netherlands",
    "🇷🇸 Serbia",
    "🇬🇷 Greece",
    "🇲🇪 Montenegro",
    "🇦🇱 Albania",
    "🇻🇦 The Vatican",
  ];

  const percentageOfCountriesVisited =
    Math.round(((visited.length + livedIn.length) / 196) * 10000) / 100;

  return (
    <Modal id={MODAL_ID} title={"Travel"}>
      <Text>
        Been to {visited.length + livedIn.length} countries and counting! That's{" "}
        {percentageOfCountriesVisited}% of the world (approximately).
      </Text>
      <Divider />
      <Text fontSize={"medium"}>🏡 Lived in ({livedIn.length})</Text>
      <Divider />
      <SimpleGrid columns={2}>
        {livedIn.map((country, i) => (
          <GridItem key={i}>
            <Text>{country}</Text>
          </GridItem>
        ))}
      </SimpleGrid>
      <Divider />
      <Text fontSize={"medium"}>🗺️ Visited ({visited.length})</Text>
      <Divider />

      <SimpleGrid columns={2}>
        {visited.map((country, i) => (
          <GridItem key={i}>
            <Text>{country}</Text>
          </GridItem>
        ))}
      </SimpleGrid>
    </Modal>
  );
};

export default TravelModal;
