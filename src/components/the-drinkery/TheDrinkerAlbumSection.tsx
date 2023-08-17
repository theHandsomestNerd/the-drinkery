import React, {FunctionComponent} from 'react'
import {
    Dialog,
    DialogTitle,
    Grid,
    IconButton,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    makeStyles,
    Typography, useMediaQuery,
    useTheme
} from '@material-ui/core'
import useCustomStyles from "../mackenzies-mind/pages/Styles";
import bgImage from "./drinkery-background.jpg"
import TheOtherSideLogo from "./TheOtherSideLogo";
import {DrinkeryAlbumSectionType} from "../BlockContentTypes";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";
import {Theme} from "@material-ui/core/styles";
import {Info} from "@material-ui/icons";

interface IProps {
    email?: string
    sectionData: DrinkeryAlbumSectionType
}

export const useStyles = makeStyles((theme: Theme) => ({
    preroot: {
        minHeight: '1400px',
        // backgroundColor: "black",
        color: "white",
        paddingTop: 64,
        paddingBottom: 64,
        // paddingLeft: -theme.spacing(-5),
    },
    imageList: {
        maxWidth: "800px",
        minWidth: "300px",
        // height: 2000,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}))


const TheDrinkeryAlbumSection: FunctionComponent<IProps> = (props) => {
    const classes = useCustomStyles({bgImage: bgImage})
    const theClasses = useStyles()
    const theme = useTheme()
    const [open, setOpen] = React.useState(false);
    const xsDown = useMediaQuery(theme.breakpoints.down('xs'))

    const [selectedItem, setSelectedItem] = React.useState<any>(null)
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Grid container className={theClasses.preroot}
              style={{color: "white"}} spacing={1}>
            {props.sectionData.isLogo && <Grid container item justifyContent='center'>
                <TheOtherSideLogo isCenter={true}></TheOtherSideLogo>
            </Grid>}
            <Grid item container
                  justifyContent='center' alignItems='center' spacing={2}>
                <Grid container item justifyContent='center'>
                    <Typography variant='h5'>{props.sectionData.contentTitle}</Typography>
                </Grid>
                <Grid item container justifyContent='center'>
                    <ImageList rowHeight={500} className={theClasses.imageList} cols={xsDown?2:3}>
                        {props.sectionData.imageList.map((item, index) => (
                            <ImageListItem key={index} cols={item.cols || 1} onClick={() => {
                                setSelectedItem(item)
                                handleClickOpen()
                            }} style={{cursor: "pointer"}}>
                                <img src={urlFor(item.imageSrc).url() || ""} alt={item.title}/>
                                <ImageListItemBar
                                    title={item.title}
                                    subtitle={<Typography variant='subtitle1' style={{
                                        color: "white",
                                        fontWeight: 400
                                    }}>{item.subtitle}</Typography>}

                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                    <Dialog onClick={()=>handleClose()} onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
                        <img src={urlFor(selectedItem?.imageSrc).url() || ""} alt={selectedItem?.title}/>

                        <DialogTitle id="simple-dialog-title"
                                     style={{
                                         backgroundColor: 'black'
                                     }}
                        ><Typography variant='body2'
                                     style={{color: "white"}} gutterBottom>{selectedItem?.title}</Typography><Typography
                            variant='subtitle1'
                            style={{
                                color: "white",
                                fontWeight: 400
                            }}>{selectedItem?.subtitle}</Typography></DialogTitle>
                    </Dialog>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default TheDrinkeryAlbumSection