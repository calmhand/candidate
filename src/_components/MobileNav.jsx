import Link from "next/link";
import Image from "next/image";
import appColoredIcon from "@/assets/logos/app_icon-color.svg";

export default function MobileNav({links}) {
    return (
        <div className={`absolute top-16 w-full p-4 text-[var(--color-c--black)] bg-[var(--color-c--white)] border-t border-b border-black/25`}>
            <ul>
                {links.map((link, index) => (
                    <li key={index} className={`py-2`}>
                        <Link href={link.href}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}