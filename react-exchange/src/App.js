import React from 'react';
import { Col } from 'antd';
import withStyles from '@material-ui/styles/withStyles';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import PropTypes from 'prop-types';
import MenuBar from './components/MenuBar/MenuBar';
import Routes from './Routes';
import Theme from './Theme';

const styles = () => ({
  app: {
    height: '100vh',
  },
  menuBar: {
    height: '100%',
  },
  routes: {
    height: '100%',
    padding: Theme.mediumSpacing,
    paddingLeft: 0,
  },
});

// We use a functional component because we don't need any state
function App(props) {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <div className={props.classes.app}>
          <Col span={4} className={props.classes.menuBar}>
            <MenuBar />
          </Col>
          <Col span={20} className={props.classes.routes}>
            <Routes />
          </Col>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

App.propTypes = {
  // Override Because we define this object in this file
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(App);
