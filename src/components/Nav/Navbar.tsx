import { NavLink as Link } from "react-router-dom";
import styles from "./style/nav.module.scss";
import { ClipboardDocumentCheckIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import useIsMobile from "../../hooks/useIsMobile";
import NavList from "./navlist";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const isMobile = useIsMobile();

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.container}>
                    <Link to="/" className={styles.logo}>
                        <ClipboardDocumentCheckIcon /> TaskHubb
                    </Link>
                    {isMobile ? (
                        <span onClick={() => setIsOpen(prev => !prev)}>
                            <Bars3Icon />
                        </span>
                    ) : (
                        <NavList />
                    )}
                </div>
            </nav>
            {isOpen && <NavList isMobile={isMobile} />}
        </>
    );
};

export default Navbar;
