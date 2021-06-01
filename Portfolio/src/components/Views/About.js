import { Container, Grid, Typography, useMediaQuery } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpeedIcon from '@material-ui/icons/Speed';
import FlareIcon from '@material-ui/icons/Flare';
import DevicesIcon from '@material-ui/icons/Devices';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';

//Custom components
import Hexagon from '../Hexagon';
import ProfileCard from '../ProfileCard';
import Skills from '../Skills';
import { profile } from '../../constants/personalInfo';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#616161',
    padding: '70px 0 70px 0',
  },
  header: {
    fontWeight: 700,
    color: '#444649',
  },
  headerBar: {
    display: 'blcok',
    fontWeight: 700,
    backgroundColor: '#444649',
    height: 4,
    width: 70,
    margin: '25px 0 75px 0',
    fontSize: '8pt',
  },
  cardContainer: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    padding: 16,
  },
  icon: {
    color: '#fff',
    fontSize: 40,
  },
  subHeading: {
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 700,
  },
  text: {},
}));

const About = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('xs'));

  const Card = ({ title, description, icon, image, ...rest }) => (
    <div className={classes.cardContainer} {...rest}>
      <Hexagon height={isSmallScreen ? 80 : 100}>{icon}</Hexagon>

      <div data-aos='zoom-in' data-aos-delay='600'>
        <Typography className={classes.subHeading} component='div' variant='h3'>
          {title}
        </Typography>
        <Typography className={classes.text} component='div' variant='body1'>
          {description}
        </Typography>
      </div>
    </div>
  );

  return (
    <Container maxWidth='lg' component='section'>
     <Grid
        id='about'
        container
        direction='column'
        justify='center'
        alignItems='center'
        className={classes.root}
      >
        <Typography
          component='div'
          variant='h2'
          className={classes.header}
          data-aos='fade-right'
        >
          ABOUT
        </Typography>
        <div
          className={classes.headerBar}
          data-aos='fade-right'
          data-aos-delay='500'
        />
        <Grid item container>
          <Grid item container xs={6} sm={6} md={3}>
            <Card
              data-aos='flip-left'
              icon={<SpeedIcon className={classes.icon} />}
              title='Fast'
              description='Creating elegant solutions in the least amount of time. '
            />
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <Card
              data-aos='flip-left'
              data-aos-delay='600'
              icon={<GpsFixedIcon className={classes.icon} />}
              title='Dynamic'
              description={`Websites don't have to be static, I love making pages come to life.`}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <Card
              data-aos='flip-left'
              data-aos-delay='200'
              icon={<FlareIcon className={classes.icon} />}
              title='Intuitive'
              description='Strong preference for interactive, user-friendly, and feature-rich websites'
            />
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <Card
              data-aos='flip-left'
              data-aos-delay='400'
              icon={<DevicesIcon className={classes.icon} />}
              title='Responsive'
              description='My layouts will work on any device, big or small.'
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            style={{ marginTop: 50 }}
            data-aos='fade-right'
            data-aos-duration='1000'
          >
            <ProfileCard />
          </Grid>
          <Grid item xs={12} md={6} style={{ marginTop: 100 }}>
            <Skills skills={profile.skills} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
