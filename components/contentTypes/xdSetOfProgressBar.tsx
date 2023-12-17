import XDProgressBar from '@components/contentTypes/xdProgressBar';
import { XDSetOfProgressBarProps } from 'types';

const XDSetOfProgressBar = ({ entry }: XDSetOfProgressBarProps) => {
	const { fields } = entry;

	const progressBars = fields.progressBars.map((pBar) => (
		<XDProgressBar entry={pBar} key={pBar.sys.id} />
	));

	return <>{progressBars}</>;
};

export default XDSetOfProgressBar;
