import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, LinearProgress, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import clsx from 'clsx';
// import db from '../firebase/firebase';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    backgroundColor: '#252934',
    textAlign: 'center',
    margin: '40px auto 0 auto',
  },
  input: {
    width: '100%',
    backgroundColor: '#1e242c',
    border: 0,
    boxSizing: 'border-box',
    color: '#fff',
    display: 'block',
    fontSize: '12pt',
    marginBottom: '3px',
    outline: 'none',
    padding: '10px 15px',
  },
  textArea: { minHeight: 150 },

  button: {
    color: '#fff',
    borderColor: '#fff',
    textTransform: 'none',
    marginTop: 5,
    fontSize: '1.2rem',
    float: 'right',

    '&:hover': {
      background: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
    },
    '& .MuiSvgIcon-root': {
      transition: 'all 0.3s ease',
    },
    '&:hover .MuiSvgIcon-root': {
      transform: 'rotate(90deg)',
    },
  },
  success: {
    position: 'relative',
    color: '#fff',
    backgroundColor: '#04c986',
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    right: 0,
  },
  loading: {
    position: 'absolute',
    top: -4,
    left: 25,
    right: 25,
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const ContactForm = () => {
  const classes = useStyles();
  const [isLoading, setIsloading] = React.useState(false);
  const [isResponseVisible, setIsResponseVisible] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
    setIsloading(true);

    // Add a new document with a generated id.
    // db.collection('messages')
    //   .add({
    //     name: name,
    //     email: email,
    //     message: message,
    //   })
    //   .then(function (docRef) {
    //     setIsloading(false);
    //     setIsResponseVisible(true);
    //     event.target.reset();
    //   })
    //   .catch(function (error) {
    //     setIsloading(false);
    //     alert(`Opps! something went wrong. Please try agail later\n ${error}`);
    //     console.error('Error adding document: ', error);
    //   });
  };

  return (
    <Container
      component='form'
      maxWidth='sm'
      className={classes.root}
      onSubmit={handleSubmit}
      data-aos='zoom-in'
      data-aos-delay='600'
    >
      <input
        placeholder='Name'
        aria-label='name'
        name='name'
        type='text'
        className={classes.input}
        required
      />
      <input
        placeholder='Enter email'
        aria-label='email'
        name='email'
        type='email'
        className={classes.input}
        required
      />
      <textarea
        placeholder='Your Message'
        name='message'
        aria-label='message'
        type='text'
        className={clsx(classes.input, classes.textArea)}
      />
      {isLoading && (
        <LinearProgress color='secondary' className={classes.loading} />
      )}
      <Snackbar
        open={isResponseVisible}
        autoHideDuration={6000}
        onClose={() => setIsResponseVisible(false)}
      >
        <Alert onClose={() => setIsResponseVisible(false)} severity='success'>
          {'Your message was sent successfully. Thanks!'}
        </Alert>
      </Snackbar>

      <Button type='submit' variant='outlined' className={classes.button}>
        Submit
      </Button>
    </Container>
  );
};

export default ContactForm;
