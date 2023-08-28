import { Button, HStack, Icon, Stack, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineInfoCircle } from "react-icons/ai"
import {
    BsArrowUpCircleFill, 
    BsFillArrowDownCircleFill 
} from "react-icons/bs"
const PortfolioSection = () => {
  return (
    <HStack 
        justify="space-between" 
        bg="white" 
        borderRadius="xl" 
        p="6" 
        align={{
            base: "flex-start",
            xl: "center",
        }}
        flexDir={{
            base: "column",
            xl: "row",
        }}
        spacing={{
            base: 4,
            xl: 0,
        }}
    >
        <HStack 
        spacing={{
            base: 0,
            xl: 16,
        }}
        align={{
            base: "flex-start",
            xl: "center",
        }}
        flexDir={{
            base: "column",
            xl: "row",
        }}
    >
        <Stack>
            <HStack color="black.80">
                <Text fontSize="sm">Total Portfolio Value</Text>
                <Icon as={AiOutlineInfoCircle} ></Icon>
            </HStack>
            <Text textStyle="h2" fontWeight="medium">
            $USD 112,312.24
            </Text>
        </Stack>

        <Stack>
            <HStack color="black.80">
                <Text fontSize="sm">Wallet Balances</Text>
            </HStack>
            <HStack 
                spacing={2}
                    align={{
                    base: "flex-start",
                    sm: "center",
                }}
                flexDir={{
                    base: "column",
                    sm: "row",
                }}
            >
            <HStack>
            <Text textStyle="h2" fontWeight="medium">
            &#8383; 22.39401000
            </Text>{" "} 
            <Tag colorScheme='gray' fontWeight="medium">
                BTC
            </Tag>
            </HStack>
            <HStack>
            <Text textStyle="h2" fontWeight="medium">
                $ 1,300.00
            </Text>{" "} 
            <Tag colorScheme='gray'>USD</Tag>
            </HStack>
            </HStack> 
        </Stack>
        </HStack>

        <HStack>
            <Button leftIcon={<Icon as={BsFillArrowDownCircleFill} />}>Desposit</Button>
            <Button leftIcon={<Icon as={BsArrowUpCircleFill} />}>Withdraw </Button>
        </HStack>
    </HStack>
  );
};

export default PortfolioSection