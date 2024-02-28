import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk'
import schemas from './schemas/schema'
import {visionTool} from "@sanity/vision";

export default defineConfig({
    title: "The Drinkery",
    projectId: "fd7w1ij4",
    dataset: "development",
    plugins: [deskTool({}), visionTool()],
    schema: {
        types: schemas,
    },
});