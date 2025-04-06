import {Flex} from "@chakra-ui/react";

const Main = ({children, ...props}) => {
    return <Flex as="main" direction="column" alignItems="center" w="full" mx="auto" flex="1" {...props}>
        {children}
    </Flex>;
};

export default Main;
