import { useState } from "react";
import { Box, Container, Flex, Heading, Image, Input, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Smartphone", price: 699, image: "/images/smartphone.jpg", category: "Electronics" },
  { id: 2, name: "Laptop", price: 999, image: "/images/laptop.jpg", category: "Electronics" },
  { id: 3, name: "Smartwatch", price: 199, image: "/images/smartwatch.jpg", category: "Wearables" },
  { id: 4, name: "Headphones", price: 149, image: "/images/headphones.jpg", category: "Accessories" },
];

const Index = () => {
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handlePriceRangeChange = (event) => {
    const value = event.target.value.split(",");
    setPriceRange([parseInt(value[0]), parseInt(value[1])]);
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(query) &&
        (category === "" || product.category === category) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1]
      )
    );
  };
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
        <Input
          placeholder="Search for products..."
          value={searchQuery}
          onChange={handleSearch}
          mb={4}
        />
        <Flex mb={4}>
          <Select placeholder="Select category" onChange={handleCategoryChange} mr={4}>
            <option value="Electronics">Electronics</option>
            <option value="Wearables">Wearables</option>
            <option value="Accessories">Accessories</option>
          </Select>
          <Input
            placeholder="Price range (e.g. 100,500)"
            onChange={handlePriceRangeChange}
          />
        </Flex>
        <Input
          placeholder="Search for products..."
          value={searchQuery}
          onChange={handleSearch}
          mb={4}
        />
        <Heading as="h2" size="xl" mb={4} textAlign="center">
          Featured Products
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {filteredProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" mx="auto" />
              <VStack mt={4} spacing={2}>
                <Text fontWeight="bold" fontSize="lg">{product.name}</Text>
                <Text color="gray.500">${product.price}</Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Index;