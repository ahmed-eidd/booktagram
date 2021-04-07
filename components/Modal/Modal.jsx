import React from 'react'
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button
} from "@chakra-ui/react"
import classes from './Modal.module.scss';

const Modal = ({isOpen, onOpen, onClose, children}) => {
  // const {  onOpen, onClose } = useDisclosure();
  return (
      <ChakraModal isOpen={isOpen} onClose={onClose} scrollBehavior='inside' className={classes.Modal}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton className={classes.ModalCloseBtn} colorScheme='white' />
          <ModalBody>
            {children}
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </ChakraModal>

  )
}

export default Modal;
