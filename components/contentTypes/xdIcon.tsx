import * as OutlinedIcon from '@heroicons/react/outline';

type XdIconProps = {
    entry: Record<string, unknown>;
    id?: string;
    className?: string;
}

const XDIcon = ({ entry, className = "", ...rest }: XdIconProps) => {
	let iconName = entry.iconName;
	const IconComponent = OutlinedIcon[iconName as keyof typeof OutlinedIcon] || OutlinedIcon['CogIcon']

	return (
		<>
			<IconComponent className={`${className} heroIcon`} {...rest} />
		</>
	)
}

export default XDIcon;