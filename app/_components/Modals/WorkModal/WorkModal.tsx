import { Divider, Stack, Text } from "@chakra-ui/react";
import Modal from "../Modal/Modal";
import WorkRow, { WorkRowProps } from "./WorkRow";
import { workModalData } from "./workModalData";

const MODAL_ID = "work";

const WorkModal = () => {
  return (
    <Modal id={MODAL_ID} title="Work">
      <Text>
        {`Some of the companies I've worked at and some of my side projects.`}
      </Text>
      <Divider />
      <Stack divider={<Divider />}>
        {workModalData.map((project) => (
          <WorkRow key={project.title} {...project} />
        ))}
      </Stack>
      {}
    </Modal>
  );
};

export default WorkModal;
