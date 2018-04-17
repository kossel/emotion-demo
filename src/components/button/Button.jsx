import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    /**
     * Whenever the button is in disabled state or not
     */
    isDisabled: PropTypes.bool,
    /**
     * ClassName of the component
     */
    className: PropTypes.string,
};

const defaultProps = {
    isDisabled: false
}

/**
 * A simple button component
 */
class Button extends React.Component {
    render() {
        return (
            <button disabled={this.props.isDisabled} className={this.props.className}>
                {this.props.children}
            </button>
        )
    }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default Button