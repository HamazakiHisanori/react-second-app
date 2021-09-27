import { memo, ReactNode, VFC } from "react";
import { Button } from "@chakra-ui/button";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, onClick, disabled = false, loading = false } = props;
  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.7 }}
      isLoading={loading}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
