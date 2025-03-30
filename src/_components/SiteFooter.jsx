import Image from "next/image";
import AppLogo from "@/assets/logos/logo.png"
import SDNYLogo from "@/assets/logos/sdny.svg"
import Link from "next/link";

export default function SiteFooter({links}) {
    return (
        <>
            <footer className={"flex flex-col items-center gap-4 border-t border-[var(--color-c--black)] mt-16 p-8"}>
                <div className={"flex flex-col md:flex-row gap-2 items-center justify-between"}>
                    <div className={`flex flex-col md:flex-row items-center  gap-4 text-center md:text-start`}>
                        <Image className={"inline"} src={AppLogo} alt={"Candidate Logo"} width={128}/>
                        <span className={"text-md font-bold md:mt-2 md:max-w-1/4"}>An Assistant and Accountability Tracker for Job Seekers.</span>
                    </div>

                    <nav>
                        <ul className={"grid grid-cols-2 gap-x-8 justify-center"}>
                            {links.map((link, index) => (
                                <li key={index}><Link href={link.href}>{link.title}</Link></li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div>
                    <Link className={"flex gap-2 items-center text-sm"} href={"https://seven-nine.co"}>
                        <Image src={SDNYLogo} alt={"seven days. nine years. Logo"} width={52} />
                        <span className={`block`}>Designed and developed by seven days. nine years.</span>
                    </Link>
                </div>
            </footer>
        </>
    )
}