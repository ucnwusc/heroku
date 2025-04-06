import {extendTheme} from "@chakra-ui/react";
import {theme as defaultTheme} from "@chakra-ui/theme";
import {getColor, mode, transparentize} from "@chakra-ui/theme-tools";
import "@fontsource/poppins";
import "@fontsource-variable/playfair-display";

// colors
export const colors = extendTheme({
    colors: {
        primary: {...defaultTheme.colors.blue},
        secondary: {...defaultTheme.colors.green},
    },
});
export const colorRaw = (color) => getColor(colors, color, color);
export const colorAlpha = (color, alpha = 0.6) => transparentize(color, alpha)(colors);

// sizes
export const sizes = {
    sizes: {
        nav: defaultTheme.sizes["20"],
        main: "calc(100vh - var(--chakra-sizes-20))"
    }
};

// https://github.com/chakra-ui/chakra-ui/tree/v2/packages/theme/src/components
const theme = extendTheme(colors, sizes, {
    components: {
        Button: {
            defaultProps: {
                colorScheme: "primary",
            },
            variants: {
                outline: {
                    borderWidth: "2px"
                },
                solid: props => {
                    const { colorScheme: c } = props;
                    let base = defaultTheme.components.Button.variants.solid(props);
                    base._focus = {borderColor: `${c}.500`};
                    base._hover = {textDecoration: "none !important"}

                    if (c === "gray") {
                        // increase saturation
                        base = {
                            ...base,
                            bg: mode(`gray.300`, `gray.500`)(props),
                            _hover: {
                                ...base._hover,
                                bg: mode(`gray.400`, `gray.600`)(props),
                                _disabled: {
                                    bg: mode(`gray.100`, `whiteAlpha.200`)(props)
                                },
                            },
                            _focusVisible: {
                                boxShadow: `0 0 0 4px ${colorAlpha(mode("gray.300", "gray.500")(props), 0.6)}`,
                            }
                        }
                    } else if (c === "white") {
                        // for use on dark/colored bgs
                        base = {
                            ...base,
                            color: "blackAlpha.800",
                            bg: "whiteAlpha.700",
                            _hover: {
                                ...base._hover,
                                bg: "whiteAlpha.900",
                                _disabled: {
                                    bg: mode(`gray.100`, `whiteAlpha.200`)(props)
                                },
                            },
                            _focusVisible: {
                                boxShadow: `0 0 0 4px ${colorAlpha(mode("gray.300", "gray.500")(props), 0.6)}`,
                            }
                        }
                    }
                    return base;
                },
            },
        },
        FormLabel: {
            baseStyle: {
                mb: "1",
                mt: "2",
                fontSize: "sm",
            }
        },
        Link: {
            variants: {
                ghost: {
                    opacity: 0.7,
                    _hover: {
                        opacity: 1,
                        textDecoration: "none",
                    },
                }
            }
        },
        Tabs: {
            defaultProps: {
                colorScheme: "primary",
            },
            baseStyle: {
                tabpanel: {
                    py: "2"
                }
            },
            variants: {
                "outline-rounded": props => {
                    const { colorScheme: c } = props;
                    let base = defaultTheme.components.Tabs.variants["solid-rounded"](props).tab;

                    return {
                        tab: {
                            ...base,
                            color: mode(`${c}.700`, `${c}.300`)(props),
                            borderWidth: "2px",
                            borderColor: mode(`${c}.300`, `${c}.700`)(props),
                            mr: "2",
                            py: "1",
                            _selected: {
                                bg: mode(`${c}.500`, `${c}.600`)(props),
                                borderColor: mode(`${c}.500`, `${c}.600`)(props),
                                color: "white"
                            }
                        },
                    }
                },
                "solid-rounded": {
                    tab: {
                        py: "1",
                    }
                },
                "soft-rounded": {
                    tab: {
                        py: "1",
                    }
                },
            }
        },
    },
    shadows: {
        outline: `0 0 0 4px ${colorAlpha("primary.300", 0.6)}`,
    },
    fonts: {
        heading: `"Playfair Display Variable", serif`,
        body: `Poppins, sans-serif`,
    },
})

export default theme;
