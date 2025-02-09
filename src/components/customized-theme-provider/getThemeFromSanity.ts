import {SanityMuiFontFace, SanityMuiTheme} from "../../common/sanityIo/Types";
import {createTheme} from "@mui/material/styles";
import {COLORS, convertToHexCode} from "../../theme/common/ColorPalette";
import {grey} from "@mui/material/colors";
import capitalizeArray from "../../utils/textProcessingUtils";
const fonts = `"Raleway", "Oswald"`

const getThemeFromSanity = (theme: SanityMuiTheme) => {
    const createMuiFontFace = (sanityFontFace: SanityMuiFontFace) => {
        let processedMediaQuery:any[] | undefined = [];
        if((sanityFontFace.mediaQueries?.length?? 0) > 0){
            processedMediaQuery = sanityFontFace.mediaQueries?.map((mediaQuery)=>{

                const query:any = {}
                // @ts-ignore
                query[`@media (max-width:${theme.breakpoints[mediaQuery.breakpoint[0]]}px)`] = mediaQuery.typography;
                return query
            })
        }

        return {
            fontSize: sanityFontFace.fontSize,
            ...(processedMediaQuery?processedMediaQuery[0]:[]),
            fontStyle: sanityFontFace.fontStyle,
            fontWeight: sanityFontFace.fontWeight,
            lineHeight: sanityFontFace.lineHeight,
            letterSpacing: sanityFontFace.letterSpacing,
            textTransform: sanityFontFace.textTransform
        }
    }
    const extractSanityFontFace = (fontFaceName: string) => {
        const fontFaceFromSanity = theme.typography?.fontFaces?.find((fontFace: SanityMuiFontFace) => {
            if (fontFace.name === fontFaceName) {
                return fontFace
            }
            return undefined
        })
        return fontFaceFromSanity ? createMuiFontFace(fontFaceFromSanity) : undefined
    }

    return createTheme({
        breakpoints: {
            values: {
                xs: parseInt(String(theme.breakpoints?.xs ?? 0)),
                sm: parseInt(String(theme.breakpoints?.sm ?? 640)),
                md: parseInt(String(theme.breakpoints?.md ?? 980)),
                lg: parseInt(String(theme.breakpoints?.lg ?? 1160)),
                xl: parseInt(String(theme.breakpoints?.xl ?? 1320)),
            }
        },
        shape:{
          borderRadius: parseInt(String(theme.borderRadius ?? "4"))
        },
        palette: {
            background: {
                default: theme.colorPalette?.defaultBackground ? convertToHexCode(theme.colorPalette?.defaultBackground) : COLORS.WHITESMOKE,
                paper: theme.colorPalette?.defaultPaperBackgroundColor ? convertToHexCode(theme.colorPalette?.defaultPaperBackgroundColor) : COLORS.DARKGRAY
            },
            primary: {
                main: theme.colorPalette?.primaryColor ? convertToHexCode(theme.colorPalette?.primaryColor) : COLORS.RED,
            },
            secondary: {
                main: theme.colorPalette?.secondaryColor ? convertToHexCode(theme.colorPalette?.secondaryColor) : COLORS.ALMOSTWHITE,
            },
            error: {
                main: '#840E0E',
                light: '#D79393',
                dark: '#640E0E'
            },
            success: {
                main: '#27AE60',
                light: '#93D7B0',
                dark: '#0E8433'
            },
            warning: {
                main: '#E2AB1F',
                light: '#F1D58F',
                dark: '#CF800A'
            },
            text: {
                primary: theme.colorPalette?.primaryTextColor ? convertToHexCode(theme.colorPalette?.primaryTextColor) : COLORS.DARKGRAY,
                secondary: theme.colorPalette?.secondaryTextColor ? convertToHexCode(theme.colorPalette?.secondaryTextColor) : grey[100],
                disabled: theme.colorPalette?.disabledTextColor ? convertToHexCode(theme.colorPalette?.disabledTextColor) : COLORS.LIGHT_GRAY
            }
        },
        mixins: {
            toolbar: {
                height: (theme.appBarHeight ?? 55) + "px"
            }
        },
        typography: {
            fontFamily: theme.typography?.fontFamily ? capitalizeArray(theme.typography.fontFamily).join(',') : fonts,
            h1: extractSanityFontFace('h1'),
            h2: extractSanityFontFace('h2'),
            h3: extractSanityFontFace('h3'),
            h4: extractSanityFontFace('h4'),
            h5: extractSanityFontFace('h5'),
            h6: extractSanityFontFace('h6'),
            body1: extractSanityFontFace('body1'),
            body2: extractSanityFontFace('body2'),
            button: extractSanityFontFace('button'),
            subtitle1: extractSanityFontFace('subtitle1'),
            subtitle2: extractSanityFontFace('subtitle2')
        },
        components: {
            MuiInputBase: {
                styleOverrides: {
                    root: {
                        borderRadius: 0,
                        "& .Mui-focus": {
                            borderBottom: 0
                        }
                    },
                }
            },
            MuiSnackbarContent: {
                styleOverrides: {
                    root: {
                        marginTop: "100px",
                        border: "3px solid white",
                        backgroundColor: 'rgba(210,0,39,0.9) !important'
                    }
                }
            },
            MuiFormLabel: {
                styleOverrides: {
                    root: {
                        color: "#383838 !important",
                        paddingTop: "4px !important",
                    }
                }
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: '-64px',
                        paddingTop: "16px",
                        paddingBottom: "16px",
                    },
                    contained: {
                        boxShadow: "none",
                    },
                    containedPrimary: {
                        border: `1px solid ${theme.colorPalette?.buttonOutlineColor ? convertToHexCode(theme.colorPalette.buttonOutlineColor):"transparent"}`,
                        '&.Mui-disabled': {
                            color: '#969284'
                        },
                    },
                    containedSecondary: {
                        border: '1px solid transparent',
                        '&.Mui-disabled': {
                            color: 'rgba(207, 207, 207, .5)',
                        },
                    },
                    outlinedPrimary: {
                        borderWidth: '3px',
                        paddingTop: "16px",
                        paddingBottom: "16px",
                        paddingLeft: "64px",
                        paddingRight: "64px"
                    },
                    outlinedSecondary: {
                        borderWidth: '3px',
                        paddingTop: "16px",
                        paddingBottom: "16px",
                        paddingLeft: "64px",
                        paddingRight: "64px",
                    }
                }
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        paddingRight: "16px",
                        borderColor: 'black',
                        // border: "1px solid transparent"
                    }
                }
            }
        }
    });
}

export default getThemeFromSanity