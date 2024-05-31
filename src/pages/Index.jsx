import { Box, Container, Flex, Heading, Text, VStack, Image, Button, HStack, Circle } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";

const bouquets = [
  {
    id: 1,
    name: "Rose Delight",
    description: "A beautiful bouquet of fresh roses.",
    price: "$29.99",
    image: "/images/rose-delight.jpg",
  },
  {
    id: 2,
    name: "Tulip Wonderland",
    description: "A vibrant bouquet of colorful tulips.",
    price: "$24.99",
    image: "/images/tulip-wonderland.jpg",
  },
  {
    id: 3,
    name: "Sunflower Bliss",
    description: "A cheerful bouquet of sunflowers.",
    price: "$19.99",
    image: "/images/sunflower-bliss.jpg",
  },
  {
    id: 4,
    name: "Lily Elegance",
    description: "An elegant bouquet of white lilies.",
    price: "$34.99",
    image: "/images/lily-elegance.jpg",
    color: "white",
  },
  {
    id: 5,
    name: "Orchid Mystique",
    description: "A mystique bouquet of purple orchids.",
    price: "$39.99",
    image: "/images/orchid-mystique.jpg",
    color: "purple",
  },
  {
    id: 6,
    name: "Daisy Dream",
    description: "A dreamy bouquet of yellow daisies.",
    price: "$22.99",
    image: "/images/daisy-dream.jpg",
    color: "yellow",
  },
  {
    id: 7,
    name: "Red Roses",
    description: "A classic bouquet of stunning red roses.",
    price: "$32.99",
    image: "/images/red-roses.jpg",
    color: "red",
  },
  {
    id: 8,
    name: "Red Tulips",
    description: "A vibrant bouquet of red tulips.",
    price: "$27.99",
    image: "/images/red-tulips.jpg",
    color: "red",
  },
  {
    id: 9,
    name: "Red Lilies",
    description: "An elegant bouquet of red lilies.",
    price: "$37.99",
    image: "/images/red-lilies.jpg",
    color: "red",
  },
];

const Index = () => {
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.100" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">Flower Subscription Store</Heading>
        <HStack spacing={4}>
          <Link to="/">Home</Link>
          <Link to="/bouquets">Bouquets</Link>
          <Link to="/subscription-plans">Subscription Plans</Link>
          <Link to="/contact">Contact</Link>
        </HStack>
      </Flex>

      <Box textAlign="center" my={10}>
        <Heading>Welcome to Our Flower Subscription Store</Heading>
        <Text fontSize="lg" mt={4}>Subscribe to receive beautiful flower bouquets every month.</Text>
      </Box>

      <Box mb={6}>
        <Heading size="md" mb={4}>Filter by Color</Heading>
        <HStack spacing={4}>
          <Button onClick={() => handleColorChange("")}>All</Button>
          <Button onClick={() => handleColorChange("red")}>
            <Circle size="20px" bg="red.500" mr={2} />
            Red
          </Button>
          <Button onClick={() => handleColorChange("white")}>
            <Circle size="20px" bg="gray.200" mr={2} />
            White
          </Button>
          <Button onClick={() => handleColorChange("purple")}>
            <Circle size="20px" bg="purple.500" mr={2} />
            Purple
          </Button>
          <Button onClick={() => handleColorChange("yellow")}>
            <Circle size="20px" bg="yellow.400" mr={2} />
            Yellow
          </Button>
        </HStack>
      </Box>

      <Box>
        <Heading size="lg" mb={6}>Our Bouquets</Heading>
        <Flex wrap="wrap" justifyContent="space-around">
          {bouquets
            .filter((bouquet) => selectedColor === "" || bouquet.color === selectedColor)
            .map((bouquet) => (
              <Box key={bouquet.id} borderWidth="1px" borderRadius="lg" overflow="hidden" maxW="sm" mb={6}>
                <Image src={bouquet.image} alt={bouquet.name} />
                <Box p={6}>
                  <Heading size="md">{bouquet.name}</Heading>
                  <Text mt={4}>{bouquet.description}</Text>
                  <Text fontWeight="bold" mt={4}>{bouquet.price}</Text>
                  <Button colorScheme="teal" mt={4}>Subscribe</Button>
                </Box>
              </Box>
            ))}
        </Flex>
      </Box>

      <Footer />
    </Container>
  );
};

const Footer = () => (
  <Box as="footer" bg="gray.100" p={4} mt={10}>
    <Text textAlign="center" fontSize="sm">
      Opening Hours: Monday - Saturday, 13:00 - 18:00
    </Text>
  </Box>
);

export default Index;