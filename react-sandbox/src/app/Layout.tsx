import AppSidebar from "@/components/AppSidebar.tsx";
import AppNavbar from "@/components/AppNavbar.tsx";
import {ThemeProvider} from "@/components/ui/theme-provider.tsx";
import {SidebarProvider} from "@/components/ui/sidebar.tsx";

type LayoutProps = {
    children?: React.ReactNode;
}

export default function Layout({children}: Readonly<LayoutProps>) {
    return (
        <ThemeProvider>
            <SidebarProvider>
                <AppSidebar/>


                    <div className="w-full">
                        <AppNavbar/>
                        <div className="px-4">{children}</div>
                    </div>

            </SidebarProvider>
        </ThemeProvider>

    )
}