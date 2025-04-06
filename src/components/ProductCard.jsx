import {Flex, Heading, Image, Text, useColorModeValue} from "@chakra-ui/react";
import {IconArrowRight} from "@tabler/icons-react";
import {motion} from "framer-motion";
import {useState} from "react";
import {spring} from "../theming/transitions";

const MotionFlex = motion(Flex);

const ProductCard = ({imgSrc, imgAlt, title, desc, link, ...props}) => {
    return <MotionFlex
        whileHover="hover"
        initial="rest"
        transition={spring}
        variants={{
            rest: {y: 0},
            hover: {y: "-1.5em"}
        }}
        direction="column"
        textAlign="center"
        gap="2"
        w="56"
        {...props}
    >
        <Image h="14em" rounded="8" my="2" src={imgSrc} alt={imgAlt} objectFit="contain"/>
        <Heading as="h3" fontSize="md">{title}</Heading>
        <Text>{desc}</Text>
        <MotionFlex
            variants={{
                rest: {opacity: 0},
                hover: {opacity: 1}
            }}
            color={useColorModeValue("primary.500", "primary.300")}
            direction="row" justifyContent="center" alignItems="center" gap="2" h="1.5em" fontSize="sm"
        >
            Purchase
            <IconArrowRight as="span" />
        </MotionFlex>
    </MotionFlex>
};

export default ProductCard;
