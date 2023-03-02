import PropTypes from 'prop-types';

import style from './button.module.css'

const Button = ({onClick, children}) => {
    return <button onClick={onClick} className={style.Button}>{children}</button>
}

export default Button;

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired,
}
