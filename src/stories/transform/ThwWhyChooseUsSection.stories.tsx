import type {Meta, StoryObj} from '@storybook/react';
import PageProvider from "../../components/page-context/PageProvider";
import AmenityProvider from "../../components/amenity-context/AmenityProvider";
import ThwHomePageData from "../data/ThwHomePageData";
import ThwWhyChooseUsSection from "../../components/templates/transform-hw/ThwWhyChooseUsSection";
import thwWhyChooseUsData from "../data/ThwWhyChooseUsData";
import TransformHWTheme from "../../theme/TransformHWTheme";
import {ThemeProvider} from "@mui/material/styles";


const meta: Meta<typeof ThwWhyChooseUsSection> = {
    title: "THW/Section/THW Why Choose Us Section",
    component: ThwWhyChooseUsSection,
};

export default meta;
type Story = StoryObj<typeof ThwWhyChooseUsSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
    args: {
        sectionData: thwWhyChooseUsData
    },
    render: ({sectionData}) => <ThemeProvider theme={TransformHWTheme}><PageProvider page={ThwHomePageData}>
        <AmenityProvider>
            <ThwWhyChooseUsSection
                sectionData={sectionData}></ThwWhyChooseUsSection>
        </AmenityProvider>
    </PageProvider></ThemeProvider>,
};
