import './App.css'
import {CssBaseline, Grid, MuiThemeProvider, useTheme} from '@material-ui/core'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import React from 'react'
import {QueryClient, QueryClientProvider} from 'react-query';
import DigitalResumeTheme from "./theme/DigitalResumeTheme";
import FourOhFour from "./components/transform-hw/pages/error-page/FourOhFour";
import PageProvider from "./components/page-context/PageProvider";
import MediaQueriesProvider from "./components/media-queries-context/MediaQueriesProvider";
import AmenityProvider from "./components/amenity-context/AmenityProvider";
import ModalProvider from "./components/snackbar-context/ModalProvider";
import SnackbarProvider from "./components/modal-context/SnackbarProvider";
import PageMux from "./components/mackenzies-mind/pages/PageMux";
import QrCodeProvider from "./components/qr-code-context/QrCodeProvider";
import TheOtherSide from "./components/the-drinkery/TheOtherSide";
import TheDrinkerySpecials from "./components/the-drinkery/TheDrinkerySpecials";

export enum RoutesEnum {
    THN = "/the-drinkery/:pageSlug",
    ERROR = '/error'
}

function App() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                // refetchOnWindowFocus: false,
                // refetchOnMount: false,
                // refetchOnReconnect: false,
            },
        },
    });

    const theme = useTheme()
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <MuiThemeProvider theme={DigitalResumeTheme}>
                    <CssBaseline/>
                    <SnackbarProvider>
                        <MediaQueriesProvider>
                            <ModalProvider>
                                <PageProvider>
                                    <AmenityProvider>
                                        <QrCodeProvider>
                                            <Grid container item alignItems="center"
                                                  style={{
                                                      backgroundColor: theme.palette.background.default,
                                                      overflow: "hidden",
                                                      width: "100vw"
                                                  }}>

                                                <Grid item>
                                                    <Routes>
                                                        {/*<Route path={"/theOtherSide"} element={<TheOtherSide />}/>*/}
                                                        {/*<Route path={"/drinkerySpecials"} element={<TheDrinkerySpecials />}/>*/}
                                                        <Route path={RoutesEnum.THN} element={<PageMux/>}/>
                                                        <Route path={RoutesEnum.ERROR} element={<FourOhFour/>}/>
                                                        <Route path={"/*"}
                                                               element={<Navigate
                                                                   to={'/the-drinkery/home'}/>}/>
                                                    </Routes>
                                                </Grid>
                                            </Grid>
                                        </QrCodeProvider>
                                    </AmenityProvider>
                                </PageProvider>
                            </ModalProvider>
                        </MediaQueriesProvider>
                    </SnackbarProvider>
                </MuiThemeProvider>
            </QueryClientProvider>
        </BrowserRouter>
    )
}

export default App
