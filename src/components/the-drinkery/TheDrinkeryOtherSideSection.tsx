import React, {FunctionComponent} from 'react'
import {Avatar, Button, Grid, Link, makeStyles, Typography, useMediaQuery, useTheme} from '@material-ui/core'
import clsx from "clsx";
import {COLORS} from "../../theme/DigitalResumeTheme";
import CssFadeToColor from "../css-fade-to-color/CssFadeToColor";
import useCustomStyles from "../mackenzies-mind/pages/Styles";
import bgImage from "./drinkery-background.jpg"
import TheOtherSideLogo from "./TheOtherSideLogo";
import openDoorSign from './Shutterstock_1025370412.png'
import ashboy from "./ashboy-drinkery.jpg";
import jt from "./jt-drinkery.jpg";
import {
    DrinkeryOtherSideSectionType,
    DrinkerySpecialsSectionType,
    HowItWorksSectionType,
    TeamSectionType
} from "../BlockContentTypes";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";
import {Theme} from "@material-ui/core/styles";

interface IProps {
    email?: string
    sectionData: DrinkeryOtherSideSectionType
}

export const useStyles = makeStyles((theme: Theme) => ({
    preroot: {
        minHeight: '221px',
        // backgroundColor: "black",
        color: "white",
        paddingTop: theme.spacing(6),
    },
}))


const TheDrinkeryOtherSideSection: FunctionComponent<IProps> = (props) => {
    const classes = useCustomStyles({bgImage: bgImage})
    const theClasses = useStyles()
    const theme = useTheme()

    return (
        <Grid container className={theClasses.preroot}>
            <Grid item container className={clsx(classes.fullSection)}
                  justifyContent='center' alignItems='center'>
                <Grid item container>
                    <Grid container item>
                        <Grid container item spacing={2}>
                            <Grid item container>
                                {props.sectionData.isLogo && <Grid container item justifyContent='center'>
                                    <TheOtherSideLogo isCenter={true}></TheOtherSideLogo>
                                </Grid>}
                                <Grid container item justifyContent='center'>
                                    <Typography variant='h5'>{props.sectionData.contentTitle}</Typography>
                                </Grid>
                                <Grid container item justifyContent='center'>
                                    <Button variant={props.sectionData.isLink? "outlined":'text'} href={props.sectionData.isLink?'/the-drinkery/theOtherSide':undefined} style={{marginTop: 32, marginBottom:32}}>
                                        <Grid container item justifyContent='center'>
                                            <Grid item container style={{
                                                marginTop: theme.spacing(2),
                                                width: "200px",
                                                height: "200px",
                                                backgroundImage: `url(${openDoorSign})`,
                                                backgroundSize: "contain",
                                                backgroundPosition: "center",
                                                backgroundRepeat: "no-repeat"
                                            }}>

                                            </Grid>
                                            {
                                                props.sectionData.isLink &&
                                                <Grid item container justifyContent='center'>
                                                    <Typography variant='body1'
                                                                style={{color: "white"}}>
                                                        (click to enter)
                                                    </Typography>
                                                </Grid>
                                            }
                                        </Grid>
                                    </Button>
                                </Grid>
                                <Grid container item justifyContent='center'>
                                    <Typography variant='body2'
                                                gutterBottom
                                                style={{
                                                    color: "white",
                                                    minWidth: "340px",
                                                    maxWidth: "540px",
                                                    fontWeight: 400
                                                }}
                                                align='center'>{props.sectionData.description}</Typography>
                                </Grid>
                                <Grid container item justifyContent='center'>
                                    {props.sectionData.isShowMenu && <Grid container item justifyContent='center'>
                                        <Typography variant='h6' gutterBottom
                                                    style={{color: "white", width: "340px", paddingTop: 24}}
                                                    align='center'>
                                            Spirit Menu
                                        </Typography>
                                    </Grid>}
                                    {props.sectionData.isShowMenu && props.sectionData.theLiquors.map((aLiquor) => <Grid
                                        container item justifyContent='center' xs={4} sm={3}>
                                        <Typography variant='body1'
                                                    style={{color: "white", width: "340px"}} align='center'>
                                            {aLiquor}
                                        </Typography>
                                    </Grid>)}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default TheDrinkeryOtherSideSection