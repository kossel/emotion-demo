import React from 'react';
import styled from 'react-emotion'
import { withTheme } from 'emotion-theming';
import Button from '../button/Button';

const StyledButton = styled(Button)(props => ({
    backgroundColor: props.type === 'primary' && props.theme.primaryButtonBG,
    color: props.type === 'primary' && props.theme.primaryButtonColor,
}));

export default withTheme(StyledButton);