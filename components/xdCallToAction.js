import Link from "next/link"

export default function XDCallToAction({entry}){
    return (
        <>
           {entry.fields.link ? 
                <Link href={`${entry.fields.link}`}>
                    <button className="bg-primary-normal hover:bg-primary-hover text-white font-bold py-3 px-8 rounded">
                        {entry.fields.name}
                    </button>
                </Link>
            : 
                <button className="bg-primary-normal hover:bg-primary-hover text-white font-bold py-3 px-8 rounded">
                    {entry.fields.name}
                </button>
            }
        </>
    )
}