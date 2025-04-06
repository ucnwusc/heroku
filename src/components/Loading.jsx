import {Center} from "@chakra-ui/react";
import Lottie from "lottie-react";
import loading from "../animations/loading.json";

const Loading = (props) => {
	return <Center bg="blackAlpha.500" position="absolute" top="0" left="0" right="0" bottom="0">
	    <Center w="30%" {...props}>
	        <Lottie animationData={loading} />
	    </Center>
	</Center>
};

export default Loading;
