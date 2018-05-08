// views/App.jsx

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import Game from './containers/Game.jsx';
import TitleBar from './containers/TitleBar.jsx';

const styles = (theme) => ({
  content: {
    // take into account the app/toolbar 
    paddingTop: theme.mixins.toolbar.minHeight + 10
  }
});

const App = ({ classes }) => {
  return (
    <div>
      <div>
        <header>
          <TitleBar />
        </header>
      </div>
      <div className={classes.content}>
        <section>
          <Game />
        </section>
      </div>
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);