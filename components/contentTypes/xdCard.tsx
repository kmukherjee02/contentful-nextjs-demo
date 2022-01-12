import XDLink from "./xdLink";
import cn from 'classnames';
import XDIcon from './xdIcon';
import { initMouseInCardAnimation, initMouseOutCardAnimation } from "../animation/cardAnimation";

interface IXDCardProps {
	entry: Record<string, any>;
    id: string;
}

export default function XDCard({ entry, id }: IXDCardProps) {
    const iconSize = 'h-14 w-14'
    const cardId = `c${id}`
    const iconId = entry.icon ? `i${entry.icon.sys.id}` : ''
    const cardSelector = `#${cardId}`; //selector must start with a letter
    const iconSelector = entry.icon ? `${cardSelector} #${iconId}` : ''

    return (
        <div
            id={cardId}
            className="xl:w-1/3 md:w-1/2 p-3"
            onMouseEnter={() => initMouseInCardAnimation(cardSelector, iconSelector)}
            onMouseLeave={() => initMouseOutCardAnimation(cardSelector, iconSelector)}
        >
            <div className="py-[35px] px-[30px] rounded-lg shadow-lg">
                {entry.icon && (
                    <div className={cn(`flex items-center justify-center rounded-full text-orange mb-4 ${iconSize}`, {
                        'mx-auto': entry.alignment === 'center',
                        'ml-0 mr-auto': entry.alignment === 'left',
                        'mr-0 ml-auto': entry.alignment === 'right',
                    })}>
                        <XDIcon className={`${iconSize} ml-1.5 stroke-1 group-hover:rotate-y-180 ease-in duration-500 transition-transform will-change-transform`} id={iconId} entry={entry.icon.fields} />
                    </div>
                )}
                {entry.title && (
                    <h3 
                        className={cn("mt-12 mb-4", {
                            'text-center': entry.alignment === 'center',
                            'text-left': entry.alignment === 'left',
                            'text-right': entry.alignment === 'right',
                    })}>
                        {entry.title}
                    </h3>
                )}
                {entry.description && (
                    <p className={cn("", {
                        'text-center': entry.alignment === 'center',
                        'text-left': entry.alignment === 'left',
                        'text-right': entry.alignment === 'right',
                    })}>
                        {entry.description}
                    </p>
                )}
                {entry.link && (
                    <div className={cn('flex font-bold mt-4', {
                        'justify-center': entry.alignment === 'center',
                        'justify-start': entry.alignment === 'left',
                        'justify-end': entry.alignment === 'right',
                    })}>
                        <XDLink entry={entry.link.fields} className={'inline-flex py-2 mr-2'} />
                    </div>
                )}
            </div>
        </div>
    )
}