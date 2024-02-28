import type {Meta, StoryObj} from '@storybook/react';
import homePageResumeData from "../data/HomePageData";
import Header from "../../components/templates/mackenzies-mind/header/Header";
import getThemeFromSanity from "../../components/customized-theme-provider/getThemeFromSanity";
import DigitalResumeThemeData from "../data/DigitalResumeThemeData";
import {ThemeProvider} from "@mui/material/styles";


const meta: Meta<typeof Header> = {
    title: "Resume/Page Components/Resume Header",
    component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
    args: {
        pageHeader: homePageResumeData.headerContent.content[0].headerMenuRef
    },
    render: ({pageHeader}) =>         <ThemeProvider theme={getThemeFromSanity(DigitalResumeThemeData)}>
        <Header pageHeader={pageHeader}></Header></ThemeProvider>,
};