import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Button } from 'antd';

const LinkButton = (props) => {
  const {
    history,
    location, // We name these fields so that we don't pass them unexpectedly into the button
    match,
    staticContext,
    to,
    onClick,
    ...rest
  } = props;

  return (
    <Button
      {...rest}
      onClick={(event) => {
        if (onClick) {
          onClick(event);
        }
        history.push(to);
      }}
    />
  );
};

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default withRouter(LinkButton);
