"use client";
import React from 'react'
import navLinks from "@/constants/navLinks";
import {
    NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import Link from "next/link";

const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavigationMenu>
                <NavigationMenuList>
                    {navLinks.map(({ id, label, url }) => (
                        <NavigationMenuItem key={id}>
                            <Link href={url} legacyBehavior passHref>
                                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-sm font-sans  ${!(url === "/") && "text-gray-400"}`}>
                                    {label}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    );
};
export default NavBar















