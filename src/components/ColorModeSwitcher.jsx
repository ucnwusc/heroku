import { useColorMode, useColorModeValue, Button } from '@chakra-ui/react';
import {IconMoonFilled, IconSunFilled} from "@tabler/icons-react";

export const ColorModeSwitcher = props => {
    const { toggleColorMode } = useColorMode();
    const text = useColorModeValue('dark', 'light');
    const SwitchIcon = useColorModeValue(IconMoonFilled, IconSunFilled);

    return (
        <Button
            size="md"
            fontSize="lg"
            aria-label={`Switch to ${text} mode`}
            variant="ghost"
            colorScheme="gray"
            onClick={toggleColorMode}
            p="0"
            aspectRatio="1"
            {...props}
        >
            <SwitchIcon size="1em"/>
        </Button>
    );
};
