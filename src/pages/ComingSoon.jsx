import {Flex, FormControl, FormLabel, Heading, Text, useToast} from "@chakra-ui/react";
import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router";
import {TextInputButtonRight} from "../components/ui/Inputs";
import Main from "../components/ui/Main";

const ComingSoon = () => {
    const nav = useNavigate();
    const toast = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false);

    const subscribe = (ev) => {
        ev.preventDefault();

        const data = new FormData(ev.target);
        setIsSubmitting(true);

        axios.post(
            import.meta.env.VITE_CODA_TABLE,
            {
                "rows": [{
                    "cells": [
                        {"column": "Email", "value": data.get("email")},
                        {"column": "Interaction", "value": "Waitlist"}
                    ]
                }]
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${import.meta.env.VITE_CODA_API_KEY}`
                }
            }
        ).then(res => {
            if (res.status === 202) {
                ev.target.reset();
                // todo create standardized toast across site, undere /theming
                toast({
                    title: "You've joined our waitlist!",
                    description: "We'll be in contact soon.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
            } else {
                console.log(res);
                toast({
                    title: "Error Joining Waitlist",
                    description: "Please try again later.",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                });
            }
        }).catch(err => {
            console.log(err);
            toast({
                title: "Error Joining Waitlist",
                description: "Please try again later.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }).finally(() => setIsSubmitting(false));
    }

    // todo ask Emily for bg_wide original (currently pulled from wix)
    return <Main justifyContent="center" backgroundImage="url('assets/cover-wide-hailey.png')" backgroundSize="cover"
                 backgroundRepeat="no-repeat">
        <Flex as="form" direction="column" gap="1" onSubmit={subscribe}>
            <Heading size="3xl" mb="4" color="black">Coming Soon</Heading>

            <Text fontWeight="bold">Join our waitlist!</Text>
            <FormControl id="email" isRequired>
                <TextInputButtonRight
                    type="email" name="email" fontSize="sm" disabled={isSubmitting}
                    buttonText="Subscribe" placeholder="Enter your Email"
                />
            </FormControl>
        </Flex>
    </Main>;
};

export default <ComingSoon />;
