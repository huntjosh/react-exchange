import React from 'react';
import { Col } from 'antd';
import withStyles from '@material-ui/styles/withStyles';
import PropTypes from 'prop-types';
import MenuBar from './components/MenuBar/MenuBar';
import Routes from './Routes';

const styles = () => ({
  app: {
    height: '100vh',
  },
  menuBar: {
    height: '100%',
  },
  routes: {
    height: '100%',
  },
});

function app(props) {
  return (
    <div className={props.classes.app}>
      <Col span={7} className={props.classes.menuBar}>
        <MenuBar />
      </Col>
      <Col span={17} className={props.classes.routes}>
        <Routes />
      </Col>
    </div>
  );
}

app.propTypes = {
  // Override Because we define this object in this file
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(app);
