import {Text} from "@chakra-ui/react";
import {IconArrowLeft} from "@tabler/icons-react";
import {useNavigate} from "react-router";
import {LinkArrowLeft} from "../../components/ui/Links";
import Loading from "../../components/Loading.jsx";
import ErrorTemplate from "./ErrorTemplate";

const Error404 = () => {
    const nav = useNavigate();

    return <ErrorTemplate code="404">
        <Text m="2">
            Page not found.
        </Text>
        <LinkArrowLeft onClick={() => nav(-1)} mt="4" color="primary.500" _hover={{color: "primary.600"}}>
            Go back?
        </LinkArrowLeft>
    </ErrorTemplate>;
};

export default <Error404 />;
