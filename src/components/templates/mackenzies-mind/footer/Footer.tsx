import React, {FunctionComponent, useContext} from 'react'
import {Theme, ThemeProvider} from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import {Grid} from '@mui/material'
import FooterMenuContainer from './FooterMenuContainer'
import {SanityMenuContainer} from "../../../../common/sanityIo/Types";
import {COLORS} from "../../../../theme/common/ColorPalette";
import CustomizedThemeContext from "../../../customized-theme-provider/CustomizedThemeContext";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: COLORS.DARK_GRAY,
        // color: '#FDF3EB',
        // marginLeft: -1 * theme.spacing(1),
        // zIndex: 1000,
        padding: theme.spacing(4),
        '& .MuiFormLabel-root': {
            color: 'white',
        },
    },
    emailContainer: {
        height: '72px',
    },
    columnHeader: {
        fontWeight: 500,
        color: '#FDF3EB',
        marginBottom: '16px',
    },
    footerLink: {
        marginBottom: '8px',
    },
    newsletterForm: {
        maxWidth: '370px',
    },
    emailInputProps: {
        borderColor: '#FDF3EB',
        color: '#FDF3EB !important',
    },
}))

interface IProps {
    pageFooter?: SanityMenuContainer
    footerMenuSlug?: string
    updateIsLoading?: (value: boolean) => void
}

const Footer: FunctionComponent<IProps> = (props: IProps) => {
    const customizedTheme = useContext(CustomizedThemeContext)
    const classes = useStyles(customizedTheme)

    return (
        <ThemeProvider theme={customizedTheme.customizedTheme}>
            <Grid container className={classes.root}>
                <Grid container justifyContent="flex-start">
                    <Grid item xs={12}>
                        {props.pageFooter && <FooterMenuContainer pageFooterMenu={props.pageFooter}
                                                                  updateIsLoading={props.updateIsLoading}
                        />}
                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default Footer