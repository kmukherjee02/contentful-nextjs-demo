import * as OutlinedIcon from '@heroicons/react/outline';

const XDIcon = ({ entry, className, ...rest }) => {
	let iconName = entry.iconName;
	const IconComponent = OutlinedIcon[iconName] || OutlinedIcon['CogIcon']

	return (
		<>
			<IconComponent className={`${className} heroIcon`} {...rest} />
		</>
	)
}

export default XDIcon;