import React from "react";
import {
  Box,
  Flex,
  HStack,
  Button,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
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
  Portal,
} from "@chakra-ui/react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

import { FaShoppingCart } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";

import { ChevronDownIcon } from "@chakra-ui/icons";

import logo from "../assets/Logo.png";

const Navbar = () => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  const menus = [
    { name: "Home", link: "#home" },
    { name: "Offers", link: "#offers" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <Box shadow="md" position="fixed" w="full" zIndex="999" bg={bg}>
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
        py={0}
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          direction={{ base: "column", md: "row" }}
          mx="auto"
        >
          <HStack
            spacing={4}
            display="flex"
            alignItems="center"
            bg={bg}
            zIndex="999"
            gap={48}
          >
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
                py={4}
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
                {menus?.map((menu, i) => {
                  return <Button w="full">{menu.name}</Button>;
                })}
              </VStack>
            </Box>

            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
              marginTop={4}
            >
              <img src={logo} className=" w-18 h-14 " />

              <VisuallyHidden>NetMart</VisuallyHidden>
            </chakra.a>
          </HStack>

          {/* Menus */}
          <Tabs
            defaultIndex={0}
            borderBottomColor="transparent"
            display="flex"
            flexDirection="column"
            ml={{
              base: "-52",
              md: "32",
            }}
          >
            <TabList
              display={{
                base: "none",
                md: "inlinex",
              }}
            >
              {menus?.map((menu, i) => {
                return (
                  <Tab
                    key={i}
                    py={4}
                    m={0}
                    _focus={{
                      boxShadow: "none",
                    }}
                  >
                    {menu.name}
                  </Tab>
                );
              })}
            </TabList>
          </Tabs>

          {/* ---------------- */}

          <Tabs
            defaultIndex="none"
            borderBottomColor="transparent"
            display="inline-flex"
          >
            <TabList
              display="flex"
              gap={{
                base: "10",
                lg: "0",
              }}
            >
              {/* User Cart */}
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
                  <FaShoppingCart size={30} />
                  {/* <div className=" bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-sm text-white">
                    10
                  </div> */}
                  <VisuallyHidden>Cart</VisuallyHidden>
                </chakra.a>
              </Tab>

              {/* User Profile */}
              <Tab py={4} m={0} gap={3} display="flex">
                <Menu>
                  <MenuButton as={Button} colorScheme="none" textColor="black">
                    <Box display="flex" gap={4}>
                      <Avatar
                        size="sm"
                        name="Dan Abrahmov"
                        src="https://bit.ly/dan-abramov"
                      />
                      <Text>name</Text>
                    </Box>
                  </MenuButton>

                  <MenuList>
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>Settings</MenuItem>
                  </MenuList>
                </Menu>
              </Tab>

              {/* User Logout */}
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
                  <LuLogOut size={30} />
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
        overflowX="hidden"
        zIndex="999"
        bg={bg}
      >
        {/* <Spacer /> */}
        <HStack spacing={3} alignItems="center" my={3}>
          {/* Categories */}
          <Menu>
            <MenuButton
              as={Button}
              gap={14}
              w={36}
              rightIcon={<ChevronDownIcon />}
            >
              Categories
            </MenuButton>
            <MenuList>
              <MenuItem>Category 01</MenuItem>
              <MenuItem>Category 02</MenuItem>
              <MenuItem>Category 03</MenuItem>
              <MenuItem>Category 04</MenuItem>
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
            w={{
              lg: "700px",
              sm: "60",
            }}
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
