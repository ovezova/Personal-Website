import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

//Custom components
import ContactForm from '../ContactForm';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    backgroundColor: '#252934',
    textAlign: 'center',
    padding: '185px 0 70px 0',
    [theme.breakpoints.up('sm')]: {
      paddingBottom: 130,
    },
  },
  svg: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },

  header: {
    fontWeight: 700,
    color: '#fff',
    fontSize: '25pt',
    lineHeight: '11pt',
  },
  headerBar: {
    display: 'blcok',
    fontWeight: 700,
    backgroundColor: '#fff',
    height: 4,
    width: 110,
    margin: '25px 0 40px 0',
    fontSize: '8pt',
  },
  highlight: {
    color: theme.palette.primary.main,
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <Grid
      id='contact'
      container
      direction='column'
      justify='center'
      alignItems='center'
      component='section'
      className={classes.root}
      data-animation='slide-in-left'
    >
      <svg
        preserveAspectRatio='none'
        viewBox='0 0 100 102'
        height='75'
        width='100%'
        className={classes.svg}
      >
        <path d='M0 0 L50 100 L100 0 Z' fill='white' stroke='white'></path>
      </svg>

      <Typography
        component='div'
        variant='h2'
        className={classes.header}
        data-aos='fade-right'
      >
        CONTACT
      </Typography>
      <div
        className={classes.headerBar}
        data-aos='fade-left'
        data-aos-delay='300'
      />

      <Typography
        component='div'
        className={classes.highlight}
        data-aos='fade-left'
        data-aos-delay='300'
      >
        Have a question or want to work together?
      </Typography>

      <ContactForm />
    </Grid>
  );
};

export default Contact;
