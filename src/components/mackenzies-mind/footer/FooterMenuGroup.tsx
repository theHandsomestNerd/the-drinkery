import React, {FunctionComponent, useContext, useEffect, useState} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'

import {Button, Grid, Link, Typography} from '@material-ui/core'
import DigitalResumeTheme from "../../../theme/DigitalResumeTheme";
import {SanityMenuGroup, SanityMenuItem} from "../../../common/sanityIo/Types";
import MediaQueriesContext from "../../media-queries-context/MediaQueriesContext";
import LoadingButton from "../../loading-button/LoadingButton";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginRight: theme.spacing(11),
    },
    footerLink: {
        marginBottom: '8px',
        textDecoration: 'none',
        // color: '#FDF3EB',
        '&:hover': {
            textDecoration: 'none',
        },
        textTransform: 'capitalize',
    },
    menuItem: {
        paddingLeft: '32px',
        paddingRight: '32px',
    },
    menuTitle: {
        // color: '#FDF3EB',
        marginBottom: theme.spacing(1),
    },
    popover: {
        boxShadow: 'none',
        borderLeft: `4px solid ${theme.palette.background.default}`,
        borderRadius: 0,
    },
    list: {
        padding: 0,
    },
}))

export type LandingPagesFooterMenuGroupProps = {
    menuGroup: SanityMenuGroup,
}

const FooterMenuGroup: FunctionComponent<LandingPagesFooterMenuGroupProps> = ({menuGroup}) => {
    const classes = useStyles(DigitalResumeTheme)

    const [menuGroupContents, setMenuGroupContents] = useState<SanityMenuGroup>()
    const [menuItemContents, setMenuItemContents] = useState<SanityMenuItem>()
    const mediaQueryContext = useContext(MediaQueriesContext)
    useEffect(() => {
        if (menuGroup._type === "menuGroup") {
            setMenuGroupContents(menuGroup)
        } else if (menuGroup._type === "menuItem") {
            setMenuItemContents(menuGroup)
        }
    },[])

    return (
        <Grid item container direction="column" spacing={2} className={classes.root} >
            {menuGroupContents?.menuGroupTitle && <Grid container item>
                <Typography color='primary' variant="body2"
                            className={classes.menuTitle}>{menuGroupContents && menuGroupContents.menuGroupTitle}</Typography>
            </Grid>}
            <Grid item container >
                <Grid container item spacing={2}  >
                    {
                        menuGroup?.links && menuGroup.links.map( (menuLink, index: any) => {
                            return (
                                <Grid key={index} item container>
                                    {!menuLink.isContainedButton && !menuLink.isOutlinedButton ? <Link href={menuLink.url}>
                                        <Typography variant="body1" color='textPrimary' noWrap>
                                            {menuLink.displayText}
                                        </Typography>
                                    </Link>:<Button variant={menuLink.isContainedButton?'contained':'outlined'} href={menuLink.url}><Typography variant="body1" color='textPrimary' noWrap>
                                        {menuLink.displayText}{menuLink.isContainedButton}{menuLink.isOutlinedButton}
                                    </Typography></Button>}
                                </Grid>
                            )
                        })
                    }
                    {
                        menuItemContents && <Grid item container justifyContent={mediaQueryContext.mdDown && (menuItemContents.isContainedButton || menuItemContents.isOutlinedButton)?'center':'flex-start'}>
                            {!menuItemContents.isContainedButton && !menuItemContents.isOutlinedButton ? <Link href={menuItemContents.url}>
                                <Typography variant="body1" color='textPrimary' noWrap>
                                    {menuItemContents.displayText}
                                </Typography>
                            </Link>:<LoadingButton variant={menuItemContents.isContainedButton?'contained':'outlined'} href={menuItemContents.url}><Typography variant="body1" color='textPrimary' noWrap>
                                {menuItemContents.displayText}{menuItemContents.isContainedButton}{menuItemContents.isOutlinedButton}
                            </Typography></LoadingButton>}
                        </Grid>
                    }
                    {!menuGroupContents && !menuItemContents && <></>}
                </Grid>

            </Grid>
        </Grid>

    )
}

export default FooterMenuGroup