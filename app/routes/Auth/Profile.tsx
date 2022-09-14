import React, { useEffect } from "react";
import { useAuthorizer } from "@authorizerdev/authorizer-react";
import { Box, Heading, Spinner, Center, Divider } from "@chakra-ui/react";
import { redirect } from "react-router";

export default function Login() {
  const { user, loading } = useAuthorizer();

  if (loading) return (
    <Center>
        <Spinner />
    </Center>
  )

  if (user) {
    return (
        <Box m={5}>
            <Heading>Welcome</Heading>
            <Divider />
            <Heading mt={-5} ml={5} fontSize={'2xl'} fontWeight={'thin'}>{user?.email}</Heading>
        </Box>
    )
  } else {
    return undefined
    
  }
}
