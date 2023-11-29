import { SimpleGrid, Box, Icon } from "@chakra-ui/react";
import { Flex, Text } from "@chakra-ui/react";

export default function PriceFeatures(params) {
  return (
    <>
      <Flex fontSize={18} fontWeight={700} justifyContent={"center"}>
        <div>
          <img src="/icons/shield.svg" alt="Icon 3" />
        </div>
        <Box paddingLeft={4} maxW={220}>
          <Text noOfLines={2}>30 days money back Guarantee</Text>
        </Box>
        <div>
          <img src="/icons/fee.svg" alt="Icon 3" />
        </div>
        <Box paddingLeft={4} maxW={280}>
          <Text noOfLines={2}>No setup fees 100% hassle-free</Text>
        </Box>
        <div>
          <img src="/icons/subscription.svg" alt="Icon 3" />
        </div>
        <Box paddingLeft={4} maxW={288}>
          <Text noOfLines={2}>
            No monthly subscription Pay once and for all
          </Text>
        </Box>
      </Flex>
    </>
  );
}
