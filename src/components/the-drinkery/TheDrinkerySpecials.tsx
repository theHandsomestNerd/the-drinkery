import React, {FunctionComponent} from 'react'
import {Grid, makeStyles, Typography, useMediaQuery, useTheme} from '@material-ui/core'
import clsx from "clsx";
import useCustomStyles from "../mackenzies-mind/pages/Styles";
import bgImage from "./drinkery-background.jpg"
import TheOtherSideLogo from "./TheOtherSideLogo";
import {DrinkerySpecialsSectionType} from "../BlockContentTypes";
import {Theme} from "@material-ui/core/styles";

interface IProps {
    email?: string
    sectionData: DrinkerySpecialsSectionType
}

export const useStyles = makeStyles((theme: Theme) => ({
    preroot: {
        minHeight: '321px',
        // backgroundColor: "black",
        color:"white"
        // paddingLeft: -theme.spacing(-5),
    },
}))

const TheDrinkerySpecials: FunctionComponent<IProps> = (props) => {
    const classes = useCustomStyles({bgImage: bgImage})
    const theme = useTheme()
    const theClasses = useStyles()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Grid container item className={theClasses.preroot}
              style={{position: "relative", color: "white"}}>
            {/*<CssFadeToColor*/}
            {/*    toColor={COLORS.LIGHTGRAY}*/}
            {/*    isResponsive/>*/}
            {/*<Grid container item*/}
            {/*      className={clsx(xsDown ? classes.fullSection : classes.fullSection, classes.fullSectionOverlay)}>*/}
            {/*</Grid>*/}
            <Grid item container className={clsx(classes.fullSection)}
                  style={{
                      position: 'absolute',
                      // paddingBottom: smDown ? 0 : theme.spacing(10)
                  }}
                  justifyContent='center' alignItems='center'>
                <Grid item container>
                    <Grid container item justifyContent='center' style={{paddingBottom: theme.spacing(4)}}>
                        <TheOtherSideLogo isCenter={true}></TheOtherSideLogo>
                    </Grid>
                    <Grid container item justifyContent='center'>
                        <Typography variant='h3'>{props.sectionData.contentTitle}</Typography>
                    </Grid>
                    <Grid container item justifyContent='center'>
                        <Typography variant='body1'>{props.sectionData.subTitle}</Typography>
                    </Grid>
                    {props.sectionData.theSpecials.map((specialData)=><Grid container item style={{paddingTop: theme.spacing(4)}}>
                        <Grid container item justifyContent='center'>
                            <Typography variant='h4'>{specialData.title}</Typography>
                        </Grid>

                        <Grid container item justifyContent='center'>
                            <Typography variant='body2'>{specialData.content}</Typography>
                        </Grid>
                    </Grid>)}
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

export default TheDrinkerySpecials