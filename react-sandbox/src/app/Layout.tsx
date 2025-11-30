import Sidebar from "@/components/Sidebar.tsx";
import Navbar from "@/components/Navbar.tsx";

type LayoutProps = {
    children?: React.ReactNode;
}

export default function Layout({children}: Readonly<LayoutProps>) {
    return (
        <div className="flex">
            <Sidebar/>
            <div className="w-full">
                <Navbar/>
                <div className="px-4">{children}</div>
            </div>
        </div>
    )
}