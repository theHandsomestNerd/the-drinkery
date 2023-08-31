import React, {FunctionComponent} from 'react'
import {Grid, makeStyles, Typography, useTheme} from '@material-ui/core'
import clsx from "clsx";
import useCustomStyles from "../mackenzies-mind/pages/Styles";
import bgImage from "./drinkery-background.jpg"
import TheOtherSideLogo from "./TheOtherSideLogo";
import {DrinkerySpecialsSectionType} from "../BlockContentTypes";
import {Theme} from "@material-ui/core/styles";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";

interface IProps {
    email?: string
    sectionData: DrinkerySpecialsSectionType
}

export const useStyles = makeStyles((theme: Theme) => ({
    preroot: {
        minHeight: '521px',
        color: "white",
        position: "relative",
        padding: theme.spacing(6, 0)
    },
}))

const TheDrinkerySpecials: FunctionComponent<IProps> = (props) => {
    const classes = useCustomStyles({bgImage: bgImage})
    const theme = useTheme()
    const theClasses = useStyles()

    return (
        <Grid container item className={theClasses.preroot}>
            <Grid item container className={clsx(classes.fullSection)}
                  justifyContent='center' alignItems='center'>
                <Grid item container spacing={1}>
                    <Grid container item justifyContent='center'>
                        <TheOtherSideLogo isCenter={true}></TheOtherSideLogo>
                    </Grid>
                    <Grid container item justifyContent='center'>
                        <img src={urlFor(props.sectionData.imageSrc).url() || ""}
                             alt={props.sectionData.imageSrcAltText}/>
                    </Grid>
                    <Grid container item justifyContent='center'>
                        <Grid item style={{maxWidth: 800}}>
                            <Typography align='center' variant='body2'
                                        style={{
                                            fontWeight: 400,
                                            paddingTop: 16,
                                            paddingRight: 32,
                                            paddingLeft: 32
                                        }}>
                                {props.sectionData.contentText}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        item
                        justifyContent='center'
                        alignItems='center'
                        alignContent='center'>
                        <Grid
                            item
                            style={{
                                backgroundColor: "whitesmoke"
                            }}>
                            <Typography align='center'
                                        variant='body1'
                                        style={{
                                            fontWeight: 400,
                                            paddingRight: 32,
                                            paddingLeft: 32,
                                            color: "black"
                                        }}>*{props.sectionData.disclaimer}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item justifyContent='center'>
                        <Typography variant='h3'>{props.sectionData.contentTitle}</Typography>
                    </Grid>
                    <Grid container item justifyContent='center'>
                        <Typography variant='body1'>{props.sectionData.subTitle}</Typography>
                    </Grid>
                    {
                        props.sectionData.theSpecials.map((specialData,index) =>
                            <Grid container item
                                  key={index}
                                  style={{paddingTop: theme.spacing(4)}}>
                                <Grid container item justifyContent='center'>
                                    <Typography variant='h4'>{specialData.title}</Typography>
                                </Grid>
                                <Grid container item justifyContent='center'>
                                    <Typography variant='body2'>{specialData.content}</Typography>
                                </Grid>
                            </Grid>)
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

export default TheDrinkerySpecials