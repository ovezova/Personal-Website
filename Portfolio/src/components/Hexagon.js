import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  hexagon: (props) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: `${props.height}px` || '200px',
    width: `${props.height * 0.6}px` || '120px',
    background: props.color || theme.palette.primary.main,
    position: 'relative',
    boxSizing: 'border-box',
    '&::before': {
      content: '""',
      position: 'absolute',
      height: 0,
      width: 0,
      top: 0,
      /* half height */
      borderTop: `${props.height / 2}px solid transparent`,
      borderBottom: `${props.height / 2}px solid transparent`,
      left: `-${props.height / 4}px`,
      borderRight: `${props.height / 4}px solid ${
        props.color || theme.palette.primary.main
      }`,
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      height: 0,
      width: 0,
      top: 0,
      /* half height */
      borderTop: `${props.height / 2}px solid transparent`,
      borderBottom: `${props.height / 2}px solid transparent`,
      right: `-${props.height / 4}px`,
      borderLeft: `${props.height / 4}px solid ${
        props.color || theme.palette.primary.main
      }`,
    },
  }),
}));

const Hexagon = (props) => {
  const { children, ...rest } = props;
  const classes = useStyles(props);
  return (
    <div className={classes.hexagon} {...rest}>
      {children}
    </div>
  );
};

export default Hexagon;
