import { Container, Flex, Text, HStack, Button} from '@chakra-ui/react'
import { CiSquarePlus } from "react-icons/ci";
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Container maxWidth={"1140px"} px={4}>
        <Flex
         h={16}
         alignItems={"center"}
         justifyContent={"space-between"}
         flexDir={{
            base: "column",
            sm: "row"
         }}
        >
            <Text
                fontSize={{
                    base: "22px",
                    sm: "28px"
                }}
                fontWeight={"bold"}
                textTransform={"uppercase"}
                textAlign={"center"}
                bgClip={"text"}
                color={"white"}
            >
                <Link to={"/"}>Product Store 🛒</Link>
            </Text>
                
            <HStack
                spacing={2}
                alignItems={"center"}
            >
                <Link to={"/create"}>
                    <Button>
                    <CiSquarePlus fontSize={20}/>
                    </Button>
                </Link>
            </HStack>

        </Flex>
    </Container>
  )
}

export default Navbar