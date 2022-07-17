# UNGUARDED // Website still in development (HTML CSS JS)

I am currently working on a custom video player


UNGUARDED Project 
HTML CSS JS
Includes signup form that connects to a mongodb database [Content made by me]
Includes a simple home page
Includes an about page
Includes content page with a custom video player without react 


UNGUARDED Project w/ React
             React Router DOM connection with multiple links to other applications
	Navbar and Footer created 
		Might have to recreate this in bootstrap and simplify later on
	
Created multiple hero sections
	
Sign up form connected to mongo db database
Issues I've run into. Not able to connect a formik form to mongodb, having trouble figuring out what server this will be connected to  and displaying user confirmation. 
             

What still needs to be added
Content page including all videos w/ a custom video player/implementation
Signup/Signin/Register form 

Where have you been running into issues 
Previous content player made wasn’t able to convert into react, would have to make a new one
Navbar became unresponsive when added the Signin form/register form



Using React to build this website out with react-router dom. Created a signin that is connected to mongodb. Working on connecting a formik form to a mongodb server.

https://vimeo.com/721953612 [Screen recording of website], 
Content and images are not available on project due to copyright protection.

Front-End and Back-End development for unguarded.com. UNGUARDED is a sports platform building athletes and brands. 4 years of documenting the top HS athlete's in the country. All the content was filmed, directed, and edited, by your's truly. 21 weeks in my programming journey. 

Few of the steps that I plan to take moving forward
  Add a login page(Backend API is built already and front end) [Nowhere for the user to go at the moment]
  Possibly convert the file into a react project, this way the routing of the page is much more efficent 
  
https://www.youtube.com/c/UNGUARDED [All the content was filmed, directed, edited, and orchastrated by your's truly.]

Notes of building custom react player
Create single player video w/ custom controls

1.NPX create react app
2.Delete unnecessary items
3.Install Material-ui (https://mui.com/), Material UI was designed with the Roboto font in mind. So be sure to follow these instructions. For instance, via Google Web Fonts
4.Download React-Video Player, Import AppBar, import typography, import container

Things that came to mind | https://www.youtube.com/watch?v=B_IYFFbKkfY

Issue | Video doesn't play on automatic load causing issues with overlay and with other portions of the video
5.Create a class name and set it = to playerwrapper. Classes provide a way to merge together some data and related operations.
6.Make a const usestyles and set it to make styles. Then set it to Playerwrapper. From there, add the functionalities which include player wrapper width and position. Make sure to declare const classes = useStyles();
7.Create a controls wrapper. This will create an overlay on the screen . Elements include positioning, background, display flex direction justify content and z index.
8.Install our controls. The first thing that needs to be done is we need to add grid from material ui. Grid uses flexbox underneath. Flexbox layout commonly known as flexbox is a CSS 3 web layout model
9.Using grid item, (container grids and icon grids). Specify a direction of row, align items of center, justify content of space between. 
10.Typography variant (Fancy word for saying text)
11.Bookmark button variant = contained. Primary color and create a start icon that includes Bookmark icon and define button. 
12.Define a middle row to center. Use 3 icons in the Iconbutton, fastforwardicon, playarrowfunction, pauseicon
13. Create a container to wrap the icon, fastforward and playarrow function 
14. Create a controls wrapper. This will create an overlay on the screen . Elements include positioning, background, display flex direction justify content and z index.
15.Import Slider, take the customized slider pretto slider insert the code. In this specific video the pretto slider is customized. 
16.Import withStyles to the overall project
17.Add ValueLabelComponent to the video 
18.Create bottom grid to the video and add the play component. Make sure it’s initialized at the top of the screen
19.Import VolumeUpIcon and add it to the bottom grid
20.Add a slider control for the min and max and give volume slider a width of 100
21.Add time to the volume icon using typography
22.Add typography button to the bottom to change the speed of the video. Placement is important to make sure that the speed of the video button is on the right
23.Import full screen button
24.Import Popover button and change handleclick to handle popover
25.Have to map out the 0.5,1,1.5,2  and have to change the anchor origin and transform origin
26.Take everything besides the player control and import into player controls
27.Import useState function The useState function updates the current state and a function that updates the state
28.const [state,setState] = useState({
     Playing: true
     playing={playing}
})
29.<PlayerControls onPlayPause={handlePlayPause} and declare a handle play pause function. Const handlePlayPause = () =>{ setState ({...state, playing:!state.playing}). Add an onclick={onPlayPause} function to both playing functions and from there destructure the props which includes putting an onPlayPause

30.Have to pass a playing icon. {playing ? (<PauseIcon fontSize="inherit"/> ) : (<PlayArrowIcon fontSize="inherit" />)}.  Have to pass it into the playing={playing}

31.Have to pass a fastforward and rewind to the function. There are certain methods that work specifically.
useRef takes care of the rewinding.(import)
Declare playerRef = useRef(null)
Pass ref=playerRef to the component 

32.Add two props onRewind={handleRewind}, 
33.Rewinding we have to use the playerRef and add the current, and seekto method. Seekto helps us get to a particular time in the video
34.Add a new state to the react player. Insert muted true
35. Pass in a const handleMute =() => {
setState ({...state, muted: !state.mud})
}; similar to the handleplaypause
36. Add muted to the playericon control and unmuted 
37. Add onclick event to the Icon button onClick={onMute}
38. Add the muted function volumeoff/ volume up
39.Need to add functionality to the volume slider

