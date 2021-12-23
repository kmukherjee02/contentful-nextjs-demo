import Link from "next/link";

export default function NavItem({entry}){
    let childMenu = entry.children?.map((item, idx) => {
        return (
            <NavItem entry={item.fields} key={idx}/>
        )
    })
    return (
        <>
            {entry.slug ?
               <li className="list-none">
                    <Link href={entry.slug}> 
                        <button className="px-1 flex text-bg-700 font-bold">{entry.label}</button>
                    </Link>
               </li> 
               :
               <li className="list-none inline">
                   <div className="p-4">
                        <div className="group relative">
                            <button className="px-2 flex text-bg-700 font-bold">{entry.label}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <nav tabIndex="0" className="border border-2 bg-white invisible border-gray-800 rounded w-60 absolute left-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1">
                                <ul className="py-1">    
                                    {childMenu}  
                                </ul>
                            </nav>    
                        </div>
                    </div>    
               </li>
            }
        </>
    )
}