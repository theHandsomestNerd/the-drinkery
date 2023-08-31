import React, {FunctionComponent, useContext} from 'react'
import {Divider, Grid, Typography, useTheme} from '@material-ui/core'
import FooterMenuGroup from './FooterMenuGroup'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {SanityMenuContainer, SanityTransformHwHomePage} from "../../../common/sanityIo/Types";
import DigitalResumeTheme, {COLORS, rainbow} from "../../../theme/DigitalResumeTheme";
import PageContext from "../../page-context/PageContext";
import MediaQueriesContext from "../../media-queries-context/MediaQueriesContext";
import MailTo from "../../mail-to/MailTo";
import Logo from "../../transform-hw/logo/Logo";
import ResumeSocialMedia from "../../my-digital-resume/ResumeSocialMedia";


export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        color: theme.palette.text.primary,
    }
}))


interface IProps {
    pageFooterMenu?: SanityMenuContainer
    homePage?:SanityTransformHwHomePage

    updateIsLoading?: (value: boolean) => void
}

const FooterMenuContainer: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useStyles(DigitalResumeTheme)

    const mediaQueriesContext = useContext(MediaQueriesContext)
    const theme = useTheme()
    const pageContext = useContext(PageContext)

    return (
        <Grid container item className={classes.root} spacing={5}>
            <Grid container item xs={12} md={4} style={mediaQueriesContext.smDown ? {
                borderLeft: `4px solid ${theme.palette.primary.main}`,
                backgroundColor: "rgba(117,117,117,.5)",
                borderRight: `4px solid ${theme.palette.primary.main}`,
            } : {}}>
                {
                    props.pageFooterMenu?.subMenus?.map((menuGroup: any, index: number) => {
                        return (
                            <Grid key={index} item xs={12}>
                                <FooterMenuGroup menuGroup={menuGroup}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Grid item container xs={12} md={4} justifyContent='center'>
                {props.pageFooterMenu?.logoImageSrc ?
                    <Logo isCenter logoImageSrc={props.pageFooterMenu.logoImageSrc} height={108}/> :
                    <Grid container item justifyContent='center'>
                        <Logo logoImageSrc={props.pageFooterMenu?.logoImageSrc} height={100}/>
                    </Grid>}
                <Grid container item>
                    <ResumeSocialMedia homePage={props.homePage} />
                </Grid>
                <Grid item container justifyContent='center' style={{
                    paddingBottom: "16px",
                    marginTop: "12px",
                }}>

                    <Grid item>
                        <Divider style={{
                            width: "70px",
                            backgroundColor: "black"
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
                                        variant='body1'>{pageContext.page?.businessContact?.phone}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item spacing={1} justifyContent='center'>
                        {<Grid item>
                            <MailTo color={theme.palette.text.primary} email={pageContext.page?.businessContact?.email ?? ""} subject={"Information Request"}
                                    body={""}><Typography color='inherit'>{pageContext.page?.businessContact?.email}</Typography></MailTo>
                        </Grid>}
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container xs={12} md={4} alignContent='flex-start' spacing={2}>
                <Grid container item>
                <Grid item><Typography variant='h6'>Hours</Typography></Grid>
                </Grid>
                <Grid container item>
                    <Grid item container><Typography color='primary'><b>Front</b></Typography></Grid>
                    <Grid item container><Typography><b>Monday:</b> closed</Typography></Grid>
                    <Grid item container><Typography><b>Tuesday & Wednesday:</b> 4pm-12am</Typography></Grid>
                    <Grid item container><Typography><b>Thursday-Sunday:</b> 2pm-1am</Typography></Grid>
                </Grid>
                <Grid container item>
                    <Grid item container><Typography  color='primary'><b>The Other Side</b></Typography></Grid>
                    <Grid item container><Typography><b>Monday & Tuesday:</b> closed</Typography></Grid>
                    <Grid item container><Typography><b>Wednesday:</b> 7pm-12am</Typography></Grid>
                    <Grid item container><Typography><b>Thursday-Sunday:</b> 7pm-1230am</Typography></Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default FooterMenuContainer