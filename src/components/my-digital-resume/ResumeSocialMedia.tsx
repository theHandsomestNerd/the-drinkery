import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Grid, IconButton, PropTypes} from '@material-ui/core'
import {SanityTransformHwHomePage} from "../../common/sanityIo/Types";
import {Facebook, GitHub, Instagram, LinkedIn, Twitter} from "@material-ui/icons";
import clsx from "clsx";
import {GridSpacing} from "@material-ui/core/Grid/Grid";

export const useStyles = makeStyles((theme: Theme) => ({
    buttonBackground: {
        backgroundColor: theme.palette.primary.main,
        borderRadius: 40,
        padding:theme.spacing(1)
    },
}))

interface IProps {
    homePage?: SanityTransformHwHomePage
    color?: PropTypes.Color
    bgColor?: boolean
    spacing?: GridSpacing
}

const ResumeSocialMedia: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useStyles()
    return (<Grid item xs={12} container alignItems='center' justifyContent='center'
                  spacing={props.spacing ? props.spacing : 0}>
        <Grid item>
            {props.homePage?.businessContact.facebook && <Grid item className={clsx({[classes.buttonBackground]: props.bgColor})}>
                <IconButton color={props.color ?? 'primary'}
                            href={`https://facebook.com/${props.homePage?.businessContact.facebook}`}><Facebook/></IconButton>
            </Grid>}
        </Grid>
        <Grid item>
            {props.homePage?.businessContact.twitter && <Grid item className={clsx({[classes.buttonBackground]: props.bgColor})}>
                <IconButton color={props.color ?? 'primary'}
                            href={`https://twitter.com/${props.homePage?.businessContact.twitter}`}><Twitter/></IconButton>
            </Grid>}
        </Grid>
        <Grid item>
            {props.homePage?.businessContact.instagram && <Grid item className={clsx({[classes.buttonBackground]: props.bgColor})}>
                <IconButton color={props.color ?? 'primary'}
                            href={`https://instagram.com/${props.homePage?.businessContact.instagram}`}><Instagram/></IconButton>
            </Grid>}
        </Grid>
        <Grid item>
            {props.homePage?.businessContact.linkedIn && <Grid item className={clsx({[classes.buttonBackground]: props.bgColor})}>
                <IconButton color={props.color ?? 'primary'}
                            href={`https://linkedIn.com/in/${props.homePage?.businessContact.linkedIn}`}><LinkedIn/></IconButton>
            </Grid>}
        </Grid>
        <Grid item>
            {props.homePage?.businessContact.github && <Grid item className={clsx({[classes.buttonBackground]: props.bgColor})}>
                <IconButton color={props.color ?? 'primary'}
                            href={`https://github.com/${props.homePage?.businessContact.github}`}><GitHub/></IconButton>
            </Grid>}
        </Grid>
    </Grid>)
}

export default ResumeSocialMedia