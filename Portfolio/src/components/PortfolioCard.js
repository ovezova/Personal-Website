import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    paddingTop: '63%',
    '&:hover $bgImage, &:focus-within $bgImage': {
      opacity: 0,
    },
    '&:hover $description, &:focus-within $description': {
      opacity: 1,
      top: '25%',
    },
    '&:hover $button, &:focus-within $button': {
      opacity: 1,
      bottom: '25%',
    },
  },

  bgImage: (props) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `url(${props.image})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    //backgroundSize: '100% 100%',
    backgroundSize: 'cover',
    transition: 'opacity 0.3s',
  }),
  description: {
    position: 'absolute',
    top: 0,
    opacity: 0,
    transition: 'all 0.3s ease-in-out',
  },

  title: {
    textAlign: 'center',
    color: '#1b242f',
    fontWeight: 700,
  },
  tech: {
    color: theme.palette.secondary.dark,
    textAlign: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 0,
    color: '#000',
    borderRadius: 0,
    transition: 'all 0.3s ease',
    opacity: 0,
    '&:hover': {
      color: '#fff',
      background: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main,
    },
  },
}));

const PortfolioCard = (props) => {
  const { title, onClick, tech, ...rest } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.root} {...rest}>
      <div className={classes.bgImage} />
      <div className={classes.description}>
        <Typography className={classes.title} component='p' variant='h3'>
          {title}
        </Typography>
        <Typography className={classes.tech} component='p' variant='body1'>
          {tech}
        </Typography>
      </div>

      <Button
        color='secondary'
        variant='outlined'
        size='large'
        onClick={onClick}
        className={classes.button}
      >
        LEARN MORE
      </Button>
    </div>
  );
};

export default PortfolioCard;
