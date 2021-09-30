import { memo, useCallback, useEffect, VFC } from "react";
import { Wrap } from "@chakra-ui/react";
import { Center, WrapItem } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { useDisclosure } from "@chakra-ui/hooks";

import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserModal } from "../organisms/user/UserModal";

export const UserManagement: VFC = memo(() => {
  const { getUsers, loading, users } = useAllUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onClickUser = useCallback(() => {
    onOpen();
  }, [onOpen]);

  useEffect(() => getUsers(), [getUsers]);
  return (
    <>
      {loading ? (
        <Center height="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }} justify="space-around">
          {users.map((user) => (
            <WrapItem key={user.id}>
              <UserCard
                image="https://source.unsplash.com/random"
                nickName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserModal isOpen={isOpen} onClose={onClose} />
    </>
  );
});
