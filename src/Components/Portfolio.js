import React from "react";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Image,
  Link,
  Text,
  VStack,
  Badge,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const BackgroundAnimation = () => {
  return (
    <>
      {/* Ultra-dark gradient overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgGradient="radial-gradient(circle at 80% 20%, rgba(2, 6, 20, 0.15), transparent 60%),
                   radial-gradient(circle at 20% 70%, rgba(1, 4, 15, 0.1), transparent 60%)"
        zIndex={1}
      />

      {/* Extremely subtle glow elements */}
      {Array.from({ length: 3 }).map((_, index) => (
        <MotionBox
          key={`glow-${index}`}
          position="absolute"
          width={`${Math.random() * 200 + 100}px`}
          height={`${Math.random() * 200 + 100}px`}
          borderRadius="full"
          bg={`rgba(${Math.floor(Math.random() * 3)}, ${Math.floor(
            Math.random() * 5 + 2
          )}, ${Math.floor(Math.random() * 15 + 20)}, 0.04)`}
          filter="blur(100px)"
          top={`${Math.random() * 100}%`}
          left={`${Math.random() * 100}%`}
          initial={{ opacity: 0.05, scale: 1 }}
          animate={{
            opacity: [0.02, 0.05, 0.02],
            scale: [1, 1.1, 1],
            x: [0, Math.random() * 15 - 7, 0],
            y: [0, Math.random() * 15 - 7, 0],
          }}
          transition={{
            duration: Math.random() * 25 + 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          zIndex={1}
        />
      ))}

      {/* Barely visible circuit lines */}
      {Array.from({ length: 4 }).map((_, index) => (
        <MotionBox
          key={`line-${index}`}
          position="absolute"
          height="1px"
          width={`${Math.random() * 300 + 100}px`}
          bg="linear-gradient(90deg, transparent, rgba(10, 20, 50, 0.05), transparent)"
          top={`${Math.random() * 100}%`}
          left={`${Math.random() * 100}%`}
          transform={`rotate(${Math.random() * 360}deg)`}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.1, 0] }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
          zIndex={1}
        />
      ))}
    </>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      bg="rgba(2, 3, 8, 0.9)"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="0 8px 32px 0 rgba(0, 0, 0, 0.8)"
      border="1px solid rgba(10, 15, 25, 0.4)"
      _hover={{
        transform: "translateY(-8px)",
        boxShadow: "0 15px 35px rgba(0, 0, 5, 0.9)",
        border: "1px solid rgba(15, 30, 60, 0.2)",
      }}
      transition="all 0.3s ease"
    >
      <Link href={project.url} isExternal _hover={{ textDecoration: "none" }}>
        <Box position="relative" h="200px" overflow="hidden">
          <Image
            src={`images/${project.image}`}
            alt={project.title}
            w="100%"
            h="100%"
            objectFit="cover"
            onError={(e) => {
              console.error("Image failed to load:", e.target.src);
              e.target.src = "images/placeholder.jpg"; // Fallback image
            }}
            transition="transform 0.5s ease"
            _hover={{ transform: "scale(1.05)" }}
          />
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="linear-gradient(to top, rgba(5, 8, 20, 0.9), rgba(5, 8, 20, 0.4) 50%, transparent)"
          />
        </Box>
        <Box p={6}>
          <Heading size="md" color="rgba(240, 240, 250, 0.95)" mb={2}>
            {project.title}
          </Heading>

          {/* Display tech tags from the project title */}
          <Box mb={3}>
            {project.title
              .match(/\([^)]*\)/g)?.[0]
              ?.replace(/[()]/g, "")
              .split(",")
              .map((tech, i) => (
                <Badge
                  key={i}
                  mr={2}
                  mb={2}
                  px={3}
                  py={1}
                  borderRadius="full"
                  bg="rgba(23, 37, 84, 0.6)"
                  color="rgba(147, 197, 253, 0.9)"
                  fontSize="xs"
                >
                  {tech.trim()}
                </Badge>
              ))}
          </Box>

          <Text color="rgba(203, 213, 225, 0.7)">{project.category}</Text>
        </Box>
      </Link>
    </MotionBox>
  );
};

const Portfolio = ({ data }) => {
  return (
    <Box
      id="portfolio"
      minH="100vh"
      py={20}
      position="relative"
      overflow="hidden"
      bg="linear-gradient(135deg, rgba(0, 1, 6, 1) 0%, rgba(0, 0, 3, 1) 100%)"
      sx={{
        isolation: "isolate",
      }}
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: "url('/images/grid.png') repeat",
        opacity: 0.01,
        mixBlendMode: "overlay",
        zIndex: 0,
      }}
    >
      {/* Nearly black overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(0, 2, 10, 0.95)"
        zIndex={0}
      />

      <BackgroundAnimation />

      <Container maxW="container.xl" position="relative" zIndex={2}>
        <VStack spacing={12} align="stretch">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading
              as="h2"
              fontSize={{ base: "4xl", lg: "5xl" }}
              bgGradient="linear(to-r, #64A9FA, #2563EB)"
              bgClip="text"
              textAlign="center"
              mb={4}
              position="relative"
              _after={{
                content: '""',
                position: "absolute",
                bottom: "-10px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "80px",
                height: "4px",
                background: "linear-gradient(to right, #2563EB, #1E3A8A)",
                borderRadius: "full",
              }}
            >
              Projects
            </Heading>
            <Text
              color="rgba(226, 232, 240, 0.8)"
              textAlign="center"
              fontSize="lg"
              maxW="2xl"
              mx="auto"
              mb={12}
            >
              Check out some of my latest work
            </Text>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {data?.projects?.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Portfolio;
