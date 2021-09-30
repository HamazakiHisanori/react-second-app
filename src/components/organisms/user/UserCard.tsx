import { memo, VFC } from "react";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

type Props = {
  image: string;
  nickName: string;
  fullName: string;
  onClick: () => void;
};

export const UserCard: VFC<Props> = memo((props) => {
  const { image, nickName, fullName, onClick } = props;
  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{
        cursor: "pointer",
        opacity: 0.7,
      }}
      onClick={onClick}
    >
      <Stack textAlign="center">
        <Image
          boxSize="160px"
          borderRadius="full"
          m="auto"
          alt={nickName}
          src={image}
        />
        <Text fontSize="lg" fontWeight="bold">
          {nickName}
        </Text>
        <Text fontSize="sm" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
