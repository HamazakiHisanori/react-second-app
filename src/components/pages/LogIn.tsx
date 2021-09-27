import { ChangeEvent, memo, useState, VFC } from "react";
import { Box, Divider, Flex, Heading, Stack } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const LogIn: VFC = memo(() => {
  const [userID, setUserID] = useState<string>("");
  const { login, loading } = useAuth();

  const onChangeUserID = (e: ChangeEvent<HTMLInputElement>) =>
    setUserID(e.target.value);

  const onClickLogin = () => {
    login(userID);
  };

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} ox={10}>
          <Input
            placeholder="ユーザーID"
            value={userID}
            onChange={onChangeUserID}
          />
          <PrimaryButton
            loading={loading}
            disabled={userID === ""}
            onClick={onClickLogin}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
