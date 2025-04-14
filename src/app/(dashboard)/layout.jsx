import SiteNav from "@/_components/SiteNav";
import {siteNavigation} from "@/config/navigation";

export default function DashboardLayout({ children }) {
    return (
        <>
            <header>
                <SiteNav links={siteNavigation.mainNav} />
            </header>
            <main>{children}</main>
        </>
    )
}