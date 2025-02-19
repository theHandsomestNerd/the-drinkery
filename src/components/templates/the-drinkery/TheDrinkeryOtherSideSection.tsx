import React, {FunctionComponent} from 'react'
import {Button, Grid, Typography, useTheme} from '@mui/material'
import clsx from "clsx";
import useCustomStyles from "../mackenzies-mind/pages/Styles";
import bgImage from "./dont-need/drinkery-background.jpg"
import TheOtherSideLogo from "./TheOtherSideLogo";
import openDoorSign from './dont-need/Shutterstock_1025370412.png'
import {DrinkeryOtherSideSectionType} from "../../BlockContentTypes";
import {Theme} from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';

interface IProps {
    sectionData: DrinkeryOtherSideSectionType
}

export const useStyles = makeStyles((theme: Theme) => ({
    preroot: {
        minHeight: '221px',
        color: "white",
        paddingTop: theme.spacing(9),
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
                                    {props.sectionData.isShowMenu && props.sectionData.theLiquors?.map((aLiquor) => <Grid
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