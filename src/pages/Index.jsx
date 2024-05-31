import { Box, Container, Flex, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Smartphone", price: "$699", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: "$999", image: "/images/laptop.jpg" },
  { id: 3, name: "Smartwatch", price: "$199", image: "/images/smartwatch.jpg" },
  { id: 4, name: "Headphones", price: "$149", image: "/images/headphones.jpg" },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          <Link to="/">ElectroShop</Link>
        </Heading>
        <Box>
          <Link to="/" style={{ marginRight: "20px" }}>Home</Link>
          <Link to="/products">Products</Link>
        </Box>
      </Flex>

      <Box mt={8}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">
          Featured Products
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {products.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" mx="auto" />
              <VStack mt={4} spacing={2}>
                <Text fontWeight="bold" fontSize="lg">{product.name}</Text>
                <Text color="gray.500">{product.price}</Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Index;