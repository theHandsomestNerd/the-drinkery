"use strict";(self.webpackChunkthe_handsomestnerd_internal=self.webpackChunkthe_handsomestnerd_internal||[]).push([[1890],{"./src/stories/web-dev-company/WebDevPricingSection.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:function(){return Primary},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return WebDevPricingSection_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),ThemeProvider=__webpack_require__("./node_modules/@mui/material/styles/ThemeProvider.js"),getThemeFromSanity=__webpack_require__("./src/components/customized-theme-provider/getThemeFromSanity.ts"),WebDevThemeData=__webpack_require__("./src/stories/data/WebDevThemeData.ts"),makeStyles=__webpack_require__("./node_modules/@mui/styles/makeStyles/makeStyles.js"),Grid=__webpack_require__("./node_modules/@mui/material/Grid/Grid.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),ColorPalette=__webpack_require__("./src/theme/common/ColorPalette.ts"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),PageContext=__webpack_require__("./src/components/page-context/PageContext.tsx"),FirebaseAnalyticsClient=__webpack_require__("./src/common/firebase/FirebaseAnalyticsClient.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),useStyles=(0,makeStyles.Z)((function(theme){return{root:{padding:theme.spacing(4)}}})),COLOR_ROTATION=["#cd3647","#343656","#333784"],WebDevPricingPlan=function WebDevPricingPlan(props){var _props$index,_props$step$contentTe,pageContext=(0,react.useContext)(PageContext.Z),classes=useStyles(),LearnMoreButton=function LearnMoreButton(){var _props$step;return(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,container:!0,sm:8,children:props.step.learnMoreText&&(null===(_props$step=props.step)||void 0===_props$step?void 0:_props$step.learnMoreText.length)>0&&(0,jsx_runtime.jsx)(Button.Z,{fullWidth:!0,sx:{borderRadius:"32px"},onClick:function onClick(){var _props$step$slug$curr,_props$step$slug,_props$step$learnMore;return FirebaseAnalyticsClient.Z.ctaClick(null!==(_props$step$slug$curr=null===(_props$step$slug=props.step.slug)||void 0===_props$step$slug?void 0:_props$step$slug.current)&&void 0!==_props$step$slug$curr?_props$step$slug$curr:"",null!==(_props$step$learnMore=props.step.learnMoreText)&&void 0!==_props$step$learnMore?_props$step$learnMore:"",pageContext.analyticsId)},color:"primary",href:props.step.learnMoreLink,variant:"outlined",children:(0,jsx_runtime.jsx)(Typography.Z,{variant:"button",noWrap:!0,children:props.step.learnMoreText})})})};return(0,jsx_runtime.jsx)(Grid.ZP,{className:classes.root,container:!0,item:!0,xs:12,sm:12,md:6,style:{backgroundColor:COLOR_ROTATION[(null!==(_props$index=props.index)&&void 0!==_props$index?_props$index:0)%3]},children:(0,jsx_runtime.jsx)(Grid.ZP,{container:!0,item:!0,direction:"column",children:(0,jsx_runtime.jsxs)(Grid.ZP,{container:!0,item:!0,spacing:2,children:[(0,jsx_runtime.jsxs)(Grid.ZP,{container:!0,item:!0,alignContent:"center",justifyContent:"space-between",alignItems:"center",wrap:"nowrap",children:[(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:6,children:(0,jsx_runtime.jsx)(Typography.Z,{variant:"h3",style:{fontFamily:"Elaine Sans"},color:"primary",children:props.step.cost})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,children:(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:6,children:(0,jsx_runtime.jsx)(Typography.Z,{variant:"h1",style:{fontFamily:"Elaine Sans",color:"rgba(255,255,255,.3)"},color:"primary",children:props.step.title})})})]}),(0,jsx_runtime.jsx)(Grid.ZP,{container:!0,item:!0,children:null===(_props$step$contentTe=props.step.contentTexts)||void 0===_props$step$contentTe?void 0:_props$step$contentTe.map((function(textContent){return(0,jsx_runtime.jsx)(Grid.ZP,{container:!0,item:!0,sx:{borderLeft:"1px solid whitesmoke",marginBottom:"8px",paddingLeft:"8px"},children:(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,container:!0,children:(0,jsx_runtime.jsx)(Typography.Z,{color:"textPrimary",fontFamily:"Raleway",children:textContent})})})}))}),(0,jsx_runtime.jsx)(Grid.ZP,{container:!0,item:!0,children:!props.hideLearnMoreButton&&(0,jsx_runtime.jsx)(LearnMoreButton,{})})]})})},(0,v4.Z)())},web_dev_site_WebDevPricingPlan=WebDevPricingPlan;try{useStyles.displayName="useStyles",useStyles.__docgenInfo={description:"",displayName:"useStyles",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/templates/web-dev-site/WebDevPricingPlan.tsx#useStyles"]={docgenInfo:useStyles.__docgenInfo,name:"useStyles",path:"src/components/templates/web-dev-site/WebDevPricingPlan.tsx#useStyles"})}catch(__react_docgen_typescript_loader_error){}try{WebDevPricingPlan.displayName="WebDevPricingPlan",WebDevPricingPlan.__docgenInfo={description:"",displayName:"WebDevPricingPlan",props:{step:{defaultValue:null,description:"",name:"step",required:!0,type:{name:"PricingPlanNoRefType"}},hideLearnMoreButton:{defaultValue:null,description:"",name:"hideLearnMoreButton",required:!1,type:{name:"boolean"}},hideCtaButton:{defaultValue:null,description:"",name:"hideCtaButton",required:!1,type:{name:"boolean"}},source:{defaultValue:null,description:"",name:"source",required:!1,type:{name:"string"}},showAmenities:{defaultValue:null,description:"",name:"showAmenities",required:!1,type:{name:"boolean"}},index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/templates/web-dev-site/WebDevPricingPlan.tsx#WebDevPricingPlan"]={docgenInfo:WebDevPricingPlan.__docgenInfo,name:"WebDevPricingPlan",path:"src/components/templates/web-dev-site/WebDevPricingPlan.tsx#WebDevPricingPlan"})}catch(__react_docgen_typescript_loader_error){}var WebDevPricingSection_useStyles=(0,makeStyles.Z)((function(theme){return{root:{padding:theme.spacing(4,0,8,0),minHeight:"max-content",backgroundColor:"#131313"},contentBottom:{border:"1px solid ".concat(theme.palette.secondary.main),padding:"20px"}}})),WebDevPricingSection=function WebDevPricingSection(props){var _props$sectionData,_props$sectionData2,_props$sectionData3,_props$sectionData3$c,_props$sectionData4,_props$sectionData4$p,classes=WebDevPricingSection_useStyles();return(0,jsx_runtime.jsx)(Grid.ZP,{container:!0,item:!0,className:classes.root,xs:12,justifyContent:"center",children:(0,jsx_runtime.jsxs)(Grid.ZP,{container:!0,item:!0,spacing:2,xs:11,children:[(0,jsx_runtime.jsxs)(Grid.ZP,{container:!0,item:!0,children:[(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,container:!0,children:(0,jsx_runtime.jsx)(Typography.Z,{variant:"subtitle2",color:"secondary",style:{color:ColorPalette.D.AQUA},children:null===(_props$sectionData=props.sectionData)||void 0===_props$sectionData?void 0:_props$sectionData.contentPreTitle})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,container:!0,wrap:"nowrap",children:(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,children:(0,jsx_runtime.jsx)(Typography.Z,{color:"primary",variant:"h2",align:"center",style:{fontFamily:"Elaine Sans"},display:"inline",children:null===(_props$sectionData2=props.sectionData)||void 0===_props$sectionData2?void 0:_props$sectionData2.contentTitle})})})]}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,container:!0,children:null===(_props$sectionData3=props.sectionData)||void 0===_props$sectionData3||null===(_props$sectionData3$c=_props$sectionData3.contentTexts)||void 0===_props$sectionData3$c?void 0:_props$sectionData3$c.map((function(segment,index){return(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,children:(0,jsx_runtime.jsx)(Typography.Z,{variant:"body1",color:"primary",gutterBottom:!0,fontFamily:"Raleway",children:segment})},index)}))}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,container:!0,children:null===(_props$sectionData4=props.sectionData)||void 0===_props$sectionData4||null===(_props$sectionData4$p=_props$sectionData4.plans)||void 0===_props$sectionData4$p?void 0:_props$sectionData4$p.map((function(plan,index){return(0,jsx_runtime.jsx)(web_dev_site_WebDevPricingPlan,{showAmenities:!0,index:index,step:plan},index)}))})]})})},web_dev_site_WebDevPricingSection=WebDevPricingSection;try{WebDevPricingSection_useStyles.displayName="useStyles",WebDevPricingSection_useStyles.__docgenInfo={description:"",displayName:"useStyles",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/templates/web-dev-site/WebDevPricingSection.tsx#useStyles"]={docgenInfo:WebDevPricingSection_useStyles.__docgenInfo,name:"useStyles",path:"src/components/templates/web-dev-site/WebDevPricingSection.tsx#useStyles"})}catch(__react_docgen_typescript_loader_error){}try{WebDevPricingSection.displayName="WebDevPricingSection",WebDevPricingSection.__docgenInfo={description:"",displayName:"WebDevPricingSection",props:{sectionData:{defaultValue:null,description:"",name:"sectionData",required:!0,type:{name:"PricingSectionType"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/templates/web-dev-site/WebDevPricingSection.tsx#WebDevPricingSection"]={docgenInfo:WebDevPricingSection.__docgenInfo,name:"WebDevPricingSection",path:"src/components/templates/web-dev-site/WebDevPricingSection.tsx#WebDevPricingSection"})}catch(__react_docgen_typescript_loader_error){}var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,WebDevPricingSection_stories={title:"Web Development/Section/Web Dev Pricing Section",component:web_dev_site_WebDevPricingSection},Primary={args:{sectionData:{plans:[{cost:"$80/month",learnMoreText:"Inquire",title:"Basic",contentTexts:["4 hours of development time\n","minor bug fixes","48 hr response time"],slug:{current:"basic-pricing-plan",_type:"slug"},isEnabled:!0,name:"Basic"},{title:"Silver",contentTexts:["6 hrs of development time","minor bug fixes","48 hr response time",""],cost:"$110/month",learnMoreText:"Inquire",learnMoreLink:"Inquire",slug:{current:"silver-pricing-plan",_type:"slug"},name:"Silver"},{cost:"$180/month",learnMoreText:"Inquire",title:"Gold",slug:{current:"gold-pricing-plan",_type:"slug"},isEnabled:!0,name:"Gold",contentTexts:["10 hrs of development time","features and bug fixes","24 hour response time"]}],contentTitle:"Plans",contentTexts:["These plans can only be booked as add-ons to a web development project. For a complete list of pricing please go to the quote page. "],name:"thn pricing",contentPreTitle:"Maintenance"}},render:function render(_ref){var sectionData=_ref.sectionData;return(0,jsx_runtime.jsx)(ThemeProvider.Z,{theme:(0,getThemeFromSanity.Z)(WebDevThemeData.Z),children:(0,jsx_runtime.jsx)(web_dev_site_WebDevPricingSection,{sectionData:sectionData})})}};Primary.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Primary.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    sectionData: WebDevPricingSectionData\n  },\n  render: ({\n    sectionData\n  }) => <ThemeProvider theme={getThemeFromSanity(WebDevThemeData)}>\n    <WebDevPricingSection sectionData={sectionData}></WebDevPricingSection>\n    </ThemeProvider>\n}"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})});var __namedExportsOrder=["Primary"]},"./src/stories/data/WebDevThemeData.ts":function(__unused_webpack_module,__webpack_exports__){__webpack_exports__.Z={typography:{fontFamily:["Elaine Sans","Raleway"],fontFaces:[{_type:"MuiFontFace",name:"h1",letterSpacing:"-.01em",fontSize:"70px",lineHeight:"1",_key:"9961159018eb",fontStyle:"normal",fontWeight:"bold"},{_key:"fd80eff73602",fontStyle:"normal",fontWeight:"700",_type:"MuiFontFace",name:"h2",letterSpacing:".02em",fontSize:"53px",lineHeight:"1"},{letterSpacing:".01em",fontSize:"32px",lineHeight:"1.4",_key:"b3c7024c6833",fontStyle:"normal",fontWeight:"600",_type:"MuiFontFace",name:"h3"},{fontStyle:"normal",fontWeight:"bold",_type:"MuiFontFace",name:"h5",fontSize:"28px",lineHeight:"1"},{name:"h6",fontSize:"24px",lineHeight:"1",_key:"8dbcd01d5655",fontStyle:"normal",fontWeight:"bold",_type:"MuiFontFace"},{name:"body1",letterSpacing:"-.02em",fontSize:"14.5px",lineHeight:"1.2",_key:"38e418fa8308",fontStyle:"normal",fontWeight:"400",_type:"MuiFontFace"},{_key:"bbdf7c3e1d9e57c73a09b816ca2bc268",fontStyle:"normal",fontWeight:"550",_type:"MuiFontFace",name:"body2",letterSpacing:"0em",fontSize:"18px",lineHeight:"1.5"},{lineHeight:"1",_key:"0c952d423ebf97d7141c9de4718955e7",fontStyle:"normal",fontWeight:"700",_type:"MuiFontFace",name:"button",letterSpacing:"-.03em",fontSize:"19px"},{fontStyle:"normal",fontWeight:"750",_type:"MuiFontFace",name:"subtitle1",letterSpacing:"-.03em",fontSize:"14px",lineHeight:"1",_key:"cf52af782364f0f82d1a43143f1c9fc5"},{letterSpacing:".20em",lineHeight:"1",textTransform:"uppercase",_type:"MuiFontFace",fontSize:"14px",fontWeight:"750",name:"subtitle2",_key:"e74f48549e61e7307b111a1118423263",fontStyle:"normal"}]},breakpoints:{xl:1320,md:980,sm:640,lg:1160,xs:0},title:"Web Development site",appBarHeight:105,colorPalette:{primaryColor:"WHITESMOKE",secondaryTextColor:"LIGHT_WHITE",secondaryColor:"PURPLE",disabledTextColor:"DISABLED_GRAY",defaultBackground:"ALMOST_BLACK",defaultPaperBackgroundColor:"ALMOST_BLACK",primaryTextColor:"WHITESMOKE"},slug:{current:"web-development-site",_type:"slug"}}}}]);