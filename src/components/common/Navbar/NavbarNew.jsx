import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../../assets/images/logo.webp";
import { Link, NavLink, useLocation } from "react-router-dom";

const navItems = [
    { to: "/", label: "Home" },
    { to: "/about-us", label: "About" },
    { to: "/service", label: "Service" },
    { to: "/product", label: "Product" },
];

const linkBase =
    "relative inline-block px-3.5 py-2 text-white transition-all duration-300 text-lg md:text-xl font-light hover:scale-110";
const linkActive = "border-b-2 border-white";

const modalVariants = {
    hidden: { y: "-100vh" },
    visible: {
        y: 0,
        transition: { type: "tween", duration: 0.3 },
    },
    exit: {
        y: "-100vh",
        transition: { type: "tween", duration: 0.3, delay: 0.3 },
    },
};

const navLinksVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
    exit: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const linkItemVariants = {
    hidden: { opacity: 0, y: "50%" },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
        opacity: 0,
        y: "50%",
        transition: { duration: 0.1, ease: "easeOut" },
    },
};

function HamburgerIcon({ open }) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            {open ? (
                <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                </>
            ) : (
                <>
                    <line x1="3" y1="7" x2="21" y2="7" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="17" x2="21" y2="17" />
                </>
            )}
        </svg>
    );
}

export default function NavbarNew() {
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const { pathname } = useLocation();
    const close = () => setOpen(false);

    const handleNavClick = (to) => () => {
        if (pathname === to) window.scrollTo(0, 0);
        close();
    };

    // Sembunyikan navbar saat scroll ke bawah, tampilkan lagi saat scroll ke atas
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setVisible(currentScrollPos <= prevScrollPos || currentScrollPos < 100);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    return (
        <>
        <header
            className={`fixed top-0 left-0 w-full z-[1000] transition-transform duration-300 ${
                visible ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            {/* Background full width, transparan gelap + blur */}
            <div className="w-full shadow-xl bg-black/40 backdrop-blur-md">
                <div className="flex items-center justify-between gap-3 px-4 py-3 mx-auto max-w-7xl md:px-8 md:py-4">
                    {/* LOGO */}
                    <Link
                        to="/"
                        onClick={handleNavClick("/")}
                        className="flex items-center flex-shrink-0"
                        aria-label="Ammertav home"
                    >
                        <img
                            src={logo}
                            alt="logo"
                            decoding="async"
                            className="h-auto object-contain w-[110px] md:w-[124px] lg:w-[136px]"
                        />
                    </Link>

                    {/* DESKTOP NAV */}
                    <nav className="justify-center flex-1 hidden md:flex">
                        <ul className="flex items-center gap-8 p-0 m-0 list-none lg:gap-16">
                            {navItems.map((item) => (
                                <li key={item.to}>
                                    <NavLink
                                        to={item.to}
                                        onClick={handleNavClick(item.to)}
                                        className={({ isActive }) =>
                                            `${linkBase} ${isActive ? linkActive : ""}`
                                        }
                                    >
                                        {item.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* RIGHT GROUP */}
                    <div className="flex items-center gap-2">
                        {/* CONTACT US — desktop only */}
                        <NavLink
                            to="/contact"
                            onClick={handleNavClick("/contact")}
                            className="hidden md:inline-flex items-center justify-center rounded-3xl cursor-pointer transition-all duration-300 bg-gradient-to-r from-brand-purple to-brand-violet text-lg md:text-xl font-semibold text-white md:px-6 md:py-3 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(157,78,221,0.3)]"
                        >
                            Contact Us
                        </NavLink>

                        {/* HAMBURGER — mobile only */}
                        <button
                            type="button"
                            onClick={() => setOpen(!open)}
                            className="p-2 text-white transition-colors rounded-full md:hidden hover:bg-white/10"
                            aria-label={open ? "Close menu" : "Open menu"}
                            aria-expanded={open}
                        >
                            <HamburgerIcon open={open} />
                        </button>
                    </div>
                </div>

            </div>
        </header>

        {/* MOBILE DROPDOWN — di luar <header> supaya "fixed inset-0" relatif ke viewport,
            bukan terkunci ke tinggi header (header punya transform utk efek hide-on-scroll) */}
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-[1000] flex justify-center items-center bg-black bg-opacity-50 md:hidden"
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="absolute w-6 h-6 text-white cursor-pointer top-5 right-5 sm:w-8 sm:h-8"
                        aria-label="Close menu"
                    >
                        <HamburgerIcon open={true} />
                    </button>

                    <motion.div
                            className="relative w-full"
                            variants={navLinksVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <div className="flex flex-col justify-center h-full gap-6 mx-6 text-right sm:gap-8">
                                {navItems.map((item) => (
                                    <motion.span
                                        key={item.to}
                                        className="text-4xl font-light text-white"
                                        variants={linkItemVariants}
                                    >
                                        <NavLink to={item.to} onClick={handleNavClick(item.to)}>
                                            {item.label}
                                        </NavLink>
                                    </motion.span>
                                ))}
                                <motion.span
                                    className="text-4xl font-light text-white"
                                    variants={linkItemVariants}
                                >
                                    <NavLink to="/contact" onClick={handleNavClick("/contact")}>
                                        Contact Us
                                    </NavLink>
                                </motion.span>
                            </div>
                        </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
        </>
    );
}
