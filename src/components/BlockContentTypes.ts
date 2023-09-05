import {SanityImageSource} from "@sanity/asset-utils";
import {SanityMenuContainer, SanityRef, SanitySlug} from "../common/sanityIo/Types";
import {FileAsset, ImageAsset} from "@sanity/types";

export type HeroContentSectionType = {
    name: string
    title: string
    heroImage: SanityImageAsset
    heroImageAltText: string
    heroImageBackground: SanityImageAsset
    contentTitle: string
    contentBullets: string[]
    ctaButtonTitle: string
    ctaButtonLink: string
}


export type AboutAndaCardSectionType = {
    name: string
    title: string
    cardImage: SanityImageAsset
    cardImageAltText: string
    cardImageBackground: SanityImageAsset
    contentTitle: string
    contentLeft: string
    contentRight: string
    ctaButtonTitle: string
    ctaButtonLink: string
}

export type WhySwitchReasonType = {
    icon: SanityImageAsset
    iconAlt: string
    text: string
}

export type WhySwitchSectionType = {
    _id:string
    imageSrc: SanityImageAsset
    imageAlt: string
    reasons: WhySwitchReasonType[]
}

export type CryptoInYourPocketSectionType = {
    name: string
    title: string
    imageSrc: SanityImageAsset
    imageSrcAltText: string
    bullets: WhySwitchReasonType[]
    ctaHeader1: string
    ctaText: string
    ctaButtonText: string
    ctaButtonLink: string
}

export type SanityImageAsset = SanityImageSource | {
    _type:string,
    asset: {
        _ref:string,
        _type:"reference"
    }
}

// Transform Types
export type ThwHeroContentSectionType = {
    name: string
    title: string
    heroImage: SanityImageAsset
    heroImageAltText: string
    heroImageBackground?: SanityImageAsset
    contentWelcomeMessage: string
    contentTitle: string
    contentText: string
    ctaButtonTitle: string
    ctaButtonLink: string
}


export type ServiceAmenityTypeRef = SanityRef
export type ServiceAmenityType = {
    name: string
    imageSrc: SanityImageAsset
    title: string
    description: string
}


export type ThwPositivePsychologySectionType = {
    name: string
    superTitle:string
    contentTitle: string
    contentText: string
    contentBullets: string[]
    imageSrc: SanityImageAsset
    imageSrcAltText: string
    ctaButtonText: string
    ctaButtonLink: string
}

export type ProprietorAtAGlanceType = {
    serviceName: string
    serviceTitle:string
    sessionList: string[]
    dividerImage: SanityImageAsset
    amenitiesSectionTitle: string
    amenities: string[]
    ctaButtonText: string
    ctaButtonLink: string
}

export type ThwAboutProprietorSectionType = {
    name: string
    proprietorImage: SanityImageAsset
    proprietorName:string
    proprietorTitle: string
    proprietorServices: ProprietorAtAGlanceType
    contentTitle: string
    contentText: string[]
    proprietorImageAltText: string
    proprietorSignatureImage: SanityImageAsset
    proprietorSignatureImageAltText: string
    ctaButtonText: string
    ctaButtonLink: string
}

export type ThwMottoSectionType = {
    name: string
    contentText: string
    parallaxImage: SanityImageAsset
    contentSuperTitle:string
}

export type ThwServiceItemType = {
    name: string
    imageSrc: SanityImageAsset
    imageSrcAltText: string
    contentTitle: string
    contentText: string
    ctaButtonText: string
    ctaButtonLink: string
    learnMoreLink: string
    learnMoreText: string
    educationPageTitle: string
    educationPageSlimHeroImage: SanityImageAsset
    extendedDescriptions: string[]
    benefitsOfServiceTitle:string
    benefitsOfServiceContents:string[]
    benefitsOfServiceBullets:string[]
    serviceAmenities: ServiceAmenityType[]
    slug: SanitySlug
}

export type ThwServiceItemNoRefType = {
    name: string
    imageSrc: SanityImageAsset
    imageSrcAltText: string
    contentTitle: string
    contentText: string
    ctaButtonText: string
    ctaButtonLink: string
    learnMoreLink: string
    learnMoreText: string
    educationPageTitle: string
    educationPageSlimHeroImage: SanityImageAsset
    extendedDescriptions: string[]
    benefitsOfServiceTitle:string
    benefitsOfServiceContents:string[]
    benefitsOfServiceBullets:string[]
    serviceAmenities: ServiceAmenityType[]
    slug: SanitySlug
}


export type ThwServicesSectionType = {
    name: string
    contentTitle: string
    contentPreTitle: string
    contentText: string
    contentTexts: string[]
    servicesList: ThwServiceItemNoRefType[]
}
export type ThwWhyChooseUsSectionType = {
    name: string
    sectionTitle: string
    prosList: SanityRef[]
    imageSrc: SanityImageAsset
    imageSrcAltText: string
    ctaButtonText: string
    ctaButtonLink: string
}

export type ThwWhyChooseUsItemType = {
    name: string
    imageSrc: SanityImageAsset
    imageSrcAltText: string
    contentTitle: string
    contentText: string
}

export type ThwContactUsSectionType = {
    name: string
    bgImageSrc: SanityImageAsset
    lhsTitle: string
    lhsContentText: string
    phone?: string
    email?: string,
    facebook?: string,
    twitter?: string,
    linkedIn?: string,
    youtube?: string,
    rhsTitle:string,
    formSubmitButtonText: string
}


export type ResumeBioSectionType = {
    name?: string
    title?: string
    careerTitle?: string
    introduction?: string
    contactMeButtonTitle?: string
    resumeFileDownloadText?: string
    resumeFile?: FileAsset
    cvFileDownloadText?: string,
    cvFile?: FileAsset
    mainImage?: ImageAsset
}



export type ResumeSkill = {
    name?: string
    title?: string
}
export type ResumeSkillSet = {
    name?: string
    title?: string
    skills?: ResumeSkill[]
}

export type ResumeSkillSectionType = {
    name?: string
    title?: string
    introduction?: string
    skillsets?: ResumeSkillSet[]
}




export type ResumeExperience = {
    name?: string
    title?: string
    companySubtitle?: string
    companyName?: string
    locationCity?: string
    locationState?: string
    dateStart?: Date
    dateEnd?: Date
    description?: string
    skillsUsed?: ResumeSkill[]
}

export type ResumeExperienceSectionType = {
    name?: string
    title?: string
    introduction?: string
    experiences?: ResumeExperience[]
}

export type ResumeEducation = {
    name?: string
    institutionName?: string
    qualification?:string
    locationCity?: string
    locationState?: string
    dateStart?: Date
    dateEnd?: Date
    description?: string
}

export type ResumeEducationSectionType = {
    name?: string
    title?: string
    introduction?: string
    educationExperiences?: ResumeEducation[]
}

export type ResumeFeedback = {
    name?: string
    customerName?: string
    customerTitle?: string
    companyName?: string
    qualification?:string
    quote?: string
    imageSrc?:SanityImageAsset
}

export type ResumeFeedbackSectionType = {
    name?: string
    title?: string
    introduction?: string
    feedbackEntries?: ResumeFeedback[]
}

export type ResumePortfolioItem = {
    name?: string
    title?: string
    coverImage?: SanityImageAsset
    inceptionDate?: Date
    slug?: SanitySlug
    skillsHighlighted?:ResumeSkill[]
    detailTitle?: string
    detailDescription?: string
    linkToProd?: string
    linkToDev?: string
    imageGallery?:SanityImageAsset[]
}

export type ResumePortfolioSectionType = {
    name?: string
    preTitle?:string
    title?: string
    introduction?: string
    portfolioEntries?: ResumePortfolioItem[]
}


export type ResumeContactUsSectionType = {
    name: string
    title?: string
    introduction?: string
    formSubmitButtonText: string
}


export type WebDevHeroContentSectionType = {
    name: string
    title: string
    heroImageBackground?: SanityImageAsset
    contentTitle: string
    contentText: string
    ctaButtonTitle: string
    ctaButtonLink: string
}

export type WebDevStatsCounterSectionType = {
    name: string
    title: string
    stats: {statValue: string, statContent:string}[]
}


export type WebDevAboutUsSectionType = {
    name: string
    imageSrc: SanityImageAsset
    welcomeMessage: string
    contentTitle: string
    contentText: string[]
    ctaButtonText: string
    ctaButtonLink: string
}


export type ServiceItemNoRefType = {
    name: string
    imageSrc: SanityImageAsset
    imageSrcAltText: string
    contentTitle: string
    contentText: string
    ctaButtonText: string
    ctaButtonLink: string
    learnMoreLink: string
    learnMoreText: string
    educationPageTitle: string
    educationPageSlimHeroImage: SanityImageAsset
    extendedDescriptions: string[]
    benefitsOfServiceTitle:string
    benefitsOfServiceContents:string[]
    benefitsOfServiceBullets:string[]
    serviceAmenities: ServiceAmenityType[]
    slug: SanitySlug
}

export type PortfolioSectionType = {
    name: string
    contentTitle: string
    contentPreTitle: string
    contentText: string
    contentTexts: string[]
    servicesList: ServiceItemNoRefType[]
}

export type WebDevTestimonialsType = {
    name?: string
    customerName?: string
    customerTitle?: string
    companyName?: string
    qualification?:string
    quoteSummary?: string
    quote?: string
    imageSrc?:SanityImageAsset
}

export type WebDevTestimonialsSectionType = {
    name?: string
    preTitle?: string
    backgroundImage?: SanityImageAsset
    title?: string
    introduction?: string
    feedbackEntries?: WebDevTestimonialsType[]
}


export type HowItWorksStepNoRefType = {
    title: string
    slug: SanitySlug
    content: string
    imageSrc: SanityImageAsset
    isEnabled: boolean
    contentText: string
    contentTexts: string[]
    learnMoreLink: string
    learnMoreText: string
}
export type HowItWorksSectionType = {
    name: string
    contentTitle: string
    contentPreTitle: string
    contentTexts: string[]
    steps: HowItWorksStepNoRefType[]
}

export type DevelopmentHeaderSectionType = {
    name:string
    headerMenuRef: SanityMenuContainer
}
export type HeaderSectionType = {
    name:string
    headerMenuRef: SanityMenuContainer
}
export type DevelopmentFooterSectionType = {
    name:string
    footerMenuRef: SanityMenuContainer
}
export type FooterSectionType = {
    name:string
    footerMenuRef: SanityMenuContainer
}

export type DrinkerySpecialsSectionType = {
    name: string
    contentTitle: string
    contentText: string
    disclaimer: string
    subTitle: string
    theSpecials: DrinkerySpecialType[]
    imageSrc: SanityImageAsset
    imageSrcAltText: string
}

export type TeamSectionType = {
    name: string
    contentPretitle: string
    contentTitle: string
    contentTexts: string[],
    teamList: TeamMember[],
}

export type DrinkeryOtherSideSectionType = {
    name: string
    contentPretitle: string
    contentTitle: string
    isLink: boolean
    isShowMenu: boolean
    description: string
    isLogo: boolean
    theLiquors: string[]
    // contentTexts: string[],
    // teamList: TeamMember[],
}
export type DrinkeryPhotoType = {
    imageSrc: SanityImageAsset
    cols: string
    title: string
    subtitle: string
}

export type DrinkeryAlbumSectionType = {
    name: string
    isLogo:boolean
    contentPretitle: string
    contentTitle: string
    contentText: string
    imageList: DrinkeryPhotoType[]
    // contentTexts: string[],
    // teamList: TeamMember[],
}

export type TeamMember =  {
    image: SanityImageAsset,
    title: string,
    firstName: string,
    lastName: string,
    homeCity:string,
    homeState:string,
    hobby:string,
    faveDrinkToMake:string,
}

export type DrinkerySpecialType = {
    name: string
    title: string
    content: string
    imageSrc: SanityImageAsset
}