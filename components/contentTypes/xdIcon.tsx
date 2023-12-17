import * as OutlinedIcon from '@heroicons/react/outline';
import { XDIconProps } from 'types';


const XDIcon = ({ entry, className = "", id }: XDIconProps) => {
    const { fields } = entry;
	let iconName = fields.iconName;

	const IconComponent = OutlinedIcon[iconName as keyof typeof OutlinedIcon] || OutlinedIcon['CogIcon']

	return (
		<>
			<IconComponent className={`${className} heroIcon`} id={id} />
		</>
	)
}

export default XDIcon;