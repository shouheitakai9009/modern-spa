import { Box, Button, Em, Flex, Heading, Text } from "@radix-ui/themes";
import { Github } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <Box width="100%">
      <header
        style={{
          height: "500px",
        }}
        className="bg-gray-50"
      >
        <Flex direction="column" justify="center" align="center" height="100%">
          <Heading size="9" mb="4">
            ReactのモノレポSPAを開始する
          </Heading>
          <Text as="p" size="5" color="gray" mb="9">
            <Em>React + Vite + Typescript + Radix + Lucide + TailwindCSS</Em>
            で構成されたフロントエンドと
            <br />
            <Em>NestJS + Prisma + MySQL</Em>
            で構成されたバックエンドのモノレポのSPAテンプレートを今すぐ試す。
          </Text>
          <Flex justify="center" align="center" gap="2">
            <Link to="https://github.com/shouheitakai9009" target="_blank">
              <Button size="4" variant="soft">
                <Github />
                Potents
              </Button>
            </Link>
            <Button size="4" onClick={() => navigate("anything")}>
              今すぐ試す
            </Button>
          </Flex>
        </Flex>
      </header>
    </Box>
  );
};
