import { Divider, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import { useModals } from "../../../_providers/ModalContext";
import CountriesGlobe from "./Globe/CountriesGlobe";
import {
  allVisitedCountriesLength,
  formattedCountriesLivedIn,
  formattedCountriesVisited,
  percentageOfCountriesVisited,
} from "./Globe/countriesData";
import Modal from "../Modal/Modal";

const MODAL_ID = "travel";

const TravelModal = () => {
  const { modals } = useModals();

  const isOpen = modals.some((modal) => modal.id === MODAL_ID);

  if (!isOpen) return null;

  return (
    <Modal id={MODAL_ID} title={"Travel"}>
      <Text fontFamily={"ibm"}>
        {`I've been to ${allVisitedCountriesLength} countries and counting! I'm on
        a mission to make this globe less white.`}
      </Text>
      <Divider />
      <Text fontSize={"medium"}>
        🌎 Globe ({percentageOfCountriesVisited}%)
      </Text>
      <Divider />
      <CountriesGlobe />
      <Divider />
      <Text fontSize={"medium"}>
        🏡 Lived in ({formattedCountriesLivedIn.length})
      </Text>
      <Divider />
      <SimpleGrid columns={2}>
        {formattedCountriesLivedIn.map((country, i) => (
          <GridItem key={i}>
            <Text>{country}</Text>
          </GridItem>
        ))}
      </SimpleGrid>
      <Divider />
      <Text fontSize={"medium"}>
        🗺️ Visited ({formattedCountriesVisited.length})
      </Text>
      <Divider />
      <SimpleGrid columns={2}>
        {formattedCountriesVisited.map((country, i) => (
          <GridItem key={i}>
            <Text>{country}</Text>
          </GridItem>
        ))}
      </SimpleGrid>
    </Modal>
  );
};

export default TravelModal;
