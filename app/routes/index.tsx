import { useAuthorizer } from "@authorizerdev/authorizer-react";
import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Spinner,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import React, { useEffect } from "react";

export default function Index() {
  const { user, loading } = useAuthorizer();

  return (
    <React.Fragment>
      <Box>
        <Heading>Authorizer + Remix + Chakra-UI</Heading>
        <Text>
          Welcome{" "}
          {loading ? (
            <Spinner mt={5} />
          ) : user ? (
            user?.preferred_username || user?.email
          ) : (
            <Link to="/Auth/Login">
              <Text display={"inline"}>Login!</Text>
            </Link>
          )}
        </Text>
        <Link to="/Auth/Profile">
          <Button>Profile</Button>
        </Link>
      </Box>
      <Divider mt={4} />
      <Box as="section" py={{ base: "4", md: "8" }}>
        <Container maxW="3xl">
          <Box
            bg="bg-surface"
            boxShadow={useColorModeValue("sm", "sm-dark")}
            borderRadius="lg"
            p={{ base: "4", md: "6" }}
          >
            <Stack spacing="5">
              <Stack spacing="1">
                <Text fontSize="lg" fontWeight="medium">
                  Authorizer
                </Text>
                <Text fontSize="sm" color="muted">
                  A powerful authentication system that pairs beautify with
                  Remix.
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
}
