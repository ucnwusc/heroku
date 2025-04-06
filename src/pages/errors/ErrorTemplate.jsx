import {Heading} from "@chakra-ui/react";
import {ColorModeSwitcher} from "../../components/ColorModeSwitcher";
import Main from "../../components/ui/Main";

export const ErrorTemplate = ({code, children}) => {
    return <Main justifyContent="center" h="full">
        <ColorModeSwitcher position="absolute" top="4" right="4" />
        <Heading size="4xl">{code}</Heading>
        {children}
    </Main>;
};

export default ErrorTemplate;
