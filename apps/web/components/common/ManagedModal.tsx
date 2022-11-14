import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from '@chakra-ui/react';

import { useUI } from 'contexts/ui';

const ManagedModal: React.FC = () => {
  const { isModalOpen, closeModal, modalView } = useUI();

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal} size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody p={8}>
          {/* {modalView === 'VIEW_1' && <VIEW1 />} */}
          {/* {modalView === 'VIEW_2' && <VIEW2 />} */}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ManagedModal;
