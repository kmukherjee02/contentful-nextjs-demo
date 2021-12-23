import XDNavItem from "./xdNavItem";

export default function XDNavigationMenu({entry}){
    let navMenu = entry.fields.navigationItems.map(
        (navItem, idx) => {
            return (
                <ul className=""> 
                    <XDNavItem entry={navItem.fields} key={idx}/>
                </ul>    
            )      
        }
    )
    return navMenu;
}
