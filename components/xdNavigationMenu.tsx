import XDNavItem from "./xdNavItem";

interface IXDNavigationMenuProps {
	entry: Record<string, any>;
}

const XDNavigationMenu = ({entry}: IXDNavigationMenuProps) => {
    let navMenu = entry.fields.navigationItems.map(
        (navItem: Record<string, any>, idx:number) => {
            return (
                <ul className="" key={idx}> 
                    <XDNavItem entry={navItem.fields} />
                </ul>    
            )      
        }
    )
    return navMenu;
}

export default XDNavigationMenu;