import React, {FunctionComponent, useContext} from 'react'
import { Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import {Button, Grid, PropTypes, Tooltip, Typography} from '@mui/material'
import CssFadeToColor from "../css-fade-to-color/CssFadeToColor";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";
import {SanityImageSource} from "@sanity/asset-utils";
import {CssFadeToColorDirectionEnum} from "../css-fade-to-color/CssFadeToColorDirectionEnum";
import {ImageWithButtonOverlayAligmentEnum} from "./ImageWithButtonOverlayAligmentEnum";
import firebaseAnalyticsClient from "../../common/firebase/FirebaseAnalyticsClient";
import PageContext from "../page-context/PageContext";
import {OverridableStringUnion} from "@mui/types";
import {ButtonPropsColorOverrides} from "@mui/material/Button/Button";

export const useStyles = makeStyles((theme: Theme) => ({
    contentBullets: {
        marginBottom: "40px"
    }
}))


interface IProps {
    fromColor?: string
    toColor?: string
    isResponsive?: boolean
    direction?: CssFadeToColorDirectionEnum
    imageSrc?: SanityImageSource
    imageUrl?: string
    imageAltText?: string
    ctaButtonLink?: string
    ctaButtonText?: string
    variant?: 'text' | 'contained' | 'outlined'
    height: number
    buttonAlignment?: ImageWithButtonOverlayAligmentEnum
    buttonColor?: OverridableStringUnion<
        'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
        ButtonPropsColorOverrides
    >
    learnMoreLink?: string
    tooltip?: string
    source?: string
    placeholderWidth?: number
}


const ImageWIthButtonOverlay: FunctionComponent<IProps> = (props) => {
    const getButtonAlignment = () => {
        switch (props.buttonAlignment) {
            case ImageWithButtonOverlayAligmentEnum.RIGHT:
                return 'flex-end'
            case ImageWithButtonOverlayAligmentEnum.LEFT:
                return 'flex-start'
            case ImageWithButtonOverlayAligmentEnum.CENTER:
            default:
                return 'center'
        }
    }

    const [displayImageUrl, setDisplayImageUrl] = React.useState<string>()

    React.useEffect(() => {
        if (props.imageUrl) {
            setDisplayImageUrl(props.imageUrl)
        }
        if (props.imageSrc) {
            setDisplayImageUrl(urlFor(props.imageSrc ?? "").height(props.height).url() ?? '')
        } else {
            setDisplayImageUrl(`https://placehold.co/${props.placeholderWidth ?? props.height}x${props.height}`)
        }

    }, [])

    const pageContext = useContext(PageContext)

    return (
        <Button fullWidth
                onClick={(e) => {
                    props.source && firebaseAnalyticsClient.ctaClick(props.source, 'image-button', pageContext.analyticsId,)
                }}
                variant='text'
                href={props.learnMoreLink}
                style={{padding: 0}}
        >
            <Grid item container direction='column'
                  style={{position: "relative", cursor: "pointer"}}>
                {props.toColor &&
                    props.direction !== undefined &&
                    <CssFadeToColor toColor={props.toColor}
                                    direction={props.direction}
                                    isResponsive={props.isResponsive}/>}
                {
                        props.tooltip ? <Tooltip
                            title={<Typography variant='subtitle1'
                                               style={{fontWeight: "normal"}}>{props.tooltip}</Typography>}>
                            <Grid item container style={{
                                backgroundImage: `url(${displayImageUrl})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                height: props.height
                            }}>
                            </Grid>
                        </Tooltip> : <Grid item container style={{
                            backgroundImage: `url(${displayImageUrl})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            height: props.height
                        }}>
                        </Grid>
                }
                <Grid container
                      item
                      style={{
                          position: "absolute",
                          bottom: 32,
                          left: 0,
                          paddingRight: "32px"
                      }}
                      justifyContent={getButtonAlignment()}>
                    {props.ctaButtonLink &&
                        <Button
                            onClick={(e: any) => {
                                props.source && props.ctaButtonText &&
                                firebaseAnalyticsClient.ctaClick(props.source, props.ctaButtonText, pageContext.analyticsId,)
                            }}
                            component='div'
                            variant={props.variant ? props.variant : 'outlined'}
                            color={props.buttonColor ? props.buttonColor : 'primary'}
                            href={props.ctaButtonLink ?? ''}
                            style={{
                                color: "#FAFAFA"
                            }}
                        >
                            <Typography
                                variant='button'
                                color='secondary'>
                                {props.ctaButtonText}
                            </Typography>
                        </Button>}
                </Grid>
            </Grid>
        </Button>
    )
}

export default ImageWIthButtonOverlay