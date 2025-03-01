import React from "react";
import NavBar from "@/components/NavBar";

const Header = () => {
    return (
        <header className="max-w-screen-lg mx-auto flex justify-between items-center p-2">
            <div className="font-sans font-semibold">Mueed Ahmad</div>
            <NavBar />
        </header>
    );
};
export default Header;
