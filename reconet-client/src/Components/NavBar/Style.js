import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  navBar: {
      position: 'fixed',
      width: '100%',
      top: '0px',
  },
  boxContainer:{
      display: 'flex',
      justifyContent: 'center',
  },

  box1:{
      flexGrow: 1,
      [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  box2:{
      flexGrow: 1,
      [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  anchorLink:{
    [theme.breakpoints.down('md')]: {
        display: 'none',
  }
},

  hamBurger:{
      display: 'inline',
      [theme.breakpoints.up('sm')]: {
        display: 'none',
  }
}
}));

export default useStyles;