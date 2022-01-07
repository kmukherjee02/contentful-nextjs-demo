import MobileNavItem from "@components/MobileNavItem";
import XDNavItem from "./xdNavItem";

interface IXDNavigationMenuProps {
	entry: Record<string, any>;
    isMobile?: boolean | undefined;
}

const XDNavigationMenu = ({entry, isMobile}: IXDNavigationMenuProps) => {
    let navMenu = entry.fields.navigationItems.map(
        (navItem: Record<string, any>, idx:number) => {
            return isMobile ?
                <ul className="" key={idx}> 
                    <MobileNavItem entry={navItem.fields} />
                </ul>
            :
                <ul className="" key={idx}> 
                    <XDNavItem entry={navItem.fields} />
                </ul> 
        }   
    )
    return navMenu;
}

export default XDNavigationMenu;