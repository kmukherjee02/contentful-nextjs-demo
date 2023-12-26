import Link from 'next/link';
import ButtonAnimated from '@components/ButtonAnimated';
import { XDLinkProps } from 'types';
import cn from 'classnames';

const defaultClassnames: string =
	'inline-flex py-2 mr-2 text-lg cursor-pointer underline text-primary-normal';

const XDLink = ({ entry, className = defaultClassnames }: XDLinkProps) => {
	const { fields } = entry;

	const buttonClasses: string = '';
	const linkClasses: string = '';

	return (
		<>
			{fields?.isExternal ? (
				<a
					target={fields.target}
					className={`${fields.displayStyle} === 'Button' : ${buttonClasses}: ${linkClasses}`}
				>
					{fields.label}
				</a>
			) : (
				<>
					{fields?.displayStyle === 'Button' ? (
						<>
							<ButtonAnimated entry={entry} />
						</>
					) : (
						<Link
							className={cn(className, {
								'link-primary': fields?.theme === 'primary',
								'link-secondary': fields?.theme === 'secondary',
								'link-tertiary': fields?.theme === 'tertiary',
							})}
							href={fields?.href || "#"}
							target={fields?.target}
						>
							{fields?.label}
						</Link>
					)}
				</>
			)}
		</>
	);
};

export default XDLink;
