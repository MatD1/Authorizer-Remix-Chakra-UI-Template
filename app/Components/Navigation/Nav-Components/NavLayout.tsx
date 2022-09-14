import {
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  StackDivider,
} from "@chakra-ui/react";
import * as React from "react";
import { FiMenu, FiSun } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import ColorMode from "~/Components/Utils/ColorMode";
import { Logo } from "./Logo";

type NavLayoutProps = {
  onClickMenu?: VoidFunction;
  onToggleMode?: VoidFunction;
  isMenuOpen: boolean;
  menuButtonRef?: React.RefObject<HTMLButtonElement>;
};

export const NavLayout = (props: NavLayoutProps) => {
  const { onClickMenu, onToggleMode, isMenuOpen, menuButtonRef } = props;
  const MenuIcon = isMenuOpen ? MdClose : FiMenu;
  return (
    <Flex height="16" align="center" justify="space-between" px="5">
      <Heading
        fontSize={"4xl"}
        fontWeight={"bold"}
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
      >
        Authorizer
      </Heading>
      <HStack divider={<StackDivider height="6" alignSelf="unset" />}>
        <ColorMode />
        <IconButton
          ref={menuButtonRef}
          variant="ghost"
          icon={<Icon as={MenuIcon} fontSize="2xl" />}
          aria-label="Open Menu"
          onClick={onClickMenu}
        />
      </HStack>
    </Flex>
  );
};
