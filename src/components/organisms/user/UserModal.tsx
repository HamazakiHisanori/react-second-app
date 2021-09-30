import { memo, VFC } from "react";
import { Stack } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const UserModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
      <ModalOverlay />
      <ModalContent pb={6}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>NICKNAME</FormLabel>
              <Input value="sample" isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>FULLNAME</FormLabel>
              <Input value="sample.sample" isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>MAIL</FormLabel>
              <Input value="sample@sample.com" isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>PHONE</FormLabel>
              <Input value="000-0000-0000" isReadOnly />
            </FormControl>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
