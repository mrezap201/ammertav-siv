import { Suspense } from "react";
import { Outlet } from "react-router-dom";


import AmbientBackground from "../components/background/AmbientBackground";
import FooterNew from "../components/common/Footer/FooterNew";
import NavbarNew from "../components/common/Navbar/NavbarNew";

export default function MainLayout() {
    return (
        <>
            <AmbientBackground />
            <NavbarNew />
            <main>
                <Suspense fallback={<div className="min-h-screen bg-ink" />}>
                    <Outlet />
                </Suspense>
            </main>
            <FooterNew/>
        </>
    );
};