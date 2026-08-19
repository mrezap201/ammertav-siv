import { useState } from "react";
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

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();
    const close = () => setOpen(false);

    const handleNavClick = (to) => () => {
        if (pathname === to) window.scrollTo(0, 0);
        close();
    };

    return (
        <header className="fixed top-3 md:top-5 left-0 w-full z-[1000] px-3.5 md:px-5 box-border">
            <div className="w-full mx-auto max-w-7xl">
                <div className="w-full overflow-hidden bg-black shadow-xl">
                    {/* TOP ROW */}
                    <div className="flex items-center justify-between w-full gap-3 px-4 py-3 md:px-6 md:py-4 lg:px-8">
                        {/* LOGO — routes to home */}
                        <Link to="/" onClick={handleNavClick("/")} className="flex items-center flex-shrink-0" aria-label="Ammertav home">
                            <img
                                src={logo}
                                alt="logo"
                                decoding="async"
                                className="h-auto object-contain w-[110px] md:w-[124px] lg:w-[136px]"
                            />
                        </Link>

                        {/* DESKTOP NAV */}
                        <nav className="justify-center flex-1 hidden md:flex">
                            <ul className="flex items-center gap-5 p-0 m-0 list-none lg:gap-8">
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
                            {/* CONNECT US — desktop only */}
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

                    {/* MOBILE DROPDOWN */}
                    {open && (
                        <div className="border-t md:hidden border-white/10">
                            <ul className="flex flex-col gap-1 p-3 list-none">
                                {navItems.map((item) => (
                                    <li key={item.to}>
                                        <NavLink
                                            to={item.to}
                                            onClick={handleNavClick(item.to)}
                                            className={({ isActive }) =>
                                                `block px-4 py-3 text-white font-light transition-colors ${isActive
                                                ? "border-b-2 border-white"
                                                : "hover:bg-white/5"
                                                }`
                                            }
                                        >
                                            {item.label}
                                        </NavLink>
                                    </li>
                                ))}
                                <li className="mt-2">
                                    <NavLink
                                        to="/contact"
                                        onClick={handleNavClick("/contact")}
                                        className="block px-4 py-3 font-semibold text-center text-white rounded-full bg-gradient-to-r from-brand-purple to-brand-violet"
                                    >
                                        CONNECT US
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
