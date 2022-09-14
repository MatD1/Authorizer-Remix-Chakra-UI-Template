import React from 'react'
import { Authorizer } from '@authorizerdev/authorizer-react'
import { Box } from '@chakra-ui/react'


export default function Login() {
  return (
    <Box m={5}>
        <Authorizer />
    </Box>
  )
}
