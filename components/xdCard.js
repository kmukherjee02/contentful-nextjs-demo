import XDLink from "./xdLink";
import cn from 'classnames';
import XDIcon from './xdIcon';

export default function XDCard({ entry }) {
    console.log('xdCard entry', entry);
    const { iconName } = entry.icon.fields
    return (
        <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg shadow-lg">
                <div className={cn("w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4", {
                    'mx-auto': entry.alignment === 'center',
                    'ml-0 mr-auto': entry.alignment === 'left',
                    'mr-0 ml-auto': entry.alignment === 'right',
                })}>
                    <XDIcon className="stroke-1" entry={entry.icon.fields} />
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