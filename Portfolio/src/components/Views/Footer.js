import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, IconButton, Typography } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Link } from 'react-scroll';
import { profile } from '../../constants/personalInfo';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    backgroundColor: '#1b242f',
    textAlign: 'center',
    padding: '70px 0 50px 0',
  },
  button: {
    color: '#fff',
    borderColor: '#fff',
    backgroundColor: '#262f38',
    borderRadius: 0,
    textTransform: 'none',
    height: 50,
    width: 50,
    fontSize: '24px',

    '&:hover': {
      background: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
    },
    '& .MuiSvgIcon-root': {
      transition: 'all 1s ease',
    },
    '&:hover .MuiSvgIcon-root': {
      transform: 'rotateX(360deg)',
    },
  },
  scroolButton: {
    position: 'absolute',
    top: -25,
    color: '#fff',
    //borderColor: '#fff',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 0,
    height: 50,
    width: 50,
    fontSize: '30px',
    //transform: 'rotate(-90deg)',
    '&:hover': {
      background: theme.palette.secondary.light,
      borderColor: theme.palette.secondary.light,
    },
  },

  footNote: {
    marginTop: 35,
    color: '#8f9aa7',
    '& p ': {
      fontSize: 18,
    },

    '& span ': {
      color: theme.palette.secondary.light,
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      component='footer'
      className={classes.root}
    >
      <IconButton
        component={Link}
        to='home'
        spy={true}
        smooth={true}
        className={classes.scroolButton}
        aria-label='scroll to top'
      >
        <KeyboardArrowUpIcon fontSize='inherit' />
      </IconButton>

      <Grid item container justify='center'>
        <Grid item>
          <IconButton
            className={classes.button}
            aria-label='linkedIn'
            href={profile.linkedInUrl}
            target='_blank'
            rel='noopener noreferrer'
          >
            <LinkedInIcon fontSize='inherit' />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            href={profile.githubUrl}
            target='_blank'
            rel='noopener noreferrer'
            className={classes.button}
            style={{ marginLeft: 16, marginRight: 16 }}
            aria-label='github'
          >
            <GitHubIcon fontSize='inherit' />
          </IconButton>
        </Grid>
        
      </Grid>
      <Grid item className={classes.footNote}>
        <Typography>
          {`${profile.name} ${profile.surname} `}
          <span>©2020</span>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
