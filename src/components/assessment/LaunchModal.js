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
  import { useEffect, useState } from 'react';

function LaunchModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [showConfirmation, setShowConfirmation] = useState(false)
    
    const handleConfirmation = event => {
      setShowConfirmation(current => !current)
    }

    return (
        <>
        <Button className="" onClick={onOpen}>Launch</Button>
  
        <Modal isOpen={isOpen} onClose={onClose} size='xl'>
          <ModalOverlay />
          <ModalContent maxW="800px">
            <ModalHeader>Deploy Wellbeing Assessment</ModalHeader>
            <ModalCloseButton />
            <ModalBody fontSize='sm'>
            Launch
            </ModalBody>
            <ModalFooter className="space-x-4">
              <Button>Upload csv
              </Button>
              <Button className="text-black" mr={3} onClick={handleConfirmation}>
                Launch
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        { showConfirmation &&
        <Modal isOpen={isOpen} onClose={onClose && handleConfirmation} size='xl'>
          <ModalOverlay />
          <ModalContent maxW="800px">
            <ModalHeader>Deploy Wellbeing Assessment</ModalHeader>
            <ModalCloseButton />
            <ModalBody fontSize='sm'>
            Confirm
            </ModalBody>
            <ModalFooter className="space-x-4">
              <Button className="text-black" mr={3}>
                Confirm
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        }

      </>    
    )
}

export default LaunchModal;






