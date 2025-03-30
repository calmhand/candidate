import SiteNav from "@/_components/SiteNav";
import SiteFooter from "@/_components/SiteFooter";
import {siteNavigation} from "@/config/navigation";

export default function HomeLayout({ children }) {
    return (
        <>
            <header>
                <SiteNav links={siteNavigation.mainNav}/>
            </header>
            <main>{children}</main>
            <SiteFooter links={siteNavigation.footerNav}/>
        </>
    )
}