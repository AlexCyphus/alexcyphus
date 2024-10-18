import { Divider, Stack, Text } from "@chakra-ui/react";
import Modal from "../Modal/Modal";
import WorkRow from "./WorkRow";
import { workModalData } from "./workModalData";

const MODAL_ID = "resume";

const WorkModal = () => {
  return (
    <Modal id={MODAL_ID} title="Resume">
      <Stack divider={<Divider />}>
        {workModalData.map((project) => (
          <WorkRow key={project.title} {...project} />
        ))}
      </Stack>
      { }
    </Modal>
  );
};

export default WorkModal;
