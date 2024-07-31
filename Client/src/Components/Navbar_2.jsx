import React from "react";
import {
  Box,
  Flex,
  HStack,
  Button,
  Text,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Icon,
  IconButton,
  useDisclosure,
  useColorModeValue,
  VStack,
  CloseButton,
  Avatar,
  chakra,
  VisuallyHidden,
  InputGroup,
  InputLeftElement,
  Input,
  Tabs,
  TabList,
  Tab,
  Spacer,
} from "@chakra-ui/react";
import {
  AiOutlineMenu,
  AiFillHome,
  AiOutlineInbox,
  AiFillBell,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { RiFlashlightFill } from "react-icons/ri";

import { ChevronDownIcon } from "@chakra-ui/icons";

const navLinks = [
  { name: "About", path: "#" },
  { name: "Features", path: "#" },
  { name: "Pricing", path: "#" },
];

const dropdownLinks = [
  {
    name: "Blog",
    path: "#",
  },
  {
    name: "Documentation",
    path: "#",
  },
  {
    name: "Github Repo",
    path: "#",
  },
];

const Navbar = () => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box shadow="md">
      <chakra.header
        bg={bg}
        border="none"
        borderColor="gray.600"
        borderBottomWidth={1}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          mx="auto"
          gap={40}
        >
          <HStack spacing={4} display="flex" alignItems="center">
            <Box
              display={{
                base: "inline-flex",
                md: "none",
              }}
            >
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray"
                _dark={{
                  color: "inherit",
                }}
                variant="solid"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection=""
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                <Button w="full" leftIcon={<AiFillHome />}>
                  Home
                </Button>
                <Button w="full" leftIcon={<AiOutlineInbox />}>
                  About
                </Button>
                <Button w="full" leftIcon={<BsFillCameraVideoFill />}>
                  Contact
                </Button>
              </VStack>
            </Box>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <Icon as={RiFlashlightFill} h={8} w={8} />
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>
            <chakra.h1 fontSize="xl">Logo</chakra.h1>
          </HStack>
          {/* <HStack spacing={3} display="flex" alignItems="center">
            <HStack
              spacing={3}
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
              <Button variant="ghost" leftIcon={<AiFillHome />} size="sm">
                Dashboard
              </Button>
              <Button
                variant="solid"
                colorScheme="brand"
                leftIcon={<AiOutlineInbox />}
                size="sm"
              >
                Inbox
              </Button>
              <Button
                variant="ghost"
                leftIcon={<BsFillCameraVideoFill />}
                size="sm"
              >
                Videos
              </Button>
            </HStack>
            <chakra.a
              p={3}
              color="gray.800"
              _dark={{
                color: "inherit",
              }}
              rounded="sm"
              _hover={{
                color: "gray.800",
                _dark: {
                  color: "gray.600",
                },
              }}
            >
              <AiFillBell />
              <VisuallyHidden>Notifications</VisuallyHidden>
            </chakra.a>

            <Avatar
              size="sm"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
          </HStack> */}
          <Tabs
            defaultIndex={1}
            borderBottomColor="transparent"
            display="inline-flex"
            ml={{
              base: "-60",
              md: "0",
            }}
          >
            <TabList
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
              <Tab
                py={4}
                m={0}
                _focus={{
                  boxShadow: "none",
                }}
              >
                Home
              </Tab>
              <Tab
                py={4}
                m={0}
                _focus={{
                  boxShadow: "none",
                }}
              >
                About
              </Tab>
              <Tab
                py={4}
                m={0}
                _focus={{
                  boxShadow: "none",
                }}
              >
                Contact
              </Tab>
            </TabList>

            {/* User Profile */}
            <TabList>
              <Tab>
                <chakra.a
                  p={3}
                  color="gray.800"
                  _dark={{
                    color: "inherit",
                  }}
                  rounded="sm"
                  _hover={{
                    color: "gray.800",
                    _dark: {
                      color: "gray.600",
                    },
                  }}
                >
                  <AiFillBell />
                  <VisuallyHidden>Notifications</VisuallyHidden>
                </chakra.a>
              </Tab>
              <Tab py={4} m={0}>
                <Avatar
                  size="sm"
                  name="Dan Abrahmov"
                  src="https://bit.ly/dan-abramov"
                />
              </Tab>
              <Tab>
                <chakra.a
                  p={3}
                  color="gray.800"
                  _dark={{
                    color: "inherit",
                  }}
                  rounded="sm"
                  _hover={{
                    color: "gray.800",
                    _dark: {
                      color: "gray.600",
                    },
                  }}
                >
                  <AiFillBell />
                  <VisuallyHidden>Logout</VisuallyHidden>
                </chakra.a>
              </Tab>
            </TabList>

            {/*  */}
          </Tabs>
        </Flex>
      </chakra.header>
      <Flex
        alignItems="center"
        justifyContent="center"
        mx={4}
        borderWidth={0}
        overflowX="auto"
      >
        {/* <Spacer /> */}
        <HStack spacing={3} alignItems="center" my={4}>
          {/* Categories */}
          <Menu>
            <MenuButton as={Button} gap={14} rightIcon={<ChevronDownIcon />}>
              Categories
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
          {/* Search */}
          <InputGroup
            display={
              {
                // base: "none",
                // lg: "block",
              }
            }
            ml="auto"
          >
            <InputLeftElement pointerEvents="none">
              <AiOutlineSearch />
            </InputLeftElement>
            <Input type="tel" placeholder="Search..." />
          </InputGroup>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
