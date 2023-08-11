import React, {FunctionComponent} from 'react'
import {Avatar, Grid, Link, makeStyles, Typography, useMediaQuery, useTheme} from '@material-ui/core'
import clsx from "clsx";
import {COLORS} from "../../theme/DigitalResumeTheme";
import CssFadeToColor from "../css-fade-to-color/CssFadeToColor";
import useCustomStyles from "../mackenzies-mind/pages/Styles";
import bgImage from "./drinkery-background.jpg"
import TheOtherSideLogo from "./TheOtherSideLogo";
import openDoorSign from './Shutterstock_1025370412.png'
import ashboy from "./ashboy-drinkery.jpg";
import jt from "./jt-drinkery.jpg";
import {DrinkerySpecialsSectionType, HowItWorksSectionType, TeamSectionType} from "../BlockContentTypes";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";
import {Theme} from "@material-ui/core/styles";

interface IProps {
    email?: string
    sectionData: TeamSectionType
}

export const useStyles = makeStyles((theme: Theme) => ({
    preroot: {
        minHeight: '321px',
        // backgroundColor: "black",
        color:"white"
        // paddingLeft: -theme.spacing(-5),
    },
}))


const TheDrinkeryStaff: FunctionComponent<IProps> = (props) => {
    const classes = useCustomStyles({bgImage: bgImage})
    const theClasses = useStyles()
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const xsDown = useMediaQuery(theme.breakpoints.down('xs'))

    return (
        <Grid container className={theClasses.preroot}
              style={{position: "relative", color: "white"}}>
            {/*<CssFadeToColor*/}
            {/*    toColor={COLORS.LIGHTGRAY}*/}
            {/*    isResponsive/>*/}
            {/*<Grid container item*/}
            {/*      className={clsx(xsDown ? classes.fullSection : classes.fullSection, classes.fullSectionOverlay)}>*/}
            {/*</Grid>*/}
            <Grid item container className={clsx(classes.fullSection)}
                  style={{
                      // position: 'absolute',
                      // paddingBottom: smDown ? 0 : theme.spacing(10)
                  }}
                  justifyContent='center' alignItems='center'>
                <Grid container item justifyContent='center' style={{paddingTop: theme.spacing(2)}}>
                    <Grid container item justifyContent='center'>
                        <Typography variant='body2' align='center' gutterBottom>{props.sectionData.contentTitle}</Typography>
                    </Grid>
                    <Grid container item justifyContent='center' xs={12} sm={9} md={7} lg={5} xl={5}>
                        {props.sectionData.teamList.map((teamMember, index)=><Grid key={index} item justifyContent='center' xs={6} sm={4} alignItems={'center'}
                               alignContent='center'>
                            <Grid container item justifyContent='center'>
                                <Avatar src={urlFor(teamMember.image).url() || ""} variant='rounded' style={{
                                    width: theme.spacing(18),
                                    height: theme.spacing(18),
                                }}/>
                            </Grid>
                            <Grid container item justifyContent='center'>
                                <Typography variant='body1'>{teamMember.title}</Typography>
                            </Grid>
                        </Grid>)}
                    </Grid>
                </Grid>
                {/*<Grid item container>*/}
                {/*    <Grid container item style={{*/}
                {/*        paddingBottom: theme.spacing(5)*/}
                {/*    }}>*/}
                {/*        <Grid container item spacing={2}>*/}
                {/*            <Grid item container>*/}
                {/*                <Grid container item justifyContent='center'>*/}
                {/*                    <Typography variant='h5'>Checkout the Other Side!</Typography>*/}
                {/*                </Grid>*/}
                {/*                <Grid container item justifyContent='center' style={{*/}
                {/*                    // width: "200px",*/}
                {/*                    // height: "200px",*/}
                {/*                    // backgroundImage: `url(${openDoor})`,*/}
                {/*                    // backgroundSize: "contain",*/}
                {/*                    // backgroundPosition:"center",*/}
                {/*                    // backgroundRepeat: "no-repeat"*/}
                {/*                }}>*/}

                {/*                    <Link href={'/theOtherSide'}><Grid item style={{*/}
                {/*                        marginTop: theme.spacing(2),*/}
                {/*                        width: "200px",*/}
                {/*                        height: "200px",*/}
                {/*                        backgroundImage: `url(${openDoorSign})`,*/}
                {/*                        backgroundSize: "contain",*/}
                {/*                        backgroundPosition: "center",*/}
                {/*                        backgroundRepeat: "no-repeat"*/}
                {/*                    }}>*/}

                {/*                    </Grid>*/}
                {/*                        <Grid item container justifyContent='center'><Typography variant='body1'*/}
                {/*                                                                                 style={{color: "white"}}>(click*/}
                {/*                            to enter)</Typography></Grid>*/}
                {/*                    </Link>*/}
                {/*                </Grid>*/}
                {/*            </Grid>*/}
                {/*        </Grid>*/}
                {/*    </Grid>*/}
                {/*</Grid>*/}
            </Grid>
        </Grid>
    )
}

export default TheDrinkeryStaff