import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import virtualize from 'react-swipeable-views-utils/lib/virtualize';
import { Button, IconButton, Typography } from '@material-ui/core';
import clsx from 'clsx';
import CloseIcon from '@material-ui/icons/Close';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const EnhancedSwipeableViews = virtualize(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  root: { overflowX: 'hidden' },
  carauselWrapper: {
    position: 'relative',
    width: '100%',
    paddingTop: '58%',
  },
  imageWrapper: {
    height: 100,
  },

  image: {
    height: '100%',
    backgroundPosition: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  crauselButton: {
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: '10px 15px',
    borderRadius: 0,
    textTransform: 'none',
    height: 50,
    width: 50,
    fontSize: '36px',
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.2)',
      borderColor: 'rgba(0, 0, 0, 0.2)',
    },
  },

  prev: { position: 'absolute', left: 0, bottom: 0 },
  next: { position: 'absolute', right: 0, bottom: 0 },
  title: { color: '#444', fontWeight: 700, marginBottom: 8 },
  tech: {
    fontSize: '11pt',
    paddingBottom: 15,
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    color: '#c0c0c0',
    fontWeight: 700,
  },
  description: { marginTop: 15, whiteSpace: 'pre-line' },
  contentWrapper: {
    padding: '16px 60px 35px 25px',
    borderTop: '3px solid #1b242f',
  },
  actionWrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '35px 0 16px 25px',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
      alignItems: 'baseline',
      '& a': {
        marginTop: 12,
      },
    },
  },
  liveButton: {
    color: '#fff',
    backgroundColor: theme.palette.secondary.main,
    //color: theme.palette.secondary.main,

    fontSize: 12,
    borderRadius: 0,
    marginRight: 16,

    '&:hover': {
      backgroundColor: '#fff',
      color: theme.palette.secondary.main,
    },
    '& .MuiSvgIcon-root': {},
    '&:hover .MuiSvgIcon-root': {},
  },
  githubButton: {
    borderRadius: 0,
    textTransform: 'none',
    fontSize: 12,
  },

  closeButton: {
    position: 'absolute',
    right: 0,
    bottom: 8,

    color: '#bbb',
    fontSize: 28,
  },
}));

const PortfolioModal = ({
  title,
  tech,
  images,
  description,
  liveUrl,
  githubUrl,
  onClose,
}) => {
  const classes = useStyles();

  const [imageIndex, setImageIndex] = React.useState(0);
  const handleNext = () => {
    setImageIndex(imageIndex + 1);
  };

  const handlePrev = () => {
    setImageIndex(imageIndex - 1);
  };

  const slideRenderer = ({ key, index }) => {
    const imageIndex = Math.abs(images.length + index) % images.length;

    return (
      <div
        style={{ backgroundImage: `url(${images[imageIndex]})` }}
        className={classes.image}
        key={index}
      />
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.carauselWrapper}>
        <EnhancedSwipeableViews
          index={imageIndex}
          onChangeIndex={(index) => setImageIndex(index)}
          containerStyle={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            right: 0,
          }}
          enableMouseEvents
          slideRenderer={slideRenderer}
        />

        <IconButton
          className={clsx(classes.crauselButton, classes.prev)}
          aria-label='previous'
          onClick={handlePrev}
        >
          <NavigateBeforeIcon fontSize='inherit' />
        </IconButton>
        <IconButton
          className={clsx(classes.crauselButton, classes.next)}
          aria-label='next'
          onClick={handleNext}
        >
          <NavigateNextIcon fontSize='inherit' />
        </IconButton>
      </div>

      <div className={classes.contentWrapper}>
        <Typography component='p' variant='h3' className={classes.title}>
          {title}
        </Typography>
        <Typography component='p' variant='h3' className={classes.tech}>
          {tech}
        </Typography>
        <Typography
          component='div'
          variant='body1'
          className={classes.description}
        >
          {description}
        </Typography>
      </div>

      <div className={classes.actionWrapper}>
        {liveUrl && (
          <Button
            className={classes.liveButton}
            href={liveUrl}
            target='_blank'
            rel='noopener noreferrer'
            startIcon={<LinkIcon />}
          >
            VIEW ON LIVE
          </Button>
        )}
        {githubUrl && (
          <Button
            className={classes.githubButton}
            href={githubUrl}
            target='_blank'
            rel='noopener noreferrer'
            startIcon={<GitHubIcon />}
          >
            View on GitHub
          </Button>
        )}
        <IconButton
          className={classes.closeButton}
          onClick={onClose}
          aria-label='close modal'
        >
          <CloseIcon fontSize='inherit' />
        </IconButton>
      </div>
    </div>
  );
};

export default PortfolioModal;
