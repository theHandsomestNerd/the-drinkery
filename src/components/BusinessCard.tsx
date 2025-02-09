import React, {FunctionComponent, useContext, useState} from 'react'
import {Theme} from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import {
    Avatar,
    Button,
    Divider,
    Drawer,
    Fab,
    Grid,
    List,
    ListItem,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import createStyles from '@mui/styles/createStyles';
import {Close, FileCopy} from "@mui/icons-material";
import SocialMediaBlock from "./templates/my-digital-resume/social-media-block/SocialMediaBlock";
import {urlFor} from "./block-content-ui/static-pages/cmsStaticPagesClient";
import {MainMenuAnchorType, SanityTransformHwHomePage} from "../common/sanityIo/Types";
import {ResumeBioSectionType} from "./BlockContentTypes";
import MailTo from "./mail-to/MailTo";
import QrCodeContext from "./qr-code-context/QrCodeContext";
import SnackbarContext from "./modal-context/SnackbarContext";
import BusinessCardSubmitEmail from "./templates/transform-hw/pages/BusinessCardSubmitEmail";
import firebaseAnalyticsClient from "../common/firebase/FirebaseAnalyticsClient";
import {useLocation} from "react-router";
import {COLORS} from "../theme/common/ColorPalette";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
            "& .MuiDrawer-paper": {
                backgroundColor: "transparent"
            }
        },
        listItem: {
            "&.MuiListItem-gutters": {
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                paddingRight: 0
            }
        }
    }),
);

interface MainMenuProps {
    // menu: SanityMenuContainer
    homePage: SanityTransformHwHomePage
    anchor: MainMenuAnchorType
}

const BusinessCard: FunctionComponent<MainMenuProps> = ({anchor, homePage}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>()

    const location = useLocation()
    const toggleDrawer = (anchor: MainMenuAnchorType, open: boolean) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        if (open) {
            firebaseAnalyticsClient.ctaClick(location.pathname ?? "", "Open Business Card")
        }

        setIsDrawerOpen(open);
    };

    const snackbarContext = useContext(SnackbarContext)
    const classes = useStyles()

    const theme = useTheme()

    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    // const pageContext = useContext(PageContext)

    const [userBio, setUserBio] = React.useState<ResumeBioSectionType>()

    React.useEffect(() => {
        //find the bio in pagecontent
        const bioSection = homePage.pageContent.content.filter((content: any) => {
            if (content._type === "ResumeBioSection") {
                return true
            }
            return false
        })

        setUserBio(bioSection[0])


    }, [homePage.pageContent])

    const qrCodeContext = useContext(QrCodeContext)
    const share = async (url: string) => {
        console.log("share")
        //
        qrCodeContext.openSnackbar && qrCodeContext.openSnackbar(url)
        // qrCodeContext.init && await qrCodeContext.init(url)
    }

    // React.useEffect(() => {
    //     qrCodeContext.qr_code_value && qrCodeContext.openSnackbar && qrCodeContext.openSnackbar(['email'])
    //
    // }, [qrCodeContext.qr_code_value])

    const list = (anchor: MainMenuAnchorType) => (
        <Grid xs={12} md={6} container item
              role="presentation"
            // onClick={toggleDrawer(anchor, false)}
            // onKeyDown={toggleDrawer(anchor, false)}
              style={{backgroundColor: COLORS.LIGHTGRAY}}
        >
            <Grid container item alignContent='flex-end'>
                <Grid item container style={{
                    marginBottom: theme.spacing(4),
                    backgroundRepeat: "none",
                    minHeight: smDown ? 350 : 450,
                    backgroundSize: "cover",
                    overflow: "visible",
                    position: "relative",
                    backgroundImage: `url(${urlFor(homePage.businessCardImageSrc ?? "").url()})`
                }} justifyContent='center' alignContent='flex-end'>
                    <Grid container item style={{
                        position: "relative",
                        bottom: -45,
                        height: "max-content",
                        padding: theme.spacing(2, 3)
                    }}>
                        <SocialMediaBlock isCentered spacing={1} iconColor='white' bgColor
                                          theBackgroundColor={theme.palette.primary.main}  {...homePage.businessContact}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item>
                <List style={{width: "100%",}}>
                    <ListItem>
                        <Grid container>

                            <Grid container justifyContent='center'>
                                <Typography color='primary' variant='h6'>{userBio?.name}</Typography>
                            </Grid>
                            <Grid container justifyContent='center'>
                                <Typography variant='body2'>{userBio?.careerTitle}</Typography>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem>
                        <Grid container>
                            <Grid item xs={3}>
                                <Typography variant='body2'>Phone:</Typography>

                            </Grid>
                            <Grid item xs={9} container justifyContent='flex-end'>
                                <Typography variant='body2'>{homePage.businessContact?.phone}</Typography>

                            </Grid>
                        </Grid>
                    </ListItem>

                    <Divider/>
                    <ListItem>
                        <Grid item xs={3}>
                            <Typography variant='body2'>Email:</Typography>

                        </Grid>
                        <Grid item xs={9} container justifyContent='flex-end'>
                            <MailTo color={theme.palette.primary.main} email={homePage.businessContact?.email ?? ""}
                                    subject={"Information Request"} body={""}>
                                <Typography color='textPrimary' variant='button'
                                            align='right'>{homePage.businessContact?.email}</Typography>
                            </MailTo>
                            {/*<Typography variant='body2'>{homePage.email}</Typography>*/}
                        </Grid>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <Grid container>
                            <Grid item xs={8} container alignContent='flex-end'>
                                <Typography variant='h6' gutterBottom>Website</Typography>
                                <Button variant='outlined' size='small' fullWidth color='primary'
                                        href={homePage.website}><Grid style={{height: "48px"}} container
                                                                      justifyContent='center'
                                                                      alignContent='center'
                                                                      alignItems='center'><Grid
                                    item><Typography

                                    variant='subtitle1'
                                    align='center'>{homePage.website}</Typography></Grid></Grid></Button>
                            </Grid>
                            <Grid item xs={3} container>
                                <Grid container item justifyContent='flex-end'>

                                    <Grid item xs={2} container justifyContent='flex-end'>
                                        <Button style={{height: "80px"}} variant='contained' color='primary' fullWidth
                                                onClick={() => {
                                                    navigator.clipboard.writeText(homePage.website ?? "")
                                                    const snack = <Grid container item>
                                                        Copied!
                                                    </Grid>

                                                    snackbarContext.openSnackbar && snackbarContext.openSnackbar(snack, 15000)
                                                }}>
                                            <Grid item>
                                                <FileCopy style={{height: "42px"}}/>
                                                <Typography variant='subtitle1'>Copy</Typography>
                                            </Grid>
                                        </Button>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Button variant='contained' color='primary' fullWidth
                                                style={{height: "80px"}}
                                                onClick={() => share(homePage.website ?? "")}>
                                            <Grid item>
                                                <img alt='website QR code' height={42}
                                                     src={urlFor(homePage.websiteQrCode ?? "").url() ?? ""}/>
                                                <Typography variant='subtitle1'>Qr</Typography>
                                            </Grid>
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <Grid container>
                            <Grid item xs={8} container alignContent='flex-end'>
                                <Typography variant='h6' gutterBottom>Virtual Meeting</Typography>
                                <Button variant='outlined' size='small' fullWidth color='primary'
                                        href={homePage.bookAppointmentLink}><Grid style={{height: "48px"}}
                                                                                  container
                                                                                  justifyContent='center'
                                                                                  alignContent='center'
                                                                                  alignItems='center'><Grid
                                    item><Typography

                                    variant='subtitle1'
                                    align='center'>{homePage.bookAppointmentLink}</Typography></Grid></Grid></Button>
                            </Grid>
                            <Grid item xs={3} container>
                                <Grid container item justifyContent='flex-end'>

                                    <Grid item xs={2} container justifyContent='flex-end'>
                                        <Button style={{height: "80px"}} variant='contained' color='primary' fullWidth
                                                onClick={() => {
                                                    navigator.clipboard.writeText(homePage.bookAppointmentLink ?? "")
                                                    const snack = <Grid container item>
                                                        Copied!
                                                    </Grid>

                                                    snackbarContext.openSnackbar && snackbarContext.openSnackbar(snack, 15000)
                                                }}
                                        >
                                            <Grid item>
                                                <FileCopy style={{height: "42px"}}/>
                                                <Typography variant='subtitle1'>Copy</Typography>
                                            </Grid>
                                        </Button>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Button style={{height: "80px"}} variant='contained' color='primary' fullWidth
                                                onClick={() => share(homePage.bookAppointmentLink ?? "")}>
                                            <Grid item>
                                                <img alt={'make apppointment qr code'} height={42}
                                                     src={urlFor(homePage.bookAppointmentQrCode ?? "").url() ?? ""}/>
                                                <Typography variant='subtitle1'>Qr</Typography>
                                            </Grid>
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <Grid item xs={12}>
                            <BusinessCardSubmitEmail source={'Business Card'} emailFieldText={'Email Address'}
                                                     emailButtonText={'Submit'}
                                                     subscribeText={'Get an email with my contact information below'}/>
                        </Grid>
                    </ListItem>
                </List>
            </Grid>
            {/*<Divider/>*/}
            {/*{menu?.subMenus?.map((subMenu: any, index: number) => {*/}
            {/*    switch (subMenu._type) {*/}
            {/*        case 'menuGroup':*/}
            {/*            const menuGroup: SanityMenuGroup = subMenu*/}
            {/*            return <MainMenuSubMenu key={index} menuGroup={menuGroup}/>*/}
            {/*        case 'menuItem':*/}
            {/*        default:*/}
            {/*            const menuItem: SanityMenuItem = subMenu*/}
            {/*            return <List style={{padding: 0}} key={menuItem.displayText}>*/}
            {/*                <ListItem href={menuItem.url ?? ""} className={classes.listItem} button>*/}
            {/*                    <Button variant='text' href={menuItem.isModalButton ? undefined : menuItem.url}*/}
            {/*                            onClick={menuItem.isModalButton ? () => {*/}
            {/*                                console.log()*/}
            {/*                                if (menuItem.isModalButton) {*/}
            {/*                                    modalContext.openModal && modalContext.openModal(menuItem.modalRef)*/}
            {/*                                }*/}
            {/*                            } : undefined}*/}
            {/*                            style={{*/}
            {/*                                paddingTop: theme
.spacing(2.25),*/}
            {/*                                paddingLeft: theme
.spacing(2),*/}
            {/*                                paddingBottom: theme
.spacing(2.25),*/}
            {/*                                height: "100%",*/}
            {/*                                margin: 0*/}
            {/*                            }} fullWidth>*/}
            {/*                        <ListItemText primary={menuItem.displayText}/>*/}
            {/*                    </Button>*/}

            {/*                </ListItem>*/}
            {/*                <Divider/>*/}
            {/*            </List>*/}
            {/*    }*/}

            {/*})}*/}
        </Grid>
    );


    return (
        <Grid item>

            <Fab
                sx={{position: "absolute", right: 32, bottom: 32}}
                color='primary'
                onClick={toggleDrawer(anchor, true)}
            >
                <Avatar style={{backgroundColor: "whitesmoke"}}

                        src={urlFor(homePage.headerContent.content[0].headerMenuRef.logoImageSrc ?? "").url() ?? ""}/>
            </Fab>


            <Drawer
                className={classes.drawer}
                anchor={anchor} open={isDrawerOpen}
                onClose={toggleDrawer(anchor, false)}
            >
                <Grid container alignItems='center' justifyContent='space-between'
                      style={{

                          position: "absolute",
                          zIndex: 1000,
                          paddingLeft: theme.spacing(4),
                          paddingRight: theme.spacing(6),
                      }}>

                    {/*<Grid item xs={3}>*/}
                    {/*    {menu.logoImageSrc && <Logo logoImageSrc={homePage.imgSrc}/>}*/}
                    {/*</Grid>*/}
                    <Grid item xs={1}><Button onClick={() => {
                        setIsDrawerOpen(false)
                    }}><Close color='primary' fontSize='large'/></Button></Grid>
                </Grid>
                <Grid container item justifyContent='center'>
                    {list(anchor)}
                </Grid>
            </Drawer>
        </Grid>
    );
}

export default BusinessCard