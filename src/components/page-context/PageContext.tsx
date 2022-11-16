import React from 'react';
import {SanityMenuContainer, SanityTransformHwHomePage} from "../../common/sanityIo/Types";
import {ThwServiceItemNoRefType} from "../BlockContentTypes";

export type PageContextType = {
    page?: SanityTransformHwHomePage
    slug?: string
    pageHeader?: SanityMenuContainer
    pageFooter?: SanityMenuContainer
    isPageLoading?: boolean
    isPageError?: boolean
    isRefetching?: boolean
    allServices?: ThwServiceItemNoRefType[]
    getOtherServices?: (slug:string)=>ThwServiceItemNoRefType[]
    fetchPage?: (slug:string)=>void
};

const PageContext = React.createContext<PageContextType>({});

export default PageContext;
