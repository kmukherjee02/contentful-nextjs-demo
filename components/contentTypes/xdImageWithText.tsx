import { XDImageWthTextProps } from 'types';
import ContentfulImage from '@components/ContentfulImage';

const XDImageWithText = ({ entry }: XDImageWthTextProps) => {
	const { fields } = entry;

	const aboutOurCompanyImgText = (
		<div className='bg-white h-[160px] w-[210px] py-5 px-8 border-b-2 border-orange-light shadow-img-w-txt absolute bottom-[25px] left-[25px] lg:left-[-75px]'>
			<h2 className='text-7xl about-our-company-fill'>
				{fields?.imageText?.match(/\d/g)}
			</h2>
			<h5>{fields?.imageText?.match(/[^\d]/g)}</h5>
		</div>
	);

	return (
		<div className='relative'>
			{fields?.image?.fields?.file?.details?.image && (
				<ContentfulImage
					src={fields.image.fields.file.url}
					width={fields.image.fields.file.details.image.width}
					height={fields.image.fields.file.details.image.height}
					alt={fields.image.fields.title || 'image with text'}
				/>
			)}
			{fields?.imageText &&
				/about/i.test(fields.name as string) &&
				aboutOurCompanyImgText}
		</div>
	);
};

export default XDImageWithText;
