import XDCallToAction from '@components/contentTypes/xdCallToAction';
import { XDSetOfCallToActionProps } from 'types';

const XDSetOfCallToAction = ({ entry }: XDSetOfCallToActionProps) => {
	const { fields } = entry;

	const setOfActions = fields.setOfCta.map((cta) => (
		<XDCallToAction entry={cta} key={cta.sys.id} />
	));

    
	return <>{setOfActions}</>;
};

export default XDSetOfCallToAction;
