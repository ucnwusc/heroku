import {Flex, Text} from "@chakra-ui/react";

const Logo = (props) => {
    // return <Image src="logo.png" />

    return <Flex
        direction="column" borderLeft="2px" borderColor="chakra-body-text" fontSize="xl" fontWeight="bold" px="3" lineHeight="1.1" {...props}
    >
        <Text>Sound <Text as="span" color="primary.300">of</Text></Text>
        <Text>Molecules</Text>
    </Flex>
};

export default Logo;
