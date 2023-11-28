import React, {FunctionComponent, useContext} from 'react'
import {Divider, Grid, Typography, useMediaQuery, useTheme} from '@mui/material'
import FooterMenuGroup from './FooterMenuGroup'
import makeStyles from '@mui/styles/makeStyles';
import {SanityMenuContainer} from "../../../../common/sanityIo/Types";
import PageContext from "../../../page-context/PageContext";
import MailTo from "../../../mail-to/MailTo";
import Logo from "../../../logo/Logo";
import AlternatingText from "../../../logo/AlternatingText";

interface IProps {
    pageFooterMenu?: SanityMenuContainer
    updateIsLoading?: (value: boolean) => void
}

const FooterMenuContainer: FunctionComponent<IProps> = (props: IProps) => {


    const pageContext = useContext(PageContext)
    const customizedThemeContext = useTheme()
    const useStyles = makeStyles(({
        root: {
            color: customizedThemeContext.palette.text.secondary,
        }
    }))
    const classes = useStyles(customizedThemeContext)

    const smDown = useMediaQuery(customizedThemeContext.breakpoints.down('sm'))
    return (
        <Grid container item className={classes.root}>
            <Grid container item xs={12} md={4}
                  sx={smDown ? {
                      paddingLeft: "16px",
                      paddingTop: "16px",
                      paddingBottom: "16px",
                      borderLeft: `4px solid ${customizedThemeContext.palette.primary.main}`,
                      backgroundColor: "rgba(117,117,117,.5)",
                      borderRight: `4px solid ${customizedThemeContext.palette.primary.main}`,
                  } : {}}
            >
                {
                    props.pageFooterMenu?.subMenus?.map((menuGroup: any, index: number) => {
                        return (
                            <Grid key={index} item xs={6}>
                                <FooterMenuGroup menuGroup={menuGroup}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Grid item container xs={12} md={4} justifyContent='center'>
                {props.pageFooterMenu?.logoImageSrc ?
                    <Logo isCenter logoImageSrc={props.pageFooterMenu.logoImageSrc} height={108}/> :
                    <Grid container item justifyContent='center' alignContent='center'>
                        <AlternatingText isLarge={true} logoText={props.pageFooterMenu?.logoText}
                                         logoAccentText={props.pageFooterMenu?.logoAccentText}/>
                    </Grid>}
                <Grid item container justifyContent='center' style={{
                    paddingBottom: "16px",
                    marginTop: "12px",
                }}>

                    <Grid item>
                        <Divider style={{
                            width: "70px",
                            backgroundColor: "white"
                        }}/>
                    </Grid>

                </Grid>
                <Grid item container>
                    <Grid container item spacing={1} justifyContent='center'>
                        <Grid item>
                            <Typography color='inherit' style={{width: "180px"}} align='center' variant='subtitle1'
                                        gutterBottom>{pageContext.page?.businessContact?.address}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item spacing={1} justifyContent='center'>
                        <Grid item>
                            <Typography color='inherit' align='center'
                                        variant='subtitle1'>{pageContext.page?.businessContact?.phone}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item spacing={1} justifyContent='center'>
                        {<Grid item>
                            <MailTo color={"#383838"} email={pageContext.page?.businessContact?.email ?? ""}
                                    subject={"Information Request"}
                                    body={""}><Typography
                                color='inherit'>{pageContext.page?.businessContact?.email}</Typography></MailTo>
                        </Grid>}
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container xs={12} md={4} alignContent='flex-start' spacing={2}>

            </Grid>
        </Grid>
    )
}

export default FooterMenuContainer