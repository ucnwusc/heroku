import {Flex, Spacer, Button} from "@chakra-ui/react";
import {IconBrandInstagram, IconBrandLinkedin, IconBrandX} from "@tabler/icons-react";
import {Link} from "react-router";
import {ButtonLink} from "./ui/Links";

const Footer = () => {
	return <Flex maxW="full" w="container.lg" m="auto" px="8" py="4" direction="row" align="center">
        <Flex>© 2025 by Emily Zhou</Flex>
        <Spacer />
        <ButtonLink to="https://www.instagram.com/soundofmolecules" variant="ghost" p="0" aspectRatio="1" rounded="full">
            <IconBrandInstagram />
        </ButtonLink>
        <Button to="https://www.linkedin.com/company/soundofmolecules/about/" variant="ghost" p="0" aspectRatio="1" rounded="full">
            <IconBrandLinkedin />
        </Button>
    </Flex>;
};

export default Footer;
