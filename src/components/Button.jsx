import React from 'react';
import styled from 'styled-components';

const ButtonEl = styled.button`
    position: absolute;
    ${props => props.coords};
    display: ${props => props.visible ? 'block' : 'none'};
    z-index: 889;
`;

const Button = ({label, visible, onClick, coords}) => (
  <ButtonEl
    visible={visible}
    onClick={onClick}
    coords={coords}
  >{label}</ButtonEl>
);

export default Button
