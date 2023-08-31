import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Grid} from '@material-ui/core'
import FooterMenuContainer from './FooterMenuContainer'
import {SanityMenuContainer, SanityTransformHwHomePage} from "../../../common/sanityIo/Types";
import DigitalResumeTheme, {COLORS} from "../../../theme/DigitalResumeTheme";
import {FooterSectionType} from "../../BlockContentTypes";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: "white",
    // color: '#FDF3EB',
    marginTop: theme.spacing(1),
    // zIndex: 1000,
    padding: theme.spacing(4),
    '& .MuiFormLabel-root': {
      color: 'white',
    },
  },
}))

interface IProps {
  pageFooter?: SanityMenuContainer
  homePage?:SanityTransformHwHomePage

  footerMenuSlug?:string
  updateIsLoading?: (value:boolean) => void
}

const Footer: FunctionComponent<IProps> = (props:IProps) => {
  const classes = useStyles(DigitalResumeTheme)

  return (
    <Grid container className={classes.root}>
      <Grid container justifyContent="flex-start">
        <Grid item xs={12}>
          {props.pageFooter && <FooterMenuContainer homePage={props.homePage} pageFooterMenu={props.pageFooter} updateIsLoading={props.updateIsLoading}
                                />}
        </Grid>
      </Grid>
    </Grid>

  )
}

export default Footer