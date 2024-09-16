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
  Show,
  SimpleGrid,
  Link,
} from "@chakra-ui/react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

import { FaShoppingCart } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";

import { ChevronDownIcon } from "@chakra-ui/icons";

import logo from "../assets/Logo.png";

import { Link as RouterLink } from "react-router-dom";

import ThemeToggle from "./Buttons/ThemeToggle";

const Navbar = () => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  const menus = [
    { name: "Home", link: "/" },
    { name: "Offers", link: "/offers" },
    { name: "Mens", link: "/mens" },
    { name: "Womens", link: "/womens" },
    { name: "Kids", link: "/kids" },
    { name: "Electronics", link: "/electronics" },
    { name: "Personal Care", link: "/personal-care" },
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
            gap={20}
          >
            <Box
              display={{
                base: "inline-flex",
                md: "none",
              }}
              flexDirection={{
                base: "row",
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
              <SimpleGrid
                columns={5}
                spacing={2}
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "grid" : "none"}
                p={2}
                pb={4}
                py={4}
                m={2}
                bg="gray.300"
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                <Box>
                  {menus?.map((menu, i) => {
                    return (
                      <Link
                        href={menu.link}
                        textDecoration="none"
                        _hover={{ textDecoration: "none" }}
                        _focus={{ boxShadow: "none" }}
                        color="inherit"
                        display="inline-flex"
                      >
                        <Text
                          key={i}
                          py={4}
                          m={0}
                          _focus={{
                            boxShadow: "none",
                          }}
                        >
                          {" "}
                          {menu.name}
                        </Text>
                      </Link>
                    );
                  })}

                  <Tabs
                    defaultIndex="none"
                    borderBottomColor="transparent"
                    display="inline-flex"
                  >
                    <SimpleGrid columns={2} spacing={40}>
                      {/* User Profile */}
                      <Tab py={4} gap={3} display="flex">
                        <Menu>
                          <MenuButton
                            as={RouterLink}
                            to="/user"
                            colorScheme="none"
                            textColor="black"
                          >
                            <Box display="flex" gap={4}>
                              <Avatar
                                size="sm"
                                name="Dan Abrahmov"
                                src="https://bit.ly/dan-abramov"
                              />
                              <Text>name</Text>
                            </Box>
                          </MenuButton>
                        </Menu>
                      </Tab>

                      {/* User Logout */}
                      <Tab>
                        <chakra.a
                          as={RouterLink}
                          to="/login"
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
                    </SimpleGrid>

                    {/*  */}
                  </Tabs>
                </Box>
              </SimpleGrid>
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
            <Show below="md">
              <Tabs>
                <Tab>
                  <chakra.a
                    as={RouterLink}
                    to="/cart"
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
              </Tabs>
            </Show>
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
                md: "inline-flex",
              }}
            >
              {menus?.map((menu, i) => (
                <Tab
                  key={i}
                  as={RouterLink} // Use RouterLink for internal routing
                  to={menu.link} // Use 'to' instead of 'href'
                  py={4}
                  m={0}
                  _focus={{ boxShadow: "none" }}
                  _hover={{ textDecoration: "none" }}
                  // _selected={{
                  //   color: "teal.500",
                  //   borderBottom: "2px solid teal",
                  // }}
                >
                  {menu.name}
                </Tab>
              ))}
            </TabList>
          </Tabs>

          {/* ---------------- */}

          <Show above="md">
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
                    as={RouterLink}
                    to="/cart"
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
                    <MenuButton
                      as={RouterLink}
                      to="/user"
                      colorScheme="none"
                      textColor="black"
                    >
                      <Box display="flex" alignItems="center" gap={4}>
                        <Avatar
                          size="sm"
                          name="Dan Abrahmov"
                          src="https://bit.ly/dan-abramov"
                        />
                        <Text>name</Text>
                      </Box>
                    </MenuButton>
                  </Menu>
                </Tab>

                {/* User Logout */}

                <Tab>
                  <chakra.a
                    as={RouterLink}
                    to="/login"
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
          </Show>
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
          {/* <Show below="md">
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
          </Show> */}

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
              sm: "80px",
            }}
          >
            <InputLeftElement pointerEvents="none">
              <AiOutlineSearch />
            </InputLeftElement>
            <Input type="tel" placeholder="Search..." />
          </InputGroup>
          <ThemeToggle />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
