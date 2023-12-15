"use strict";(self.webpackChunkthe_handsomestnerd_internal=self.webpackChunkthe_handsomestnerd_internal||[]).push([[1460],{"./src/stories/web-dev-company/WebDevHeroSection.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:function(){return Primary},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return WebDevHeroSection_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),cmsStaticPagesClient=__webpack_require__("./src/components/block-content-ui/static-pages/cmsStaticPagesClient.ts"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),Styles=__webpack_require__("./src/components/templates/mackenzies-mind/pages/Styles.tsx"),FirebaseAnalyticsClient=__webpack_require__("./src/common/firebase/FirebaseAnalyticsClient.tsx"),PageContext=__webpack_require__("./src/components/page-context/PageContext.tsx"),makeStyles=__webpack_require__("./node_modules/@mui/styles/makeStyles/makeStyles.js"),useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),Grid=__webpack_require__("./node_modules/@mui/material/Grid/Grid.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),useStyles=(0,makeStyles.Z)((function(theme){return{marketingBackground:function marketingBackground(props){return{backgroundRepeat:"no-repeat",backgroundImage:"url('".concat(props.heroBaseImageUrl,"')"),backgroundSize:"cover",backgroundPosition:"center",minHeight:"521px",position:"relative"}},contentSection:{marginTop:"16px",backgroundColor:"transparent"},contentBullets:{}}})),WebDevHeroContentSection=function WebDevHeroContentSection(props){var _urlFor$url,_props$sectionData$he,_theme$typography$fon,_props$sectionData$ct,classParameters={heroBaseImageUrl:null!==(_urlFor$url=(0,cmsStaticPagesClient.u)(null!==(_props$sectionData$he=props.sectionData.heroImageBackground)&&void 0!==_props$sectionData$he?_props$sectionData$he:"").url())&&void 0!==_urlFor$url?_urlFor$url:""},pageContext=(0,react.useContext)(PageContext.Z),theme=(0,useTheme.Z)(),classes=useStyles(classParameters),globalClasses=(0,Styles.Z)({});return(0,jsx_runtime.jsxs)(Grid.ZP,{container:!0,item:!0,className:classes.marketingBackground,justifyContent:"center",children:[(0,jsx_runtime.jsx)(Grid.ZP,{container:!0,item:!0,className:(0,clsx_m.Z)(globalClasses.fullSection,globalClasses.fullSectionOverlay)}),(0,jsx_runtime.jsx)(Grid.ZP,{container:!0,direction:"column",style:{zIndex:2},xs:11,justifyContent:"center",children:(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,children:(0,jsx_runtime.jsx)(Grid.ZP,{container:!0,className:classes.contentSection,item:!0,xs:12,justifyContent:"flex-start",alignContent:"center",alignItems:"center",children:(0,jsx_runtime.jsxs)(Grid.ZP,{container:!0,spacing:2,xs:8,children:[(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:8,container:!0,children:(0,jsx_runtime.jsx)(Typography.Z,{variant:"h2",color:"textPrimary",children:props.sectionData.contentTitle})}),(0,jsx_runtime.jsx)(Grid.ZP,{container:!0,item:!0,xs:8,children:(0,jsx_runtime.jsx)(Typography.Z,{variant:"body1",sx:{fontFamily:null===(_theme$typography$fon=theme.typography.fontFamily)||void 0===_theme$typography$fon?void 0:_theme$typography$fon.split(",")[1]},color:"textPrimary",children:props.sectionData.contentText})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,container:!0,children:(0,jsx_runtime.jsx)(Button.Z,{color:"primary",variant:"outlined",onClick:function onClick(){FirebaseAnalyticsClient.Z.ctaClick("hero-section",props.sectionData.ctaButtonTitle,pageContext.analyticsId)},href:null!==(_props$sectionData$ct=props.sectionData.ctaButtonLink)&&void 0!==_props$sectionData$ct?_props$sectionData$ct:"",children:(0,jsx_runtime.jsx)(Grid.ZP,{container:!0,alignItems:"center",spacing:1,children:(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,children:(0,jsx_runtime.jsx)(Typography.Z,{variant:"button",children:props.sectionData.ctaButtonTitle})})})})})]})})})})]})},web_dev_site_WebDevHeroContentSection=WebDevHeroContentSection;try{useStyles.displayName="useStyles",useStyles.__docgenInfo={description:"",displayName:"useStyles",props:{heroBaseImageUrl:{defaultValue:null,description:"",name:"heroBaseImageUrl",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/templates/web-dev-site/WebDevHeroContentSection.tsx#useStyles"]={docgenInfo:useStyles.__docgenInfo,name:"useStyles",path:"src/components/templates/web-dev-site/WebDevHeroContentSection.tsx#useStyles"})}catch(__react_docgen_typescript_loader_error){}try{WebDevHeroContentSection.displayName="WebDevHeroContentSection",WebDevHeroContentSection.__docgenInfo={description:"",displayName:"WebDevHeroContentSection",props:{sectionData:{defaultValue:null,description:"",name:"sectionData",required:!0,type:{name:"WebDevHeroContentSectionType"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/templates/web-dev-site/WebDevHeroContentSection.tsx#WebDevHeroContentSection"]={docgenInfo:WebDevHeroContentSection.__docgenInfo,name:"WebDevHeroContentSection",path:"src/components/templates/web-dev-site/WebDevHeroContentSection.tsx#WebDevHeroContentSection"})}catch(__react_docgen_typescript_loader_error){}var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,WebDevHeroContentSectionData={ctaButtonLink:"",title:"Quality Digital Services You Really Need!",name:"Web Dev Site Hero Section",ctaButtonTitle:"Explore our Services",contentText:"We build and transform businesses by launching market-leading digital products, platforms, and experiences that fuel their growth.",contentTitle:"Quality Digital Services You Really Need!",heroImageBackground:{_type:"image",asset:{_ref:"image-8585130a64c7060d06a5acc0726b9f7aaf4f9b5f-6000x4000-jpg",_type:"reference"}}},ThemeProvider=__webpack_require__("./node_modules/@mui/material/styles/ThemeProvider.js"),getThemeFromSanity=__webpack_require__("./src/components/customized-theme-provider/getThemeFromSanity.ts"),WebDevThemeData=__webpack_require__("./src/stories/data/WebDevThemeData.ts"),WebDevHeroSection_stories={title:"Web Development/Section/Web Dev Hero Section",component:web_dev_site_WebDevHeroContentSection},Primary={render:function render(){return(0,jsx_runtime.jsx)(ThemeProvider.Z,{theme:(0,getThemeFromSanity.Z)(WebDevThemeData.Z),children:(0,jsx_runtime.jsx)(web_dev_site_WebDevHeroContentSection,{sectionData:WebDevHeroContentSectionData})})}};Primary.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Primary.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  render: () => <ThemeProvider theme={getThemeFromSanity(WebDevThemeData)}>\n    <WebDevHeroContentSection sectionData={WebDevHeroSectionData}></WebDevHeroContentSection>\n    </ThemeProvider>\n}"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})});var __namedExportsOrder=["Primary"]},"./src/components/templates/mackenzies-mind/pages/Styles.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _theme_common_ColorPalette__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/theme/common/ColorPalette.ts"),useCustomStyles=(0,__webpack_require__("./node_modules/@mui/styles/makeStyles/makeStyles.js").Z)((function(theme){var _theme$palette,_theme$palette$backgr;return{fullscreen:{width:"calc(100vw)",height:"calc(100vh)",position:"relative"},fullscreenPlus:{width:"calc(100vw)",height:"calc(100vh)",position:"relative"},endAdornedInput:{"& .MuiFilledInput-adornedEnd":{border:"1px solid black !important",paddingRight:0,borderTopRightRadius:"4px",borderBottomRightRadius:"4px"},"& .MuiOutlinedInput-adornedEnd":{border:"1px solid black !important",paddingRight:0,borderTopRightRadius:"4px",borderBottomRightRadius:"4px"},"& .MuiInputBase-input":{borderRightWidth:0,"&.Mui-hover":{borderBottomColor:"black !important"}},"& .MuiButton-containedSecondary":{border:0,borderLeft:"1px solid black !important"}},spacer:{marginBottom:"40px"},fullscreenOverlay:{position:"absolute",backgroundColor:"rgba(0, 0, 0, .5)"},fullscreenWhiteOverlay:{position:"absolute",backgroundColor:"rgba(255, 255, 255, 0.3)"},fullScreenImage:{position:"relative",backgroundImage:function backgroundImage(props){return"url(".concat(props.bgImage,")")},backgroundSize:"cover",backgroundPosition:"center",backgroundColor:null==theme||null===(_theme$palette=theme.palette)||void 0===_theme$palette||null===(_theme$palette$backgr=_theme$palette.background)||void 0===_theme$palette$backgr?void 0:_theme$palette$backgr.default},fullSection:{width:"calc(100vw)",height:"100%",position:"relative",zIndex:0},fullSectionOverlay:{position:"absolute",backgroundColor:"rgba(0, 0, 0, .4)",minHeight:"512px",height:"100%",width:"100%",zIndex:1},fullContainer:{width:"100%",height:"100%"},resumeSection:{borderBottom:"1px solid ".concat(_theme_common_ColorPalette__WEBPACK_IMPORTED_MODULE_0__.D.LIGHTGRAY)}}}));__webpack_exports__.Z=useCustomStyles},"./src/stories/data/WebDevThemeData.ts":function(__unused_webpack_module,__webpack_exports__){__webpack_exports__.Z={typography:{fontFamily:["Elaine Sans","Raleway"],fontFaces:[{_type:"MuiFontFace",name:"h1",letterSpacing:"-.01em",fontSize:"70px",lineHeight:"1",_key:"9961159018eb",fontStyle:"normal",fontWeight:"bold"},{_key:"fd80eff73602",fontStyle:"normal",fontWeight:"700",_type:"MuiFontFace",name:"h2",letterSpacing:".02em",fontSize:"53px",lineHeight:"1"},{letterSpacing:".01em",fontSize:"32px",lineHeight:"1.4",_key:"b3c7024c6833",fontStyle:"normal",fontWeight:"600",_type:"MuiFontFace",name:"h3"},{fontStyle:"normal",fontWeight:"bold",_type:"MuiFontFace",name:"h5",fontSize:"28px",lineHeight:"1"},{name:"h6",fontSize:"24px",lineHeight:"1",_key:"8dbcd01d5655",fontStyle:"normal",fontWeight:"bold",_type:"MuiFontFace"},{name:"body1",letterSpacing:"-.02em",fontSize:"14.5px",lineHeight:"1.2",_key:"38e418fa8308",fontStyle:"normal",fontWeight:"400",_type:"MuiFontFace"},{_key:"bbdf7c3e1d9e57c73a09b816ca2bc268",fontStyle:"normal",fontWeight:"550",_type:"MuiFontFace",name:"body2",letterSpacing:"0em",fontSize:"18px",lineHeight:"1.5"},{lineHeight:"1",_key:"0c952d423ebf97d7141c9de4718955e7",fontStyle:"normal",fontWeight:"700",_type:"MuiFontFace",name:"button",letterSpacing:"-.03em",fontSize:"19px"},{fontStyle:"normal",fontWeight:"750",_type:"MuiFontFace",name:"subtitle1",letterSpacing:"-.03em",fontSize:"14px",lineHeight:"1",_key:"cf52af782364f0f82d1a43143f1c9fc5"},{letterSpacing:".20em",lineHeight:"1",textTransform:"uppercase",_type:"MuiFontFace",fontSize:"14px",fontWeight:"750",name:"subtitle2",_key:"e74f48549e61e7307b111a1118423263",fontStyle:"normal"}]},breakpoints:{xl:1320,md:980,sm:640,lg:1160,xs:0},title:"Web Development site",appBarHeight:105,colorPalette:{primaryColor:"WHITESMOKE",secondaryTextColor:"LIGHT_WHITE",secondaryColor:"PURPLE",disabledTextColor:"DISABLED_GRAY",defaultBackground:"ALMOST_BLACK",defaultPaperBackgroundColor:"ALMOST_BLACK",primaryTextColor:"WHITESMOKE"},slug:{current:"web-development-site",_type:"slug"}}},"./node_modules/clsx/dist/clsx.m.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_exports__.Z=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}}}]);