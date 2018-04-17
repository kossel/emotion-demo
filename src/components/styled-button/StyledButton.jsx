import React from 'react';
import styled from 'react-emotion'
import Button from '../button/Button';

const StyledButton = styled(Button)(props => ({
    backgroundColor: props.type === 'primary' ? 'blue' : 'turquoise'
}))

export default StyledButton;