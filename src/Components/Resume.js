import React, { useEffect, useRef } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Progress,
  useTheme,
  Flex,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import {
  FaReact,
  FaNode,
  FaPython,
  FaGit,
  FaJs,
  FaMobile,
} from "react-icons/fa";
import { SiExpress, SiSolidity } from "react-icons/si";

const MotionBox = motion(Box);
const MotionProgress = motion(Progress);

// Animated background elements
const BackgroundAnimation = () => {
  console.log("BackgroundAnimation rendering");
  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => (
        <MotionBox
          key={`particle-${index}`}
          position="absolute"
          width={`${Math.random() * 15 + 5}px`}
          height={`${Math.random() * 15 + 5}px`}
          borderRadius="full"
          bg="rgba(122, 255, 212, 0.3)"
          top={`${Math.random() * 100}%`}
          left={`${Math.random() * 100}%`}
          initial={{
            opacity: 0.3,
            scale: 0.8,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 60 - 30],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          zIndex={5}
        />
      ))}

      {/* Circuit-like lines */}
      {Array.from({ length: 5 }).map((_, index) => (
        <MotionBox
          key={`line-${index}`}
          position="absolute"
          height="1px"
          width={`${Math.random() * 200 + 100}px`}
          bg="linear-gradient(90deg, transparent, rgba(122, 255, 212, 0.3), transparent)"
          top={`${Math.random() * 100}%`}
          left={`${Math.random() * 100}%`}
          transform={`rotate(${Math.random() * 360}deg)`}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.7, 0],
            width: [
              `${Math.random() * 100 + 50}px`,
              `${Math.random() * 300 + 150}px`,
            ],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
          zIndex={1}
        />
      ))}

      {/* Larger pulsing circle */}
      <MotionBox
        position="absolute"
        borderRadius="full"
        border="1px solid rgba(122, 255, 212, 0.15)"
        width="300px"
        height="300px"
        top="30%"
        right="-150px"
        initial={{ opacity: 0.2 }}
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        zIndex={1}
      />

      {/* Another pulsing circle */}
      <MotionBox
        position="absolute"
        borderRadius="full"
        border="1px solid rgba(0, 200, 255, 0.12)"
        width="200px"
        height="200px"
        bottom="20%"
        left="-100px"
        initial={{ opacity: 0.2 }}
        animate={{
          opacity: [0.1, 0.25, 0.1],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        zIndex={1}
      />
    </>
  );
};

const SkillItem = ({ skill, level, icon, index }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      mb={6}
    >
      <Flex align="center" mb={2}>
        <Flex
          color="rgba(122, 255, 212, 0.9)"
          fontSize="2xl"
          alignItems="center"
          justifyContent="center"
          w="40px"
          h="40px"
          borderRadius="lg"
          bg="rgba(122, 255, 212, 0.1)"
          mr={4}
          as={motion.div}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
        >
          {icon}
        </Flex>
        <Text
          color="rgba(255, 255, 255, 0.9)"
          fontSize="lg"
          fontFamily="heading"
          flex="1"
        >
          {skill}
        </Text>
        <Text
          color="rgba(122, 255, 212, 0.9)"
          fontSize="lg"
          fontWeight="bold"
          fontFamily="mono"
          minW="60px"
          textAlign="right"
        >
          {level}
        </Text>
      </Flex>
      <Box position="relative">
        <MotionProgress
          value={parseInt(level)}
          h="2px"
          bg="rgba(255, 255, 255, 0.1)"
          sx={{
            '& > div[role="progressbar"]': {
              background: "linear-gradient(90deg, #7AFFD4, #00C8FF)",
              transition: "width 1s ease-in-out",
            },
          }}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
        />
        <Box
          position="absolute"
          top="50%"
          left={`${parseInt(level)}%`}
          transform="translate(-50%, -50%)"
          w="8px"
          h="8px"
          borderRadius="full"
          bg="#00C8FF"
          boxShadow="0 0 10px #00C8FF"
          as={motion.div}
          animate={{
            boxShadow: [
              "0 0 10px #00C8FF",
              "0 0 20px #00C8FF",
              "0 0 10px #00C8FF",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </Box>
    </MotionBox>
  );
};

const Resume = ({ data }) => {
  const theme = useTheme();
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    console.log("Resume animation effect running");

    controls.start({
      background: [
        "linear-gradient(135deg, rgba(13, 14, 35, 0.97) 0%, rgba(5, 6, 20, 0.97) 100%)",
        "linear-gradient(135deg, rgba(10, 12, 30, 0.97) 0%, rgba(3, 9, 25, 0.97) 100%)",
        "linear-gradient(135deg, rgba(13, 14, 35, 0.97) 0%, rgba(5, 6, 20, 0.97) 100%)",
      ],
      transition: {
        duration: 10,
        ease: "easeInOut",
        repeat: Infinity,
      },
    });

    return () => {
      controls.stop();
    };
  }, [controls]);

  const getSkillIcon = (skillName) => {
    switch (skillName.toLowerCase()) {
      case "reactjs":
        return <FaReact />;
      case "react native":
        return <FaMobile />;
      case "node.js":
        return <FaNode />;
      case "express.js":
        return <SiExpress />;
      case "python":
        return <FaPython />;
      case "git":
        return <FaGit />;
      case "javascript":
        return <FaJs />;
      case "solidity":
        return <SiSolidity />;
      default:
        return null;
    }
  };

  return (
    <MotionBox
      ref={sectionRef}
      minH="100vh"
      py={20}
      position="relative"
      overflow="hidden"
      animate={controls}
      initial={{
        background:
          "linear-gradient(135deg, rgba(13, 14, 35, 0.97) 0%, rgba(5, 6, 20, 0.97) 100%)",
      }}
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
    >
      <Box
        position="absolute"
        top="10px"
        right="10px"
        w="10px"
        h="10px"
        bg="red.500"
        borderRadius="full"
        zIndex="100"
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
              bgGradient="linear(to-r, #7AFFD4, #00C8FF)"
              bgClip="text"
              textAlign="center"
              mb={4}
            >
              Technical Skills
            </Heading>
            <Text
              color="rgba(255, 255, 255, 0.8)"
              textAlign="center"
              fontSize="lg"
              maxW="2xl"
              mx="auto"
              mb={12}
            >
              {data?.skillmessage}
            </Text>
          </MotionBox>

          <Box
            bg="rgba(13, 14, 35, 0.5)"
            borderRadius="2xl"
            backdropFilter="blur(12px)"
            border="1px solid rgba(122, 255, 212, 0.1)"
            boxShadow="0 8px 32px 0 rgba(0, 0, 0, 0.37)"
            p={8}
            position="relative"
            zIndex={10}
          >
            {data?.skills?.map((skill, index) => (
              <SkillItem
                key={skill.name}
                skill={skill.name}
                level={skill.level}
                icon={getSkillIcon(skill.name)}
                index={index}
              />
            ))}
          </Box>
        </VStack>
      </Container>
    </MotionBox>
  );
};

export default Resume;
