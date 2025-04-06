import {Button, Flex, FormControl, FormLabel, Heading, useToast} from "@chakra-ui/react";
import axios from "axios";
import {useState} from "react";
import {TextArea, TextInput} from "./ui/Inputs";

const ContactForm = (props) => {
    const toast = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendMessage = (ev) => {
        ev.preventDefault();

        if (isSubmitting) {
            return;
        }

        const data = new FormData(ev.target);
        setIsSubmitting(true);

        axios.post(
            import.meta.env.VITE_CODA_TABLE,
            {
                "rows": [{
                    "cells": [
                        {"column": "First Name", "value": data.get("first-name")},
                        {"column": "Last Name", "value": data.get("last-name")},
                        {"column": "Email", "value": data.get("email")},
                        {"column": "Message", "value": data.get("message")},
                        {"column": "Interaction", "value": "Message"}
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
                toast({
                    title: "Message sent!",
                    // description: "We've created your account for you.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
            } else {
                console.log(res);
                toast({
                    title: "Error Sending Message",
                    description: "Please try again later.",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                });
            }
        }).catch(err => {
            console.log(err);
            toast({
                title: "Error Sending Message",
                description: "Please try again later.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }).finally(() => setIsSubmitting(false));
    }

    return <Flex as="form" onSubmit={sendMessage} direction="column" {...props}>
        <Heading as="h2" size="xl" mb="4">Contact Us</Heading>
        <Flex direction={["column", "row"]} gap="4">
            <FormControl id="first-name">
                <FormLabel>First Name</FormLabel>
                <TextInput size="sm" name="first-name" disabled={isSubmitting} />
            </FormControl>
            <FormControl id="last-name">
                <FormLabel>Last Name</FormLabel>
                <TextInput size="sm" name="last-name" disabled={isSubmitting} />
            </FormControl>
        </Flex>
        <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <TextInput type="email" size="sm" name="email" disabled={isSubmitting} />
        </FormControl>
        <FormControl id="message" isRequired>
            <FormLabel>Message</FormLabel>
            <TextArea name="message" size="sm" disabled={isSubmitting} />
        </FormControl>
        <Button type="submit" mt="2" disabled={isSubmitting}>Submit</Button>
    </Flex>;
};

export default ContactForm;
