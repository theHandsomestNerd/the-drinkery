import React, {FunctionComponent, useContext} from 'react'
import {Theme, ThemeProvider} from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import {Grid, Typography} from '@mui/material'
import {ResumeSkillSectionType, ResumeSkillSet} from "../BlockContentTypes";
import useThwCommonStyles from "../../common/sanityIo/ThwCommonStyles";
import {COLORS} from "../../theme/common/ColorPalette";
import CustomizedThemeContext from "../customized-theme-provider/CustomizedThemeContext";
import TheWebsiteTheme from "../../theme/Theme";


export const useStyles = makeStyles((theme: Theme) => ({
    root: {},
}))

interface IProps {
    sectionData: ResumeSkillSectionType
}

const ResumeSkillsSection: FunctionComponent<IProps> = (props: IProps) => {
    // const classes = useStyles()
    const globalClasses = useThwCommonStyles()
    const themeContext = useContext(CustomizedThemeContext)


    return (
        <ThemeProvider theme={TheWebsiteTheme
        }>
            <Grid
                container
                item
                style={{
                    padding: TheWebsiteTheme
                        .spacing(4)
                }}
                className={globalClasses.resumeSection}
            >
                <Grid container item spacing={3}>
                    <Grid item container md={4} alignContent='flex-start' spacing={1}>
                        <Grid item container><Typography component='div' variant='h6'>{props.sectionData.title}</Typography><Typography variant='h6'
                                                                                                 color='primary'
                                                                                                 display='inline'>.</Typography></Grid>
                        <Grid item><Typography variant='body1'>{props.sectionData.introduction}</Typography></Grid>
                    </Grid>
                    <Grid item container md={8} spacing={2} justifyContent='space-between'>
                        {
                            props.sectionData.skillsets?.map((skillset: ResumeSkillSet, index2: number) => {
                                return <Grid key={index2} item container xs={11} sm={6} md={6} alignContent='flex-start'
                                             style={{
                                                 borderBottom: `1px solid ${index2 >= (props.sectionData.skillsets?.length ?? 0) - 2 ? 'transparent' : COLORS.LIGHTGRAY}`
                                             }}>
                                    <Grid container item>
                                        <Typography display='inline'
                                                    variant='body2'>{skillset.title}</Typography>
                                    </Grid>
                                    <Grid container item>
                                        {
                                            skillset.skills?.map((skill, index) => {
                                                return <Typography key={index} display='inline'
                                                                   variant='body1'>{skill.title}{index !== (skillset.skills?.length ?? 0) - 1 ? ',' : ''}&nbsp;</Typography>
                                            })
                                        }
                                    </Grid>
                                </Grid>
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default ResumeSkillsSection