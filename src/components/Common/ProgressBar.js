import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  progress[value] {
    width: 400px;
    appearance: none;

    ::-webkit-progress-bar {
      height: 20px;
      border-radius: 20px;
      background-color: #eee;
    }

    ::-webkit-progress-value {
      height: 20px;
      border-radius: 20px;
      background-color: ${(props) => props.color};
    }
  }
`;

const Progressbar = (props) => {
  const { name, value, max, color } = props;

  return (
    <Container color={color} className="container-base-stat">
      {name.toUpperCase()}
      <progress value={value} max={max} />
    </Container>
  );
};

Progressbar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  color: PropTypes.string,
};

Progressbar.defaultProps = {
  max: 250,
};

export default Progressbar;
