import XDNavItem from "./xdNavItem";

export default function XDNavigationMenu({entry}){
    let navMenu = entry.fields.navigationItems.map(
        (navItem, idx) => {
            return (
                <ul className="" key={idx}> 
                    <XDNavItem entry={navItem.fields} />
                </ul>    
            )      
        }
    )
    return navMenu;
}
