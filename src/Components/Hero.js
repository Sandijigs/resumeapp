import React from "react";
import TypeWriter from "react-typewriter";
import {
  Box,
  Heading,
  Text,
  Container,
  Stack,
  // useColorModeValue,
  Button,
  VStack,
  Flex,
  HStack,
  IconButton,
  Link,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDiscord,
  FaHandPeace,
  FaChevronDown,
} from "react-icons/fa";
import ParticleBackground from "./ParticleBackground";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionHStack = motion(HStack);

const SocialButton = ({ icon, label, href }) => {
  return (
    <IconButton
      as={Link}
      href={href}
      target="_blank"
      aria-label={label}
      icon={icon}
      fontSize="24px"
      size="lg"
      color="brand.light"
      variant="ghost"
      _hover={{
        bg: "brand.primary",
        color: "brand.dark",
        transform: "translateY(-4px)",
      }}
      transition="all 0.3s ease"
    />
  );
};

const Hero = ({ data }) => {
  if (data) {
    var name = data.name;
    var occupation = data.occupation;
    var description = data.description;
    var city = data.address.city;
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      direction="column"
      position="relative"
      overflow="hidden"
      id="home"
    >
      <ParticleBackground />
      <Container maxW="container.lg" position="relative" zIndex={1}>
        <VStack spacing={8} alignItems="center" textAlign="center">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            mb={8}
            width="100%"
          >
            <Card
              bg="rgba(13, 15, 48, 0.85)"
              borderRadius="xl"
              borderWidth="1px"
              borderColor="rgba(0, 255, 157, 0.3)"
              boxShadow="0 0 30px rgba(0, 255, 157, 0.15)"
              overflow="hidden"
              p={6}
              backdropFilter="blur(12px)"
              transform="translateZ(0)"
            >
              <CardBody>
                <VStack spacing={6}>
                  <Heading
                    as="h1"
                    fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
                    bgGradient="linear(to-r, #7AFFD4, #98E2FF)"
                    bgClip="text"
                    letterSpacing="tight"
                    lineHeight="1.2"
                    filter="drop-shadow(0 0 8px rgba(122, 255, 212, 0.3))"
                  >
                    <TypeWriter typing={0.5}>
                      {name ? (
                        <Flex align="center" justify="center">
                          Hello! I'm {name}{" "}
                          <Box
                            as={motion.div}
                            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                              repeatType: "loop",
                              ease: "easeInOut",
                            }}
                            display="inline-block"
                            ml={2}
                          >
                            👋
                          </Box>
                        </Flex>
                      ) : null}
                    </TypeWriter>
                  </Heading>

                  <MotionText
                    fontSize={{ base: "xl", md: "2xl" }}
                    color="rgba(180, 210, 255, 0.9)"
                    fontFamily="mono"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    letterSpacing="0.5px"
                  >
                    A full-stack JavaScript developer blending Web3 and AI to
                    create dynamic, user-focused applications ✨
                  </MotionText>

                  <MotionHStack
                    spacing={6}
                    as={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    {data?.social?.map((network) => (
                      <SocialButton
                        key={network.name}
                        label={network.name}
                        href={network.url}
                        icon={
                          network.name === "github" ? (
                            <FaGithub />
                          ) : network.name === "linkedin" ? (
                            <FaLinkedin />
                          ) : network.name === "twitter" ? (
                            <FaTwitter />
                          ) : network.name === "discord" ? (
                            <FaDiscord />
                          ) : null
                        }
                        fontSize="24px"
                        color="rgba(180, 210, 255, 0.8)"
                        _hover={{
                          bg: "rgba(122, 255, 212, 0.2)",
                          color: "#7AFFD4",
                          transform: "translateY(-4px)",
                        }}
                      />
                    ))}
                  </MotionHStack>

                  <Stack
                    direction={{ base: "column", md: "row" }}
                    spacing={6}
                    as={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    mt={4}
                  >
                    <Button
                      size="lg"
                      variant="solid"
                      fontSize="xl"
                      py={8}
                      px={12}
                      bg="rgba(122, 255, 212, 0.15)"
                      color="rgba(180, 210, 255, 0.9)"
                      _hover={{
                        bg: "rgba(122, 255, 212, 0.25)",
                        transform: "translateY(-2px)",
                      }}
                      transition="all 0.3s ease"
                      backdropFilter="blur(4px)"
                      onClick={scrollToProjects}
                    >
                      View Projects
                    </Button>
                  </Stack>
                </VStack>
              </CardBody>
            </Card>
          </MotionBox>
        </VStack>
      </Container>

      <Box
        position="absolute"
        bottom="2rem"
        left="50%"
        transform="translateX(-50%)"
        zIndex={2}
      >
        <IconButton
          as={motion.button}
          icon={<FaChevronDown />}
          aria-label="Scroll to About"
          onClick={scrollToAbout}
          variant="ghost"
          fontSize="2xl"
          color="rgba(180, 210, 255, 0.9)"
          bg="rgba(255, 255, 255, 0.1)"
          borderRadius="full"
          width="50px"
          height="50px"
          backdropFilter="blur(4px)"
          border="2px solid rgba(255, 255, 255, 0.1)"
          boxShadow="0 0 15px rgba(255, 255, 255, 0.2)"
          _hover={{
            bg: "rgba(122, 255, 212, 0.2)",
            color: "#7AFFD4",
            boxShadow: "0 0 20px rgba(122, 255, 212, 0.3)",
            border: "2px solid rgba(122, 255, 212, 0.3)",
          }}
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          sx={{
            "&:hover": {
              animation: "none",
            },
          }}
        />
      </Box>
    </Flex>
  );
};

export default Hero;
