import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {BrowserRouter} from "react-router-dom";
import React from 'react';
import {Preview} from '@storybook/react';
import PageProvider from "../src/components/page-context/PageProvider";
import HomePageResumeData from "../src/stories/data/HomePageData";
import ModalProvider from "../src/components/snackbar-context/ModalProvider";
import SnackbarProvider from "../src/components/modal-context/SnackbarProvider";
import AmenityProvider from "../src/components/amenity-context/AmenityProvider";
import {CssBaseline} from "@mui/material";
import CustomizedThemeProvider from "../src/components/customized-theme-provider/CustomizedThemeProvider";
import DigitalResumeThemeData from "../src/stories/data/DigitalResumeThemeData";

export const mockedQueryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
        },
    },
});

const preview: Preview = {
    decorators: [
        (Story) => (
            <BrowserRouter>
                <QueryClientProvider client={mockedQueryClient}>
                    <PageProvider page={HomePageResumeData}>
                        <CustomizedThemeProvider pageTheme={DigitalResumeThemeData}>
                            <SnackbarProvider>
                                    <ModalProvider>
                                        <AmenityProvider>
                                            <Story/>
                                        </AmenityProvider>
                                    </ModalProvider>
                            </SnackbarProvider>
                        </CustomizedThemeProvider>
                    </PageProvider>
                </QueryClientProvider>
            </BrowserRouter>
        ),
    ],
};

export default preview;