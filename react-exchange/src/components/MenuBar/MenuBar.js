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
    // We reuse the theme level style for generic padding to avoid duplication
    marginBottom: theme.mediumSpacing,
  },
  menuBar: {
    paddingTop: theme.mediumSpacing,
  },
});

// Uses a config object so that we can easily modify the menu bar buttons
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
      // We need to be careful using the url as the key here, which would be a problem
      // if we had duplicate button/url combos
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
