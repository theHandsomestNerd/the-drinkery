import React, {FunctionComponent, PropsWithChildren, useContext, useMemo, useReducer,} from 'react';
import {ServiceAmenityType} from "../BlockContentTypes";
import {Grid, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {v4 as uuidv4} from "uuid";
import ToolTipWrap from "../templates/transform-hw/ToolTipWrap";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";
import PageContext from "../page-context/PageContext";
import ColoredPng from "../colored-png/ColoredPng";
import SnackbarContext from "../modal-context/SnackbarContext";
import firebaseAnalyticsClient from "../../common/firebase/FirebaseAnalyticsClient";
import QrCodeContext from "./QrCodeContext";
import QRCode from "react-qr-code";
import {useTheme} from '@mui/material/styles';

type IProps = {};


const QrCodeProvider: FunctionComponent<IProps & PropsWithChildren> = (
    props: PropsWithChildren<IProps>,
) => {

    const theme = useTheme()
    const pageContext = useContext(PageContext)
    const [qrCodeValue, setQrCodeValue] = React.useState<string>("")

    const snackbarContext = useContext(SnackbarContext)

    const openSnackbar = async (url: string) => {
        pageContext.analyticsId && firebaseAnalyticsClient.qrCodeShown && firebaseAnalyticsClient.qrCodeShown(url ?? "", pageContext.analyticsId)
        // await dispatch({type: "LOAD_QR_CODE", payload: {qr_code_value: qr_code_value}})
        setQrCodeValue(url)
        const snack = <Grid
            container
            // style={{minWidth: "200px"}}
        >
            <Grid container item justifyContent='center'>
                {url && <QRCode
                    size={256}
                    style={{height: "auto", maxWidth: "100%", width: "100%"}}
                    value={url}
                    viewBox={`0 0 256 256`}
                />}
        </Grid>
            <Grid container item justifyContent='center' style={{marginTop: theme.spacing(2)}}>

            <Typography variant='h6'>Share</Typography>
            </Grid>
        </Grid>

        snackbarContext.openSnackbar && (await snackbarContext.openSnackbar(snack))
    }

    const newValue = useMemo(
        () => ({
            qr_code_value: qrCodeValue,
            openSnackbar
        }),
        [
            qrCodeValue,
            openSnackbar
        ]
    );

    return (
        <QrCodeContext.Provider value={newValue}>
            {props.children}
        </QrCodeContext.Provider>
    );
};

export default QrCodeProvider;
