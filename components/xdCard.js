import XDLink from "./xdLink";
import cn from 'classnames'

export default function XDCard({ entry }) {
    console.log('xdCard entry', entry);
    return (
        <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg shadow-lg">
                <div className={cn("w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4", {
                    'mx-auto': entry.alignment === 'center',
                    'ml-0 mr-auto': entry.alignment === 'left',
                    'mr-0 ml-auto': entry.alignment === 'right',
                })}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                        <circle cx="6" cy="6" r="3"></circle>
                        <circle cx="6" cy="18" r="3"></circle>
                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                </div>
                <h2 className={cn("text-lg text-gray-900 font-medium title-font mb-2", {
                    'text-center': entry.alignment === 'center',
                    'text-left': entry.alignment === 'left',
                    'text-right': entry.alignment === 'right',
                })}>{entry.title}</h2>
                <p className={cn("leading-relaxed text-base", {
                    'text-center': entry.alignment === 'center',
                    'text-left': entry.alignment === 'left',
                    'text-right': entry.alignment === 'right',
                })}>{entry.description}</p>
                <div className={cn('flex', {
                    'justify-center': entry.alignment === 'center',
                    'justify-start': entry.alignment === 'left',
                    'justify-end': entry.alignment === 'right',
                })}>
                    <XDLink entry={entry.link.fields} />
                </div>
            </div>
        </div>
    )
}