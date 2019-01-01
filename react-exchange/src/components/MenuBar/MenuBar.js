import React from 'react';
import withStyles from '@material-ui/styles/withStyles';
import PropTypes from 'prop-types';
import { Row } from 'antd';
import LinkButton from '../UI/LinkButton/LinkButton';
import { RouteURLs } from '../../Routes';

const styles = theme => ({
  button: {
    width: 140,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: theme.mediumPadding,
  },
  menuBar: {
    paddingTop: theme.mediumPadding,
  },
});

const Links = [
  {
    url: RouteURLs.OverTime,
    label: 'Over Time',
  },
  {
    url: RouteURLs.SpecificDate,
    label: 'Specific Date',
  },
];

const MenuBar = props => (
  <Row justify="center" className={props.classes.menuBar}>
    {
      Links.map(link =>
        (
          <LinkButton className={props.classes.button} to={link.url} key={link.url}>
            {link.label}
          </LinkButton>
        ))
    }
  </Row>
);

MenuBar.propTypes = {
  // Override Because we define this object in this file
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(MenuBar);
