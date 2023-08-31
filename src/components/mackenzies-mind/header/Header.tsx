import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {AppBar, Grid, Hidden, IconButton} from '@material-ui/core'
import DigitalResumeTheme, {COLORS} from "../../../theme/DigitalResumeTheme";
import MainMenu from "./MainMenu";
import FilteredMenuItems from "../../filtered-menu-items/FilteredMenuItems";
import clsx from "clsx";
import MediaQueriesContext from "../../media-queries-context/MediaQueriesContext";
import Logo from "../../transform-hw/logo/Logo";
import {Facebook, Instagram, Twitter} from "@material-ui/icons";
import {SanityTransformHwHomePage} from "../../../common/sanityIo/Types";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: COLORS.TRANSPARENTWHITE,
        transition: 'background-color .5s ease 0s',
        paddingLeft: theme.spacing(4),
        height: theme.mixins.toolbar.height,
        minWidth: 330
    },
    opaque: {
        backgroundColor: `white !important`,
    }
}))

export type HeaderProps = {
    pageHeader?: any
    homePage?: SanityTransformHwHomePage
    updateIsLoading?: (value: boolean) => void
}

const Header: FunctionComponent<HeaderProps> = (props) => {
    const classes = useStyles()
    const mediaQueriesContext = useContext(MediaQueriesContext)

    React.useEffect(() => {
        console.log("Page header in the header", props.homePage)
    }, [props.pageHeader])

    return (
        <AppBar className={clsx({[classes.opaque]: true}, classes.root)}>{props.pageHeader?.title ?
            <Grid item container justifyContent="space-between" alignItems='stretch' alignContent='center' spacing={mediaQueriesContext.mdDown ? 3 : 0}>
                <Grid item container xs={4} sm={2} md={1} alignItems='center' alignContent='center' style={{maxWidth:180}}>
                    <Logo logoImageSrc={props.pageHeader.logoImageSrc} height={60} />
                </Grid>
                <Grid container item xs={5} sm={3} alignContent='center' alignItems='center' justifyContent={mediaQueriesContext.xsDown ? 'center':"flex-start"} wrap='nowrap'>
                    <IconButton href={`https://facebook.com/${props.homePage?.businessContact?.facebook}`} color='primary'><Facebook /></IconButton>
                    <IconButton href={`https://instagram.com/${props.homePage?.businessContact?.instagram}`}  color='primary'><Instagram/></IconButton>
                    <IconButton href={`https://twitter.com/${props.homePage?.businessContact?.twitter}`}  color='primary'><Twitter/></IconButton>
                </Grid>
                <Grid item container xs={2} sm={6} md={7} justifyContent='space-between' alignItems='center' alignContent='center'>
                    {/*// @ts-ignore*/}
                    {!mediaQueriesContext.xsDown && <Hidden xsDown>
                        <Grid xs={2} md={12} lg={12} container item justifyContent='flex-end'
                              alignItems='center'
                              style={{
                                  height: "100%",
                                  paddingRight: mediaQueriesContext.smDown ? DigitalResumeTheme.spacing(2) : DigitalResumeTheme.spacing(4)
                              }}>
                            <FilteredMenuItems
                                subMenus={props.pageHeader.subMenus ?? []} onlyButtons={mediaQueriesContext.smDown}
                                includeMenuItems={!mediaQueriesContext.smDown}
                                includeMenuGroups={!mediaQueriesContext.smDown}/>
                        </Grid>
                    </Hidden>}
                    {/*// @ts-ignore*/}
                    <Hidden mdUp>
                        <Grid item xs={12} sm={2} container justifyContent='flex-end'>
                            <Grid container item
                                  justifyContent='flex-end'
                                  alignItems='center'
                            >
                                <Grid item>
                                    <MainMenu menu={props.pageHeader} anchor='top'/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Hidden>
                </Grid>
            </Grid>
            : <></>
        }</AppBar>
    )
}

export default Header