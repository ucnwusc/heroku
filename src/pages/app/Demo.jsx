import {Flex, Text} from "@chakra-ui/react";
import {useEffect} from "react";
import DrugInfo from "../../components/DrugInfo";
// import Search from "../../components/Search";
import useDiseaseStore from "../../stores/diseases";

const Demo = () => {
    const prepDemo = useDiseaseStore(state => state.prepDemo); // full version: state.prop

    useEffect(() => {
        prepDemo();
    }, []);

    return <Flex h="full" w="full" overflow="hidden" bg="gray.900" justify="center" align="center"
                 color="white">
        {/*<ColorModeSwitcher position="absolute" top="4" right="4" />*/}

        {/* Full version: */}
        {/*<Search w="xs" />*/}
        {/* Demo version: */}
        <Text position="absolute" top="6" left="6" direction="column" color="white" w="xs">Treatment for: Covid</Text>

        <DrugInfo />
    </Flex>;
};

export default <Demo />;
