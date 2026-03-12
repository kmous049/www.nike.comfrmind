import { Logo } from "@/components/Logo";
import { DesktopMenu } from "@/sections/Navbar/components/DesktopMenu";
import { SearchAndActions } from "@/sections/Navbar/components/SearchAndActions";

export const MainNav = () => {
  return (
    <header className="relative bg-neutral-800 box-border caret-transparent z-[2]">
      <div className="relative box-border caret-transparent">
        <div className="items-center box-border caret-transparent grid grid-cols-[repeat(12,minmax(0px,1fr))] max-w-[1920px] mx-auto px-6 md:px-12">
          <Logo />
          <div className="box-border caret-transparent col-start-[span_1] h-[60px] min-h-[auto] min-w-[auto] md:col-start-[span_7]">
            <DesktopMenu />
          </div>
          <SearchAndActions />
        </div>
      </div>
    </header>
  );
};
