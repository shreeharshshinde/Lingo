import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Sidebar } from "@/components/sidebar";
import { Menu } from "lucide-react";

export const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger className="lg:hidden">
                <Menu/>
            </SheetTrigger>
            <SheetContent side="left" className="w-full lg:w-[256px]">
                <Sidebar className="w-full" />
            </SheetContent>
        </Sheet>
    );
}