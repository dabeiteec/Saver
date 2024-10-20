import { NavButton } from "./nav-button";
import logo from "../../../assets/logo.png";
import { FaUser } from "react-icons/fa";
import "../css/header.scss";

export const Header = () => {
    const headerLabels = [
        "Начальная страница",
        "Случайный контент",
        "Основная страница",
    ];
    const headerLinks = ["/", "/notFound", "/Save"];
    return (
        <header>
            <div className="logo">
                <img alt="Company Logo" src={logo} />
            </div>
            <nav>
                <NavButton label={headerLabels[0]} move={headerLinks[0]} />
                <NavButton label={headerLabels[1]} move={headerLinks[1]} />
                <NavButton label={headerLabels[2]} move={headerLinks[2]} />
            </nav>
            <div className="glow-text">
                <FaUser style={{ fontSize: "48px" }} />
            </div>
        </header>
    );
};
