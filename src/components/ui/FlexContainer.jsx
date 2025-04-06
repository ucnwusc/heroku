import {Flex} from "@chakra-ui/react";

const FlexContainer = ({children, ...props}) => {
	return <Flex w="prose" maxW="80%" mx="auto" {...props}>
        {children}
    </Flex>;
};

export default FlexContainer;
