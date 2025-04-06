import {Flex, Heading, Text} from "@chakra-ui/react";
import Link from "../components/ui/Links";
import Main from "../components/ui/Main";
import ContactForm from "../components/ContactForm";

const ContactUs = () => {
	return <Main direction={["column", "row"]} maxW={["80%", "container.lg"]} justify="space-between" p={["1", "8"]} gap="8">
        <ContactForm w="lg" maxW="full"/>
        <Flex w="30ch" maxW="full" gap="4" direction="column">
            <Text align="left">
                If you are interested in a tailored demo or have any questions or feedback, please reach out to us.
            </Text>
            <Link to="mailto:soundofmolecules@gmail.com" color="primary.text">
                soundofmolecules@gmail.com
            </Link>
        </Flex>
    </Main>;
};

export default <ContactUs />;
