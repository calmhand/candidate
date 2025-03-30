"use client"

import Image from "next/image";
import Link from "next/link";
import { Icons } from "./icons";
import {useState} from "react";

import appIcon from "@/assets/logos/logo.png"
import MobileNav from "@/_components/MobileNav";

export default function SiteNav({links, children}) {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <div className={"text-sm text-[var(--color-c--black)] border-b border-b-black/25"}>
            <nav className={"hidden md:flex items-center justify-between p-4"} id="site-navbar">
                <div className={`flex gap-12`}>
                    <Link href="/">
                        <Image
                            className="object-cover"
                            src={ appIcon }
                            alt="Candidate Logo"
                            width={48}
                            height={48}
                            priority={true}
                        />
                    </Link>
                    <ul className="flex gap-4 items-center mt-1">
                        {links.map((link, index) => (
                            <li key={index}>
                                <Link href={link.href}>{link.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Link className="bg-[var(--color-c--space)] text-[var(--color-c--white)] py-2 px-6 rounded-sm" href="/">Sign In</Link>
            </nav>

            <nav className={`flex justify-between items-center gap-2 md:hidden my-4`}>
                <div className={`flex items-center gap-3 ml-4`}>
                    <Link href="/">
                        <Image
                            className="object-cover inline"
                            src={ appIcon }
                            alt="Candidate Logo"
                            width={24}
                            height={24}
                            priority={true}
                        />
                    </Link>
                    <button className={`inline md:hidden`} onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        <Icons.menu color={`var(--color-c--black)`}/>
                    </button>
                </div>

                <Link className="bg-[var(--color-c--space)] text-[var(--color-c--white)] text-xs py-2 px-4 mr-4 rounded-sm" href="/">Sign In</Link>
                {(showMobileMenu) && (links) && (
                    <MobileNav links={links}></MobileNav>
                )}
            </nav>

        </div>

    )
}