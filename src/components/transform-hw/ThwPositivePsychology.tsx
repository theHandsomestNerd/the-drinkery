import React, {FunctionComponent, useContext} from 'react'
import { Theme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import {Button, Grid, Typography} from '@mui/material'
import {urlFor} from '../block-content-ui/static-pages/cmsStaticPagesClient'
import {ThwPositivePsychologySectionType} from "../BlockContentTypes";
import DigitalResumeTheme from "../../theme/DigitalResumeTheme";
import {v4 as uuidv4} from 'uuid'
import ResponsiveBullet from "../ResponsiveBullet";
import MediaQueriesContext from "../media-queries-context/MediaQueriesContext";
import TransformHWTheme from "../../theme/TransformHWTheme";



declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}



declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        minHeight: '521px',
        backgroundColor: theme.palette.background.paper,
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5)
    },
    contentBullets: {
        // border: "1px solid black"
        marginBottom: theme.spacing(5)
    }
}))


interface IProps {
    sectionData: ThwPositivePsychologySectionType
}

const PositivePsychologySection: FunctionComponent<IProps> = (props) => {
    const classes = useStyles(TransformHWTheme)

    const mediaQueriesContext = useContext(MediaQueriesContext)


    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={TransformHWTheme}><Grid container item className={classes.root} xs={11}>
                <Grid container item justifyContent='space-between' spacing={4}>
                    <Grid item xs={12} md={7} lg={8} container direction='column' spacing={2}>
                        <Grid container item>
                            <Grid item container>

                                <Typography variant='body1'
                                            style={{fontStyle: "italic"}}>{props.sectionData.superTitle}</Typography>
                            </Grid>
                            <Grid container item wrap='nowrap'>

                            <Grid item>
                                <Typography variant='h4'
                                            color='secondary'
                                            display='inline' >{props.sectionData.contentTitle}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='h3'
                                            color='secondary' display='inline' style={{letterSpacing:"-.25em"}}>____</Typography>
                            </Grid>
                            </Grid>
                        </Grid>
                        <Grid item container>
                            <Typography variant='body1'
                                        color='textPrimary'>{props.sectionData.contentText}</Typography>
                        </Grid>
                        <Grid container item>
                            <Grid item container className={classes.contentBullets} spacing={3}>
                                {props.sectionData.contentBullets?.map((reason: string) => {
                                    return <ResponsiveBullet key={uuidv4()} text={reason} bulletColor='secondary'/>
                                })}
                            </Grid>
                        </Grid>
                        {props.sectionData.ctaButtonLink && props.sectionData.ctaButtonText && <Grid container item>
                            <Button variant='contained' color='secondary'
                                    style={{backgroundColor: DigitalResumeTheme.palette.secondary.main}}
                                    href={props.sectionData.ctaButtonLink ?? ''}>
                                {props.sectionData.ctaButtonText}
                            </Button>
                        </Grid>}
                    </Grid>
                    <Grid item xs={12} md={5} lg={4} container justifyContent='flex-end' alignContent='center' alignItems='center'>
                        <Grid item style={{overflow: "hidden"}}>
                            {!props.sectionData.imageSrc ? <img src={`https://placehold.co/465x${mediaQueriesContext.mdUp ? 370 : 900}`} alt={'placeholder'}/> :
                                <img alt={props.sectionData.imageSrcAltText}
                                     src={urlFor(props.sectionData.imageSrc ?? "").width(mediaQueriesContext.mdUp ? 370 : 900).height(465).url() ?? ''}/>
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid></ThemeProvider>
        </StyledEngineProvider>
    );
}

export default PositivePsychologySection