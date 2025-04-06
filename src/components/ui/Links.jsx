import {IconArrowRight, IconArrowLeft} from "@tabler/icons-react";
import {motion} from "framer-motion";
import {Link as RouterLink} from "react-router";
import {Box, Button, Link as ChakraLink} from "@chakra-ui/react";
import {spring} from "../../theming/transitions";

const MotionBox = motion(Box);

// base link
const Link = (props) => {
	return <ChakraLink as={RouterLink} borderRadius="md" {...props} />
};
export default Link;

// other variants
export const ButtonLink = (props) => {
    return <Button as={Link} {...props} />
}

export const LinkArrowRight = ({to, _hover, children, ...props}) => {
	return <MotionBox as={RouterLink} to={to} whileHover="hover" {...props}>
        {children}
        <MotionBox
            variants={{
                initial: { x: 0 },
                hover: { x: ".3em"},
            }}
            transition={spring}
            as={IconArrowRight}
            display="inline"
            h="1.2em"
            position="relative"
            bottom="-.2em"
            left=".4em"
        />
	</MotionBox>
}

export const LinkArrowLeft = ({to, _hover, children, ...props}) => {
	return <MotionBox as={RouterLink} to={to} whileHover="hover" {...props}>
        <MotionBox
            variants={{
                initial: { x: 0 },
                hover: { x: "-.3em"},
            }}
            transition={spring}
            display="inline"
            as={IconArrowLeft}
            h="1.2em"
            position="relative"
            bottom="-.2em"
            left="-.4em"
        />
        {children}
	</MotionBox>
}
