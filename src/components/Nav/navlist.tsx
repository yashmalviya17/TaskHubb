import { QueueListIcon, PencilSquareIcon, RectangleStackIcon } from "@heroicons/react/24/outline";
import { NavLink as Link } from "react-router-dom";
import styles from "./style/nav.module.scss";

const NavList = ({ isMobile = false }: { isMobile?: boolean }) => {
    return (
        <ul className={isMobile ? styles.navbarMobile : styles.navLinks}>
            <li>
                <Link to="/">
                    <QueueListIcon /> Dashboard
                </Link>
            </li>
            <li>
                <Link to="/create-task">
                    <PencilSquareIcon /> Create Task
                </Link>
            </li>
            <li>
                <Link to="/category">
                    <RectangleStackIcon /> Category
                </Link>
            </li>
        </ul>
    );
};

export default NavList;
