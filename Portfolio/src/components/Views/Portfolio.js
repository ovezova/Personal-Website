import { Dialog, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

//Custom components
import PortfolioCard from '../PortfolioCard';
import { profile } from '../../constants/personalInfo';
import PortfolioModal from '../Modals/PortfolioModal';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#616161',
    padding: '70px 0 70px 0',
    backgroundColor: '#f5f5f5;',
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
}));

const Portfolio = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [activeProject, setActiveProject] = React.useState(0);
  const classes = useStyles();

  const handleClickOpen = (id) => {
    setActiveProject(id);
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

  return (
    <Grid
      id='portfolio'
      container
      direction='column'
      justify='center'
      alignItems='center'
      component='section'
      className={classes.root}
    >
      <Typography
        component='div'
        variant='h2'
        className={classes.header}
        data-aos='fade-left'
      >
        PORTFOLIO
      </Typography>
      <div
        className={classes.headerBar}
        data-aos='fade-left'
        data-aos-delay='300'
      />

      <Grid
        container
        justify='center'
        alignItems='center'
        style={{ maxWidth: 1200 }}
      >
        {profile.portfolio.map((project, id) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={id}
            data-aos='fade-up'
            data-aos-delay={id * 200}
          >
            <PortfolioCard
              title={project.title}
              tech={project.tech}
              image={project.images[0]}
              onClick={() => handleClickOpen(id)}
              key={id}
            />
          </Grid>
        ))}
      </Grid>

      <Dialog
        //fullScreen={fullScreen}
        fullWidth
        maxWidth={'sm'}
        open={isModalVisible}
        onClose={handleClose}
        aria-labelledby='project-details-modal'
      >
        <PortfolioModal
          title={profile.portfolio[activeProject].title}
          tech={profile.portfolio[activeProject].tech}
          images={profile.portfolio[activeProject].images}
          description={profile.portfolio[activeProject].description}
          liveUrl={profile.portfolio[activeProject].liveUrl}
          githubUrl={profile.portfolio[activeProject].githubUrl}
          onClose={handleClose}
        />
      </Dialog>
    </Grid>
  );
};

export default Portfolio;
