import { Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';
import profileImage from '../assets/images/profileImage.jpg';
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',

    lineHeight: '18pt',
    padding: 16,
  },

  subHeading: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: '14pt',
    fontWeight: 'bold',
  },
  text: {
    fontSize: '11pt',
  },
  highlight: {
    color: '#0079AD',
    cursor: 'pointer',
  },
}));

const ProfileCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        src={profileImage}
        style={{ width: 250 }}
        alt='Bibi Ovezova profile'
      />

      <Typography className={classes.subHeading} component='div'>
        {`Who am I?`}
      </Typography>
      <Typography className={classes.text} component='div'>
        {`I'm a freelancer Full Stack Javascript Developer in Waterloo, ON.`}
        <br />
        {`I have serious passion for Javascript, React, node.js,`}
        <br />
        {` animations and creating intuitive, dynamic user experiences.`}
        <br />

        <Link
          to='contact'
          spy={true}
          smooth={true}
          className={classes.highlight}
          tabIndex='0'
        >
          {`Let's make something special.`}
        </Link>
      </Typography>
    </div>
  );
};

export default ProfileCard;
