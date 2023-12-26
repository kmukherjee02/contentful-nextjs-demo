import XDProgressBar from '@components/contentTypes/xdProgressBar';
import { XDSetOfProgressBarProps } from 'types';

const XDSetOfProgressBar = ({ entry }: XDSetOfProgressBarProps) => {
	const { fields } = entry;

	const progressBars = fields?.progressBars?.map((pBar) => {
		if (pBar) return <XDProgressBar entry={pBar} key={pBar.sys.id} />;
	});

	return <>{progressBars}</>;
};

export default XDSetOfProgressBar;
