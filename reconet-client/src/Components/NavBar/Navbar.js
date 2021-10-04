import React,{useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import logo from './Assets/logo.png';
import shrinkLogo from './Assets/shrinkLogo.png';
import useStyles from './Style';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const NavBar = ({darkMode,setDarkMode}) => {
    const classes = useStyles();

    const [openDrawer, setOpenDrawer] = useState(false)
    return (
        <Box className={classes.navBar}>
            <AppBar position="static" color="primary">
                <Toolbar className={classes.boxContainer}>
                    <Box className={classes.box1}><img src={logo} alt="logo"/></Box>
                    <Box className={classes.box2}><img src={shrinkLogo} alt="logo"/></Box>
                    <Box>
                        <Link color="inherit" underline="none" className={classes.anchorLink}><Button color="inherit">About</Button></Link>
                        <Link color="inherit" underline="none" className={classes.anchorLink}><Button color="inherit">News</Button></Link>
                        <Link color="inherit" underline="none" className={classes.anchorLink}><Button color="inherit">Analyze</Button></Link>
                        <Link color="inherit" underline="none" className={classes.anchorLink}><Button color="inherit">Login</Button></Link>
                        <Drawer
                            anchor={"top"}
                            open={openDrawer}
                            // onClose={setOpenDrawer(false)}
                        >
                            <Box
                                role="presentation"
                                >
                                <List>
                                    <ListItem button>
                                        <Link color="inherit" underline="none">About</Link>
                                    </ListItem>
                                    <ListItem button>
                                        <Link color="inherit" underline="none">News</Link>
                                    </ListItem>
                                    <ListItem button>
                                        <Link color="inherit" underline="none">Analyze</Link>
                                    </ListItem>
                                    <ListItem button>
                                        <Link color="inherit" underline="none">Login</Link>
                                    </ListItem>
                                </List>
                                <Divider />
                            </Box>
                        </Drawer>
                        <Box className={classes.hamBurger}>
                            <IconButton onClick={() => {setOpenDrawer(true)}} color="inherit" >
                                <FontAwesomeIcon icon={faBars} />
                            </IconButton>
                        </Box>
                        <IconButton  onClick={() => {setDarkMode(!darkMode);}} color="inherit">
                            {darkMode === false ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar;