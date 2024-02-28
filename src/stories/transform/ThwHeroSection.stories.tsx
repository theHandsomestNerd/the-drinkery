import type {Meta, StoryObj} from '@storybook/react';
import ThwHeroContentSection from "../../components/templates/transform-hw/ThwHeroContentSection";
import ThwHeroContentSectionData from "../data/ThwHeroContentSectionData";
import TransformHWTheme from "../../theme/TransformHWTheme";
import {ThemeProvider} from "@mui/material/styles";


const meta: Meta<typeof ThwHeroContentSection> = {
    title:"THW/Section/THW Hero Section",
    component: ThwHeroContentSection,
};

export default meta;
type Story = StoryObj<typeof ThwHeroContentSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
    render: () => <ThemeProvider theme={TransformHWTheme}><ThwHeroContentSection sectionData={ThwHeroContentSectionData}></ThwHeroContentSection></ThemeProvider>,
};
