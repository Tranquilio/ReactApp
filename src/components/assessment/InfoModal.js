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

function InfoModal() {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true })
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal isOpen={isOpen} onClose={onClose} size='xl'>
        <ModalOverlay />
        <ModalContent maxW="800px">
          <ModalHeader>Organizational Wellbeing Assessment Preparation</ModalHeader>
          <ModalCloseButton />
          <ModalBody fontSize='sm'>
          <Text>
            Deciding to do a workplace wellbeing assessment requires significant commitment. Before you send out the assessment, 
            it is essential that you lay the groundwork, including support and a plan, within your organization. 
          </Text><br />
          <Text> See the Getting Started Guide for steps on how to learn and organize in preparation for sending out your assessment.
          </Text><br />
          <Text>It is important to consider the following issues:</Text><br />
          <UnorderedList spacing={2}>
            <ListItem>Select a workplace lead group or steering committee to spearhead the plan, to gather information, and to facilitate the action plan to address the factors that StressAssess may identify.</ListItem>
            <ListItem>Make a plan from beginning to end, tailoring the steps to your workplace. How will you communicate with workers? Who will do what? How will they get computer access if they don't have access at work? What will you do with the survey information you gather?</ListItem>
            <ListItem>Engage with your health and safety committee and union representatives. It is integral to have their buy-in and endorsement at an early stage, and to make a plan to keep these groups informed during the process.</ListItem>
            <ListItem>Determine the employer's role as a part of the plan.</ListItem>
            <ListItem>Keep workers informed. Let them know what is going on and what to expect, especially after the survey results come in. Set an actual timeline with specific dates. Assure anonymity and confidentiality.</ListItem>
            <ListItem>Make preparations in anticipation of the results. Look for resources ahead of time so when you find out the key issues, you're prepared with possible solutions.</ListItem>
          </UnorderedList>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='green' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Do not show again</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default InfoModal;