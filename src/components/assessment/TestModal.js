import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
    ListItem,
    UnorderedList
  } from '@chakra-ui/react'
  import { useEffect } from 'react';

function TestModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
        <Button className="" onClick={onOpen}>Test</Button>
  
        <Modal isOpen={isOpen} onClose={onClose} size='xl'>
          <ModalOverlay />
          <ModalContent maxW="800px">
            <ModalHeader>Deploy Test Wellbeing Assessment</ModalHeader>
            <ModalCloseButton />
            <ModalBody fontSize='sm'>
            Test
            </ModalBody>
            <ModalFooter className="space-x-4">
              <Button>Upload csv</Button>
              <Button className="text-black" mr={3} onClick={onClose}>
                Test
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>    
    )
}

export default TestModal;






