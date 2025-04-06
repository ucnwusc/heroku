import {Button, Input, InputGroup, InputRightElement, Textarea} from "@chakra-ui/react";

export const TextArea = (props) => {
    return (
        <Textarea {...inputStyles} {...props} />
    );
};

export const TextInput = (props) => {
    return (
        <Input {...inputStyles} {...props} />
    );
};

export const TextInputButtonRight = ({buttonText, onClick, disabled, ...props}) => {
    return (
        <InputGroup>
            <TextInput w="initial" flex="1" borderRightRadius="0" focusBorderColor="gray.400" disabled={disabled} {...props} />
            <InputRightElement
                as={Button} {...(onClick ? { onClick } : { type: "submit" })}
                position="static" w="initial" borderLeftRadius="0" fontSize="sm" colorScheme="gray" disabled={disabled}
            >
                {buttonText}
            </InputRightElement>
        </InputGroup>
    )
}


const inputStyles = {
    px: "2",
    borderRadius: "8",
    borderWidth: "2px",
    // borderColor: "gray.300",
    focusBorderColor: "primary.400",
    bg: "chakra-body-bg",
    color: "black"
}
