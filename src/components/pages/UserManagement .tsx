import { memo, VFC } from "react";
import { Wrap } from "@chakra-ui/react";
import { WrapItem } from "@chakra-ui/layout";

import { UserCard } from "../organisms/user/UserCard";

export const UserManagement: VFC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <UserCard
          image="https://source.unsplash.com/random"
          nickName="sample"
          fullName="sample.sample"
        />
      </WrapItem>
    </Wrap>
  );
});
