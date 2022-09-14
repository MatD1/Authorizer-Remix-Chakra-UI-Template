import {
  useColorModeValue,
  useColorMode,
  Button,
  Icon,
  DarkMode,
  Switch,
  IconButton,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

export default function ColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <DarkMode>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <IconButton
          aria-label="Change the color mode"
          onClick={toggleColorMode}
          icon={colorMode === "light" ? <RiSunLine /> : <RiMoonLine />}
        />
      </motion.div>
    </DarkMode>
  );
}
