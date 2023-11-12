import {
  Box,
  Button,
  Flex,
  List,
  ListItem,
  ListIcon,
  chakra,
  Icon,
  SimpleGrid,
  Text,
  Card,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import Link from "next/link";
import { gridListWithCTA } from "./prices";

const Rectangle = chakra(Box, {
  baseStyle: {
    bg: "#6B46C1",
  },
});
export default function Pricing() {
  return (
    <>
      <Box bg="white" height="100vh">
        <Rectangle height={"397"} color="white">
          <Box>
            <Text fontSize="6xl">Simple pricing for your business</Text>
            <Text fontSize="sm" opacity="84%">
              Plans that are carefully crafted to suit your business.
            </Text>
          </Box>

          <Flex bg="tomato" color="black" maxW="994" borderRadius={"12"}>
            <Box>
              <Box color="#652CD3" opacity={"10%"}>
                <Text>Premium PRO</Text>
                <Text>$329</Text>
                <Text>billed just once</Text>
                <Button>Get Started</Button>
              </Box>
              <Box>
                <Text>
                  Access these features when you get this pricing package for
                  your
                </Text>
                <List>
                  business.
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    International calling and messaging API
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Additional phone numbers
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Automated messages via Zapier
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    24/7 support and consulting
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Flex>
        </Rectangle>
        <SimpleGrid columns={3} color="black">
          <Box>
            <Icon></Icon>
            30 days money back Guarantee
          </Box>
          <Box>
            <Icon></Icon>
            No setup fees 100% hassle-free
          </Box>
          <Box>
            <Icon></Icon>
            No monthly subscription Pay once and for all dsffdfss
          </Box>
        </SimpleGrid>
      </Box>
      <Link href="/">Return home</Link>
    </>
  );
}
