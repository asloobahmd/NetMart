import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const CFaUserAlt = chakra(FaUserAlt);
const CFaEmail = chakra(IoMdMail);
const CFaLock = chakra(FaLock);

const App = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  const bg = useColorModeValue("white", "gray.900");

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      backgroundColor=""
      justifyContent="center"
      alignItems="center"
      my={8}
      mb={8}
    >
      <Stack
        flexDir="column"
        mb="2"
        py={3}
        justifyContent="center"
        alignItems="center"
        bg={bg}
        borderRadius={8}
      >
        <Box display="flex" gap={10}>
          {/* <Avatar bg="Black" /> */}
          <Heading color="">Login</Heading>
        </Box>

        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
              bg={bg}
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaEmail color="gray.400" />}
                  />
                  <Input type="email" placeholder="email address" />
                </InputGroup>
              </FormControl>

              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.400" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                color="black"
                width="full"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Don't have an account?{" "}
        <Link color="" href="/signup">
          SignUp
        </Link>
      </Box>
    </Flex>
  );
};

export default App;
