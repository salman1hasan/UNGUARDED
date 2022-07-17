import React, {forwardRef} from 'react'
import { Typography, makeStyles,withStyles, styled, Grid, Button, IconButton, Slider, Tooltip, Popover} from '@material-ui/core';

import BookmarkIcon from "@material-ui/icons/Bookmark";
import FastRewindIcon from '@material-ui/icons/FastRewind';
import FastForwardIcon from '@material-ui/icons/FastForward';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOff from '@material-ui/icons/VolumeOff';
import FullScreenIcon from '@material-ui/icons/Fullscreen';

import "./Playercontrols.css";


const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);



const OrangeTextTypography = withStyles({
  root: {
    color: "#f98500"
  }
})(Typography);

const useStyles = makeStyles({

  controlsWrapper: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 6,
      background: "rgba(0,0,0,0.3)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      zindex: 1,
  },
  controlIcons:{
      color:"#f98500",
      fontSize:30,
      transform:"scale(0.9)","&:hover":{color:'#fff', transform:"scale(1)",
    },
  },
  bottomIcons:{
      color:"##FFA500",
      "&:hover":{
          color:"#FFA500"
      },
  },
  volumeSlider: {
      width: 100,
      color:"#f98500",    
  },
  });

  function ValueLabelComponent(props) {
      const { children, value } = props;
    
      return (
        <Tooltip enterTouchDelay={0} placement="top" title={value}>
          {children}
        </Tooltip>
      );
    }
  

const PrettoSlider = styled(Slider)({
  color: '#f98500',
  height: 0,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 15,
    width: 15,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});


export default forwardRef(({onPlayPause, playing, onRewind, onFastForward, muted, onMute, onVolumeChange,  onVolumeSeekUp, volume, playbackRate,onPlaybackRateChange, onToggleFullScreen, played, onSeek, onSeekMouseDown, onSeekMouseUp,elapsedTime,totalDuration, onChangeDisplayFormat, onBookmark},ref) => {
  const classes= useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  
  const open = Boolean(anchorEl);
  const id = open ? 'playbackrate-popover' : undefined;

  return (

    <div className= {classes.controlsWrapper} ref={ref}>
    <Grid container direction="row" alignItems="center" justify="space-between" style={{padding:16}}>
        <Grid item>
            <Typography variant="h5" style={{color:"#fff"}}>Video Title </Typography>
        </Grid>
        <Grid item>
            <Button 
            onClick={onBookmark}
            class="button5"
            startIcon={<BookmarkIcon/>}
            >
            BOOKMARK
            </Button>
        </Grid>
    </Grid>


<Grid container direction="row" alignItems="center" justify="center">
    <IconButton onClick={onRewind} className={classes.controlIcons} aria-label="reqind">
        <FastRewindIcon fontSize="inherit"/>
    </IconButton>

    <IconButton onClick={onPlayPause} className={classes.controlIcons} aria-label="reqind">
       {playing? (<PauseIcon fontSize="inherit"/> ) : ( <PlayArrowIcon fontSize="inherit"/>)}
    </IconButton>

    <IconButton onClick={onFastForward} className={classes.controlIcons} aria-label="reqind">
        <FastForwardIcon fontSize="inherit"/>
    </IconButton>
   </Grid>

   {/* bottom controls */}
   <Grid container direction="row" justifyContent="space-between" alignItems="Center" style={{padding:16}}>
   
   <Grid item xs={12}>
   <PrettoSlider min={0} max={100} value={played*100}  ValueLabelComponent={(props)=><ValueLabelComponent {...props} value={elapsedTime}/>} onChange={onSeek} onMouseDown={onSeekMouseDown} onChangeComitted={onSeekMouseUp} />
   </Grid>
   
   <Grid item>
    <Grid container alignItems="center" direction="row"> 
       <IconButton onClick={onPlayPause} className={classes.bottomIcons}>
        
       <span class="material-icons play"> 
       {playing? (<PauseIcon fontSize="medium"/> ) : ( <PlayArrowIcon fontSize="medium"/>)}</span>
       </IconButton>

       <IconButton onClick={onMute} className={classes.bottomIcons}>
       <span class="material-icons play">
         {muted? (<VolumeOff fontSize="medium" /> ):( <VolumeUpIcon fontSize="medium"/>)}</span>
       </IconButton>

       <PrettoSlider min={0} max={100} value={volume*100}  className={classes.volumeSlider} onChange={onVolumeChange} onChangeCommited={onVolumeSeekUp}/>

       <Button onClick={onChangeDisplayFormat} variant="text" style={{ color : "#fff", marginLeft: 16}}> <WhiteTextTypography>{elapsedTime/totalDuration}</WhiteTextTypography></Button>
    </Grid>
   </Grid>
   <Grid item>
      <Button onClick={handlePopover} variant="text" className={classes.bottomIcons}>
        <WhiteTextTypography>{playbackRate}X</WhiteTextTypography>
      </Button>

      <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose}
anchorOrigin={{
  vertical: 'top',
  horizontal: 'left',
}}
transformOrigin={{
  vertical:"bottom",
  horizontal: "center"
}}
>
<Grid container direction="column-reverse">
{[0.5,1,1.5,2].map((rate)=>(<Button onClick={()=> onPlaybackRateChange(rate)} variant="text">
<OrangeTextTypography color="secondary">{rate}</OrangeTextTypography>
</Button>))}
</Grid>
</Popover>
      <IconButton onClick={onToggleFullScreen} className={classes.bottomIcons}>
       <span class="material-icons yo"> <FullScreenIcon fontSize="large"></FullScreenIcon></span>
       </IconButton>
    </Grid>
   </Grid>
 </div>
  );
});

