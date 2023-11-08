import { Box, Button, Em, Flex, Heading, Text } from "@radix-ui/themes";
import { Github, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useFetchHello } from "../../hooks/queries/useFetchHello";
import { Suspense, useEffect } from "react";
import { useRecoilState } from "recoil";
import { globalState } from "../../recoil/globalState/atom";

export const LandingPage = () => {
  const navigate = useNavigate();
  const { data } = useFetchHello();
  const [hello, setHello] = useRecoilState(globalState.hello);

  useEffect(() => {
    setHello({ id: 0, message: "Hello Recoil!" });
  }, []);

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
            <Button size="4" onClick={() => navigate("test")}>
              今すぐ試す
            </Button>
          </Flex>
        </Flex>
      </header>
      <main>
        <Suspense fallback={<Loader2 />}>
          <Flex align="center" justify="center" py="9">
            <Heading color="purple">RQ: {data}</Heading>
          </Flex>
          <Flex align="center" justify="center" py="9">
            <Heading color="purple">
              Recoil: {hello !== null && hello.message}
            </Heading>
          </Flex>
        </Suspense>
      </main>
    </Box>
  );
};
