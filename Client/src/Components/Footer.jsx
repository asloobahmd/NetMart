import React from "react";
import {
  Box,
  Stack,
  HStack,
  VStack,
  Link,
  Divider,
  Image,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

import logo from "../assets/Logo.png";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  const textColors = "text-grey-900 dark:text-white text-gray-600";
  const bgColors = "bg-white dark:bg-bgdark";

  const bg = useColorModeValue("gray.50", "gray.800");
  return (
    <div className="">
      <Divider colorScheme="black" />
      <Box p={{ base: 5, md: 8 }} maxW="full" bg={bg} marginInline="auto">
        <Stack
          spacing={{ base: 8, md: 0 }}
          justifyContent="space-between"
          direction={{ base: "column", md: "row" }}
        >
          <Box maxW="300px">
            <Link href="" isExternal>
              <Image w="30%" src={logo} alt="TemplatesKart" />
            </Link>
            <Text mt={2} color="gray.500" fontSize="md">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia,
              enim.
            </Text>
          </Box>
          <HStack
            spacing={4}
            justifyContent={{ sm: "space-between", md: "normal" }}
          >
            <VStack spacing={4} alignItems="flex-start">
              <Text fontSize="md" fontWeight="bold">
                Shop
              </Text>
              <VStack spacing={2} alignItems="flex-start" color="gray.500">
                <CustomLink>Clothing</CustomLink>
                <CustomLink>Electronics</CustomLink>
                <CustomLink>Personal Care</CustomLink>
                <CustomLink>Travel Gear</CustomLink>
              </VStack>
            </VStack>
            <VStack spacing={4} alignItems="flex-start">
              <Text fontSize="md" fontWeight="bold">
                Company
              </Text>
              <VStack spacing={2} alignItems="flex-start" color="gray.500">
                <CustomLink>About Us</CustomLink>
                <CustomLink>Privacy Policy</CustomLink>
                <CustomLink>Track My Order</CustomLink>
                <CustomLink>Promotions</CustomLink>
              </VStack>
            </VStack>
            <VStack spacing={4} alignItems="flex-start">
              <Text fontSize="md" fontWeight="bold">
                Support
              </Text>
              <VStack spacing={2} alignItems="flex-start" color="gray.500">
                <CustomLink>FAQ's</CustomLink>
                <CustomLink>Privacy Policy</CustomLink>
                <CustomLink>Terms & Condition</CustomLink>
                <CustomLink>Payment</CustomLink>
              </VStack>
            </VStack>
            <VStack spacing={4} alignItems="flex-start">
              <Text fontSize="md" fontWeight="bold">
                Social Links
              </Text>
              <VStack spacing={6} alignItems="flex-start" color="gray.500">
                <CustomLink>No.18 Kawdana Road, Dehiwala.</CustomLink>
                <CustomLink>+94 0767722381</CustomLink>
                <CustomLink>care@netmart.lk</CustomLink>
              </VStack>
            </VStack>
          </HStack>
        </Stack>

        <Divider my={4} colorScheme="black" />

        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={20}
          justifyContent="space-arround"
        >
          <Text fontSize="md">All rights reserved @2024</Text>
          <Stack spacing={8} direction={{ base: "row", md: "row" }}>
            <IoLogoFacebook size={40} />
            <IoLogoInstagram size={40} />
            <IoLogoTwitter size={40} />
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};

const CustomLink = ({ children, ...props }) => {
  return (
    <Link
      href="#"
      fontSize="sm"
      _hover={{ textDecoration: "underline" }}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Footer;
