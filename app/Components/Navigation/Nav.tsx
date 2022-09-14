import { useAuthorizer } from "@authorizerdev/authorizer-react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Stack,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import * as React from "react";
import { NavLayout } from "./Nav-Components/NavLayout";

export const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);
  const { user, logout } = useAuthorizer();

  return (
    <Box pb={5}>
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow={useColorModeValue("sm", "sm-dark")}
      >
        <NavLayout onClickMenu={onOpen} isMenuOpen={isOpen} />
        <Drawer
          placement="left"
          initialFocusRef={menuButtonRef}
          isOpen={isOpen}
          onClose={onClose}
          size="md"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader padding="0">
              <NavLayout
                onClickMenu={onClose}
                isMenuOpen={isOpen}
                menuButtonRef={menuButtonRef}
              />
            </DrawerHeader>
            <DrawerBody>
              <Stack dir={"column"}>
                {user ? (
                  <Link to="/Auth/Profile">
                    <Button>Profile</Button>
                  </Link>
                ) : undefined}
              </Stack>
              <Divider mt={4} />
              <HStack mt="6">
                {user ? (
                  <Button
                    flex="1"
                    colorScheme="blue"
                    variant="outline"
                    color="accent"
                    fontWeight="semibold"
                    onClick={() => logout()}
                  >
                    Logout
                  </Button>
                ) : (
                  <Link to="/Auth/Login">
                    <Button
                      flex="1"
                      colorScheme="blue"
                      variant="outline"
                      color="accent"
                      fontWeight="semibold"
                    >
                      Sign in
                    </Button>
                  </Link>
                )}
              </HStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  );
};
