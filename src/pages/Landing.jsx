import {
    Box,
    Button,
    Flex,
    Heading,
    LightMode,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    useBreakpointValue
} from "@chakra-ui/react";
import {IconBrandGoogle, IconBrandMeta, IconBrandOpenai} from "@tabler/icons-react";
import {useEffect, useState} from "react";
import {useLocation} from "react-router";
import ContactForm from "../components/ContactForm";
import FlexContainer from "../components/ui/FlexContainer";
import Link, {ButtonLink, LinkArrowRight} from "../components/ui/Links"
import ProductCard from "../components/ProductCard";

import {Link as RouterLink} from "react-router";

const Landing = () => {
    const [showModal, setShowModal] = useState(false);
    const loc = useLocation();

    useEffect(() => {
        if (loc?.hash) {
            document.querySelector(loc.hash).scrollIntoView({behavior: "smooth"});
        }
    }, [loc]);

    return (
        <Box maxW="100vw" m="0" p="0">
            <Flex bgImg="url('assets/bg-texture.png')" w="full">
                <LightMode>
                    <FlexContainer direction="column" h="main" align="center" justify="center">
                        <Heading as="h1" size="2xl" textAlign="center" color="black">
                            <Text as="span" color="white">AI-driven Innovation</Text> for molecular discovery
                        </Heading>
                        <Text align="center" mt="4" color="gray.100">
                            Providing curated data for drug discovery and education.
                        </Text>
                        <Flex direction={["column", "row"]} gap="2" w={["full", "80%"]} mt="6">
                            <ButtonLink to="demo" flex="1" p="2">
                                Use our Demo
                            </ButtonLink>
                            <ButtonLink to="/#contact-us" flex="1" p="2" colorScheme="white">
                                Join Us
                            </ButtonLink>
                        </Flex>
                    </FlexContainer>
                </LightMode>
            </Flex>

            <FlexContainer as="section" id="product" direction="column" justify="center" gap="4" minH="main" py="16">
                <Heading as="h2" fontSize="3xl" textAlign="center" pb="2" borderBottom="1px" borderColor="gray.500">
                    What is the Sound of Molecules?
                </Heading>
                <Text>
                    <Text as="span" color="primary.500">The Sound of Molecules </Text>
                    is an innovative molecular information encoding technique that maps musical notes to elements in the
                    periodic table, harnessing AI to create a molecular map.
                </Text>
                <Tabs mt="4" orientation={useBreakpointValue({base: "horizontal", md: "vertical"})}>
                    <TabList>
                        <Tab bg="transparent">Healthcare</Tab>
                        <Tab bg="transparent">Education</Tab>
                    </TabList>
                    <TabPanels
                        m={useBreakpointValue({base: ".8em 0 0 0", md: "0 0 0 .8em"})}
                        rounded="8" borderWidth="1px" shadow="lg" py="2"
                    >
                        <TabPanel>
                            <Heading as="h3" fontSize="xl" mb="2">Healthcare Product</Heading>
                            <Text mb="4">
                                We provide a curated, sonified molecular database and specialized AI tools as a
                                service to major pharmaceutical companies.
                            </Text>
                            <LinkArrowRight to="healthcare">Learn more</LinkArrowRight>
                        </TabPanel>
                        <TabPanel>
                            <Heading as="h3" fontSize="xl" mb="2">Education Product</Heading>
                            <Text mb="4">
                                We develop educational products, including books, games, and multimedia
                                resources, tailored for educators and students.
                            </Text>
                            <LinkArrowRight to="#education">Learn more</LinkArrowRight>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </FlexContainer>

            <Flex
                as="section" direction="column" w="full" mt="24" py="16"
                bgImg="url('assets/bg-music.jpg')" align="center" gap="6" textAlign="left" color="black"
            >
                    <Heading as="h2" size="xl" maxW="80%">Why does Sound of Molecules exist?</Heading>
                    <FlexContainer>
                        Much like how the addition of sound revolutionized early cinema, we addresses a gap in the current
                        ways we perceive and understand molecules and the lack of advanced AI tools in this field.
                    </FlexContainer>

                    <FlexContainer>
                        Traditional molecular representations include text and visuals such as structural formulas and 3D
                        models, which have limitations for the new AI world.
                    </FlexContainer>
            </Flex>

            <FlexContainer as="section" id="education" direction="column" gap="8" w="container.lg" mt="40">
                <Heading as="h2" fontSize="3xl" textAlign="center">Educational Products</Heading>
                <Flex direction="row" wrap="wrap" gap="8" justify="center">
                    <ProductCard
                        imgSrc="assets/cover-somol.png"
                        imgAlt="Technical Book"
                        title="Technical Book"
                        desc="All the nity-grity details on how to map molecules and detailed examples."
                        as={RouterLink}
                        to="https://a.co/d/2fI9VGg"
                    />
                    <ProductCard
                        imgSrc="assets/cover-hailey.png"
                        imgAlt="Children's Book"
                        title="Children's Book"
                        desc="Introducing elements from the Periodic Table to children using musical fun."
                        as={RouterLink}
                        to="https://a.co/d/2YcetBY"
                    />
                </Flex>
            </FlexContainer>

            <Box as="section" w="full" bgGradient="linear(to-r, transparent, primary.400)" my="28" py="6">
                <FlexContainer direction="row" justify="space-between" align="center" w="lg">
                    <IconBrandOpenai size="1.5em" />
                    <IconBrandGoogle size="1.5em" />
                    <IconBrandMeta size="1.5em" />
                </FlexContainer>
            </Box>

            <FlexContainer as={ContactForm} id="contact-us" scrollMarginTop="32" mt="28" mb="32" />

            {/*<Modal isOpen={showModal} onClose={() => setShowModal(false)} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader pb="0" fontStyle="italic">Join our Waitlist!</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Interested to learn more? Get the latest updates, promotions and partnerships from Sound of
                        Molecules.
                        <FormControl id="email" isRequired my="1em">
                            <FormLabel>Enter your email</FormLabel>
                            <TextInputButtonRight type="email" name="email" buttonText="Subscribe" />
                        </FormControl>
                    </ModalBody>
                </ModalContent>
            </Modal>*/}
        </Box>
    );
};

export default <Landing />;
