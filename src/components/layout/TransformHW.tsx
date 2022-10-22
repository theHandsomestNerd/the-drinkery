import {CircularProgress, CssBaseline, Grid, makeStyles, MuiThemeProvider, Theme} from '@material-ui/core'
import React, {FunctionComponent} from 'react'
import sanityClient from '../../sanityClient'
import BlockContentLayoutContainer from '../BlockContentLayoutContainer'
import {useParams} from 'react-router-dom'
import MetaTagsComponent from '../aft-marketing/MetaTags'
import cmsClient from '../abReplica/cmsClient'
import TransformHWTheme from "../../theme/transform-hw/TransformHWTheme";
import UnderConstruction from "./under-construction/UnderConstruction";
import {SanityTransformHwHomePage} from "../../common/sanityIo/Types";
import groqQueries from "../../utils/groqQueries";
import {useQuery} from "react-query";
import {useThwStyles} from "./Styles";
import FourOhFour from "./error/FourOhFour";
import ThwFooter from "../transform-hw/footer/ThwFooter";
import ThwHeader from "../transform-hw/header/ThwHeader";


export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100vw',
        // backgroundColor: "whitesmoke"
    }
}))

export type AppLayoutProps = {}

const TransformHW: FunctionComponent<AppLayoutProps> = (props) => {
    const classes = useStyles(TransformHWTheme)
    const globalClasses = useThwStyles(TransformHWTheme)
    const [homePage, setHomePage] = React.useState<SanityTransformHwHomePage | undefined>()

    const urlParams: { pageSlug: string } = useParams()

    const {isLoading, isError, data, isRefetching} = useQuery(
        ['fetchPageBySlug'],
        async () => {
            const pageSlug = urlParams.pageSlug
            if (pageSlug) {
                return sanityClient
                    .fetch(
                        `*[slug.current == $pageSlug]{
          ${groqQueries.HOMEPAGE}
       }`, {pageSlug})
                    .catch(console.error)
            }
        }
    );

    React.useEffect(() => {
        // console.log("the data is ", data)

        if (data)
            setHomePage(data[0])
    }, [data])

    const [realizedContent, setRealizedContent] = React.useState<any[]>([])

    React.useEffect(() => {
        // These Content sections are references and must be retrieved from Sanity
        homePage?.pageContent?.content?.map && Promise.all(homePage?.pageContent?.content.map((contentBlock: any) => {
            return cmsClient.fetchRef(contentBlock).then((response) => {
                return response
            })
        })).then(contentRealized => {
            setRealizedContent(contentRealized)
        })
    }, [homePage])

    const PageLayout = () => {
        return <Grid container direction='column' className={classes.root}>
            <Grid item>
                <ThwHeader menuSlug='transform-hw-header'/>
            </Grid>
            <Grid container item>
                <BlockContentLayoutContainer
                    content={realizedContent}/>
            </Grid>
            <Grid item>
                <ThwFooter footerMenuSlug='transform-hw-footer' homePage={homePage}/>
            </Grid>
        </Grid>
    }


    const PageContents = () => {
        if (isLoading || isRefetching)
            return <Grid container item justifyContent='center' alignItems='center'
                         alignContent='center' className={globalClasses.fullscreen}><CircularProgress/></Grid>

        if (!homePage?.isUnderConstruction) {
            return <PageLayout></PageLayout>
        } else if(homePage.underConstructionPageRef) {
            return <UnderConstruction underConstructionPageRef={homePage.underConstructionPageRef} email={homePage?.email}/>
        }

        if (isError) {
            return <FourOhFour/>
        }

        return <FourOhFour/>
    }

    return (
        <MuiThemeProvider theme={TransformHWTheme}>
            <CssBaseline/>
            <MetaTagsComponent structuredData={homePage?.structuredData && homePage.structuredData[0]}
                               title={homePage?.title ?? ''}
                               description={homePage?.description ?? ''} imgSrc={homePage?.metaImage}/>
            <PageContents/>
        </MuiThemeProvider>

    )
}

export default TransformHW