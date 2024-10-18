import { Divider, Stack, Text } from "@chakra-ui/react";
import Modal from "../Modal/Modal";
import ProjectsRow from './ProjectsRow';
import { projectsModalData } from './projectsModalData';

const MODAL_ID = "projects";

const ProjectsModal = () => {
  return (
    <Modal id={MODAL_ID} title="Projects">
      <Text fontSize={"xs"}>
        {">> Trying to be Richard Hendricks from Silicon Valley and build my own startup. There are more projects in the graveyard but these are the ones that are somewhat presentable."}
      </Text>
      <Divider />
      <Stack divider={<Divider />}>
        {projectsModalData.map((project) => (
          <ProjectsRow key={project.name} {...project} />
        ))}
      </Stack>
      { }
    </Modal>
  );
};

export default ProjectsModal;
