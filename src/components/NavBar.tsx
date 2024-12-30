"use client";
import React from 'react'
import navLinks from "@/constants/navLinks";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";
import {useMediaQuery} from "@/hooks/use-media-query";
import {MenuIcon} from "lucide-react";

const NavBar = () => {
    const isDesktop: boolean = useMediaQuery("(min-width: 1024px)");

    if (isDesktop) {return (
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
    )}
    else {
        return (
            <MobileNav />
        )
    }
};

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <MenuIcon />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader className="hidden">
                    <SheetTitle>Navigation Bar</SheetTitle>
                </SheetHeader>
                <div className="flex justify-center w-full mt-4">
                    <NavigationMenu>
                        <NavigationMenuList className="flex flex-col gap-8">
                            {navLinks.map(({id, label, url}) => (
                                <NavigationMenuItem key={id} className="">
                                    <Link href={url} legacyBehavior passHref>
                                        <NavigationMenuLink
                                            className={`${navigationMenuTriggerStyle()} text-sm text-[16px] font-sans w-48 h-12 ${!(url === "/") && "text-gray-400"}`}>
                                            {label}
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default NavBar















