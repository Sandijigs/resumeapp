import React from "react";
import {
  Box,
  Container,
  Grid,
  VStack,
  Text,
  Heading,
  Image,
  Button,
  Flex,
  Link,
  Divider,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaDownload, FaEnvelope } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var profilepic = "images/" + data.image;
    var bio = data.bio;
    var email = data.email;
    var resumeDownload = data.resumedownload;
  }

  return (
    <Box
      id="about"
      minH="100vh"
      position="relative"
      bg="linear-gradient(135deg, rgba(13, 14, 35, 0.95) 0%, rgba(5, 6, 20, 0.95) 100%)"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: "url('/images/grid.png') repeat",
        opacity: 0.1,
        mixBlendMode: "overlay",
      }}
      py={20}
    >
      <Container maxW="container.xl" position="relative">
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1.5fr" }}
          gap={{ base: 8, lg: 16 }}
          alignItems="center"
        >
          {/* Left Column - Profile Image */}
          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box
              position="relative"
              _before={{
                content: '""',
                position: "absolute",
                top: "-15px",
                left: "-15px",
                right: "15px",
                bottom: "15px",
                border: "2px solid",
                borderColor: "rgba(122, 255, 212, 0.2)",
                borderRadius: "2xl",
                zIndex: 0,
              }}
              _after={{
                content: '""',
                position: "absolute",
                top: "15px",
                left: "15px",
                right: "-15px",
                bottom: "-15px",
                border: "2px solid",
                borderColor: "rgba(0, 200, 255, 0.2)",
                borderRadius: "2xl",
                zIndex: 0,
              }}
            >
              <Image
                src={profilepic}
                alt={name}
                borderRadius="2xl"
                objectFit="cover"
                w="full"
                h="500px"
                position="relative"
                zIndex={1}
                boxShadow="0 0 25px rgba(122, 255, 212, 0.15)"
                filter="contrast(1.1) brightness(1.1)"
                transition="all 0.3s ease"
                _hover={{
                  transform: "scale(1.02)",
                  boxShadow: "0 0 30px rgba(122, 255, 212, 0.25)",
                }}
              />
            </Box>
          </MotionBox>

          {/* Right Column - Content */}
          <VStack align="stretch" spacing={8}>
            <MotionHeading
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              as="h2"
              fontSize={{ base: "4xl", lg: "5xl" }}
              bgGradient="linear(to-r, #7AFFD4, #00C8FF)"
              bgClip="text"
              letterSpacing="tight"
              position="relative"
              _after={{
                content: '""',
                position: "absolute",
                bottom: "-10px",
                left: "0",
                width: "60px",
                height: "4px",
                background: "linear-gradient(to right, #7AFFD4, #00C8FF)",
                borderRadius: "full",
              }}
            >
              About Me
            </MotionHeading>

            <MotionText
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              fontSize="lg"
              color="rgba(255, 255, 255, 0.85)"
              lineHeight="1.8"
              letterSpacing="0.3px"
              sx={{
                textShadow: "0 0 10px rgba(122, 255, 212, 0.1)",
              }}
            >
              {bio}
            </MotionText>

            <Box
              p={6}
              bg="rgba(13, 14, 35, 0.5)"
              borderRadius="2xl"
              backdropFilter="blur(12px)"
              border="1px solid rgba(122, 255, 212, 0.1)"
              boxShadow="0 8px 32px 0 rgba(0, 0, 0, 0.37)"
            >
              <VStack align="stretch" spacing={4}>
                <MotionHeading
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  as="h3"
                  fontSize="2xl"
                  color="rgba(255, 255, 255, 0.9)"
                  letterSpacing="wide"
                >
                  Contact Details
                </MotionHeading>

                <Flex
                  gap={4}
                  flexWrap="wrap"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  as={motion.div}
                >
                  <Link href={`mailto:${email}`}>
                    <Button
                      leftIcon={<FaEnvelope />}
                      variant="outline"
                      size="lg"
                      borderColor="rgba(122, 255, 212, 0.3)"
                      color="white"
                      bg="rgba(122, 255, 212, 0.05)"
                      _hover={{
                        bg: "rgba(122, 255, 212, 0.2)",
                        borderColor: "rgba(122, 255, 212, 0.5)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 0 20px rgba(122, 255, 212, 0.2)",
                      }}
                      transition="all 0.3s ease"
                    >
                      {email}
                    </Button>
                  </Link>

                  <Link href={resumeDownload} isExternal>
                    <Button
                      leftIcon={<FaDownload />}
                      size="lg"
                      bg="rgba(0, 200, 255, 0.2)"
                      color="white"
                      _hover={{
                        bg: "rgba(0, 200, 255, 0.3)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 0 20px rgba(0, 200, 255, 0.2)",
                      }}
                      transition="all 0.3s ease"
                    >
                      Download Resume
                    </Button>
                  </Link>
                </Flex>
              </VStack>
            </Box>
          </VStack>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
