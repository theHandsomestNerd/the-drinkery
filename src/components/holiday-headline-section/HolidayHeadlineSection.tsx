import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Box, Grid, Hidden, Typography} from '@material-ui/core'
import PageContext from "../page-context/PageContext";
import MediaQueriesContext from "../media-queries-context/MediaQueriesContext";
import {HolidayHeadlineSectionType} from "../BlockContentTypes";
import DigitalResumeTheme from "../../theme/DigitalResumeTheme";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: '430px',
        // backgroundColor: theme.palette.background.paper,
        paddingBottom: theme.spacing(5)
    },
    contentBullets: {
        // border: "1px solid black"
        marginBottom: theme.spacing(5)
    }
}))


interface IProps {
    sectionData: HolidayHeadlineSectionType
}

const HolidayHeadlineSection: FunctionComponent<IProps> = (props) => {
    const classes = useStyles()
    const mediaQueriesContext = useContext(MediaQueriesContext)

    const pageContext = useContext(PageContext);

    return (
        <Grid container justifyContent='center' item alignContent='center' alignItems='center'
              style={{padding: "40px", backgroundColor: DigitalResumeTheme.palette.secondary.main}}>
            <Grid item xs={12} sm={2} container justifyContent='center'>
                <img  height={156} width={156} alt={props.sectionData.slug.current + " Icon"} src={urlFor(props.sectionData?.holidayIconLeft??"").url()??""}/>
            </Grid>
            <Grid item xs={12} sm={8} container justifyContent='center'>
                <Grid item>
                    <Typography variant='h2' color='primary' gutterBottom  align='center'>
                        {props.sectionData.contentText}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant='body1' color='textPrimary' align='center'>
                        {props.sectionData.contentSubtext}
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={2} container  justifyContent='center' >
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}><img height={156} width={156} alt={props.sectionData.slug.current + " Icon"} src={urlFor(props.sectionData?.holidayIconRight??"").url()??""}/></Box>
            </Grid>
        </Grid>
    )
}

export default HolidayHeadlineSection