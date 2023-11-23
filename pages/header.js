import { Box, Text, Center } from "@chakra-ui/react";

export default function PriceHeader(params) {
  return (
    <>
      <Center>
        <Box>
          <Text fontSize={48} fontWeight={"800"} paddingTop={88.45}>
            Simple pricing for your business
          </Text>
          <Text
            fontSize={24}
            fontWeight={"500"}
            opacity="84%"
            color={"gray.300"}
            paddingTop={5}
          >
            Plans that are carefully crafted to suit your business
          </Text>
        </Box>
      </Center>
    </>
  );
}
