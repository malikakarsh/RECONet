import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  homeContainer:{
      overflowX: 'hidden',
      flexGrow: 1,
      padding: '1rem 2rem 1rem 2rem',
      paddingTop: '10rem',
      paddingBottom: '5rem',
      minHeight: '100vh',
      height: '100%',
      textAlign: 'center',
      background: (props) => props.palette.primary.dark,
      color: (props) => props.palette.text.main,
      [theme.breakpoints.down('sm')]: {
        paddingTop: '5rem',
    }
  },
  textHeaders:{
    fontFamily: 'Raleway',
    textAlign: 'left',
    fontSize: '0.9rem',
    height: '20rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0rem 1rem 1rem 1rem',
    [theme.breakpoints.down('sm')]: {
      padding: '1rem 0.2rem 1rem 0.2rem',
      fontSize: '0.8rem',
      textAlign: 'center',
      height: 'auto',
      alignItems: 'start',
      justifyContent: 'start',
    }

  },
  imgs:{
      paddingTop: '2rem',
      height: '20rem',
    [theme.breakpoints.down('lg')]: {
      height: '17rem',
      paddingTop: '4rem',
    },
    [theme.breakpoints.down('sm')]: {
      height: '12rem',
      paddingTop: '4rem',
    },
  },

  grid1:{
      [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },

  grid2:{
      [theme.breakpoints.up('md')]: {
      display: 'none'
      }
  }
}));

export default useStyles;