import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "../css/nav-button.scss";
import "../global.scss";

export const NavButton = ({ label, move }) => {
    console.log(move, "+", label);
    return (
        <NavLink to={move}>
            <button className="nav-button glow-text">{label}</button>
        </NavLink>
    );
};

NavButton.propTypes = {
    label: PropTypes.string.isRequired,
    move: PropTypes.string.isRequired,
};
