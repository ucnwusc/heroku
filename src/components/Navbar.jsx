import {Flex, SlideFade, useBreakpointValue, Button, Slide} from "@chakra-ui/react";
import {IconMenu2, IconX} from "@tabler/icons-react";
import {useState} from "react";
import {ColorModeSwitcher} from "./ColorModeSwitcher";
import Logo from "./Logo";
import Link from "./ui/Links";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return <Flex justify="center" w="full" position="fixed" top="0" zIndex="10" bg="chakra-body-bg" h="nav">
        <Flex direction="row" m="4" maxW="container.lg" flex="1" align="start" justify="space-between" position="relative">
            <Logo as={Link} to="/" rounded="none" _hover={{textDecoration: "none"}} zIndex={isOpen ? "0" : "20"} />
            <Slide
                in={useBreakpointValue({base: isOpen, sm: true})}
                direction="top"
                left="20"
            >
                <Flex
                    direction={["column", "row"]}
                    bg={["chakra-body-bg", "initial"]}
                    position="relative" right={["0", "calc((100vw - var(--chakra-sizes-container-lg)) / 2)"]}
                    display="flex" gap="4" justify="end" align="center" h={["full", "20"]} mx="0" py="4"
                >
                    <Link to="/demo" p="1" variant="ghost">demo</Link>
                    <Link to="/healthcare" p="1" variant="ghost">healthcare</Link>
                    <Link to="/#education" p="1" variant="ghost">education</Link>
                    <Link to="/contact-us" p="1" variant="ghost">contact us</Link>
                    <ColorModeSwitcher size="xs" fontSize="1em" />
                </Flex>
            </Slide>
            <Button onClick={() => setIsOpen(!isOpen)} display={["flex", "none"]}
                    variant="ghost">
                {isOpen ? <IconX /> : <IconMenu2 />}
            </Button>
        </Flex>
    </Flex>
};

export default Navbar;
