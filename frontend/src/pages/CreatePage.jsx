import { Container, VStack, Heading, Box, Button, Input} from '@chakra-ui/react';
import React, { useState } from 'react'

const CreatePage = () => {
  const handleAddProduct = () => {
    console.log(newProduct);
  }

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: ""
  });
  return (
    <Container 
        maxw={"container-sm"}
    >
        <VStack
            spacing={8}
        >
            <Heading
                as={"h1"}
                size={"2xl"}
                textAlign={"center"}
                mb={8}
            >
                Create New Product
            </Heading>

            <Box
                w={"full"}
                p={6}
                rounded={"lg"}
                shadow={"md"}
            >
                <VStack spacing={4}>
                    <Input
                        placeholder='Product Name'
                        name='name'
                        value={newProduct.name}
                        onChange={(e) => {
                            setNewProduct({...newProduct, name: e.target.value})
                        }}
                    />
                    <Input
                        placeholder='Product Price'
                        name='price'
                        type='number'
                        value={newProduct.price}
                        onChange={(e) => {
                            setNewProduct({...newProduct, price: e.target.value})
                        }}
                    />
                    <Input
                        placeholder='Product Image'
                        name='image'
                        value={newProduct.image}
                        onChange={(e) => {
                            setNewProduct({...newProduct, image: e.target.value})
                        }}
                    />

                    <Button
                        colorScheme={'blue'}
                        onClick={handleAddProduct}
                        w={"100"}
                    >
                        Add Product
                    </Button>
                </VStack>
                
            </Box>
        </VStack>
    </Container>
  )
}

export default CreatePage