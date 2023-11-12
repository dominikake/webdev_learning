import { Box, Text, Center } from "@chakra-ui/react";

export default function PriceHeader(params) {
  return (
    <>
      <Center>
        <Box
          bg="purple.500"
          color="white"
          h={"397"}
          w={"100%"}
          textAlign={"center"}
        >
          <Box>
            <Text fontSize={"6xl"} fontWeight={"800"}>
              Simple pricing for your business
            </Text>
            <Text opacity="84%">
              Plans that are carefully crafted to suit your business
            </Text>
          </Box>
        </Box>
      </Center>
    </>
  );
}