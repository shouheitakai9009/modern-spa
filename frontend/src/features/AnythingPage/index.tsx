import { Heading, Flex, Box, Text } from "@radix-ui/themes";
import { useRecoilValue } from "recoil";
import { globalState } from "../../recoil/globalState/atom";

export const AnythingPage = () => {
  const hello = useRecoilValue(globalState.hello);
  return (
    <Box>
      <Flex
        direction="column"
        align="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Heading mb="4">好きなようにカスタマイズしてね！</Heading>
        <Text>前ページのステートが引き継がれてるよ: {hello?.message}</Text>
      </Flex>
    </Box>
  );
};
