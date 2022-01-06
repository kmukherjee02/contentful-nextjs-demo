import ContentfulImage from '../contentful-image';

interface IXDImageWithTextProps {
	entry: Record<string, any>;
}

const XDImageWithText = ({entry}: IXDImageWithTextProps) => {
	
    const aboutOurCompanyImgText = (
        <div className='bg-white h-[160px] w-[210px] py-5 px-8 border-b-2 border-orange-light shadow-img-w-txt absolute bottom-[25px] left-[25px] lg:left-[-75px]'>
            <h2 className='text-7xl about-our-company-fill'>
				{entry.imageText?.match(/\d/g)}
			</h2>
            <h5>
				{entry.imageText?.match(/[^\d]/g)}
			</h5>
        </div>
    )
    
	return (
		<div className='relative'>
			<ContentfulImage
				src={entry.image.fields.file.url}
				width={entry.image.fields.file.details.image.width}
				height={entry.image.fields.file.details.image.height}
				alt={entry.image.fields.file.title}
			/>
			{(entry.imageText && /about/i.test(entry.name)) && aboutOurCompanyImgText} 
		</div>
	);
};

export default XDImageWithText;
