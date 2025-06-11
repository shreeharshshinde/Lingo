import { copyFile } from "fs";
import { Sidebar } from "@/components/sidebar";
import { MobileHeader } from "@/components/mobile-header";

type Props = {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
        <MobileHeader/>
        <Sidebar className="hidden lg:flex"/>
        <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
            <div className="bg-red-500 h-full">
                {children}
            </div>
        </main>
    </>
  );
}