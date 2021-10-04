import Box from '@mui/material/Box';
import useStyles from './Style';
import Grid from '@mui/material/Grid';
import news from './Assets/news.png';
import bored from './Assets/bored.png';
import customize from './Assets/customize.png';
import analyze from './Assets/analyze.png';

const Home = ({colorSet}) => {
    const classes = useStyles(colorSet);
    console.log(colorSet);
    return (
        <Box className={classes.homeContainer}>
            <Grid container spacing={0}>
                <Grid item xs={12} md={4}>
                    <img src={bored} className={classes.imgs} alt="logo"></img>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Box className={classes.textHeaders}>
                        <h1>Tired of searching for latest updates on vulnerabilities ?</h1>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4} className={classes.grid2}>
                    <img src={news} className={classes.imgs} alt="logo"></img>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Box className={classes.textHeaders}>
                        <h1>Get the latest updates from top hackers on twitter / telegram everyday !</h1>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4} className={classes.grid1}>
                    <img src={news} className={classes.imgs} alt="logo"></img>
                </Grid>
                <Grid item xs={12} md={4}>
                    <img src={customize} className={classes.imgs} alt="logo"></img>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Box className={classes.textHeaders}>
                        <h1>Customize your feeds based on your favourite users !</h1>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4} className={classes.grid2}>
                    <img src={analyze} className={classes.imgs} alt="logo"></img>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Box className={classes.textHeaders}>
                        <h1>Analyze your targets and scopes with a checklist !</h1>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4} className={classes.grid1}>
                    <img src={analyze} className={classes.imgs} alt="logo"></img>
                </Grid>
            </Grid>
        </Box>
    )
};

export default Home;