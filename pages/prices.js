"use client";

import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
  List,
  ListItem,
} from "@chakra-ui/react";

export default function PriceCard() {
  return (
    <Box
      as={Container}
      maxW="7xl"
      p={4}
      mt="-20"
      mx="auto"
      position="relative"
      zIndex="1"
    >
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
      >
        <GridItem colSpan={1}>
          <VStack alignItems="center" spacing="20px">
            <chakra.h4 fontSize="md" fontWeight="800">
              Premium PRO
            </chakra.h4>
            <chakra.h2 fontSize="xl" fontWeight="800">
              $329
            </chakra.h2>
            <chakra.h5 fontSize="sm" fontWeight="500">
              billed just once
            </chakra.h5>
            <Button colorScheme="green" size="md">
              Get Started
            </Button>
          </VStack>
        </GridItem>
        <GridItem>
          <Flex direction={"column"} alignItems={"center"}>
            <chakra.p>
              Access these features when you get this pricing package for your
              business.
            </chakra.p>
            <List>
              <ListItem>International calling and messaging API</ListItem>
              <ListItem>Additional phone numbers</ListItem>
              <ListItem>Automated messages via Zapier</ListItem>
              <ListItem>24/7 support and consulting</ListItem>
            </List>
          </Flex>
        </GridItem>
      </Grid>
      <Divider mt={12} mb={12} />
    </Box>
  );
}
