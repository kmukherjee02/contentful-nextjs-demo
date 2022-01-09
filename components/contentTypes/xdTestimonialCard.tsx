import StarIcon from '../../public/icons/star.svg';
import HalfStarIcon from '../../public/icons/half-star.svg';
import {getAbsoluteImageUrlInWebp} from '@lib/utilities';

interface IXDTestimonialCardProps {
	entry: Record<string, any>;
}
const XDTestimonialCard = ({ entry }: IXDTestimonialCardProps) => {
	const { testimonial, receivedFrom }: Record<string, any> = entry;
	let { rating }: Record<string, any> = entry;
	const { name, designation, image }: Record<string, any> = receivedFrom.fields;
	const personImgSrc: string = getAbsoluteImageUrlInWebp(image.fields.file.url);
	const starGold: string = '#ffce39';

	const convertNumOfStarsToArr = () : number[] => {
		rating > 5 && (rating = 5);
		rating <= 0 && (rating = 0.5);
		const numOfStarsArr = [...Array(Math.floor(rating)).keys()];
		!Number.isInteger(rating) && numOfStarsArr.push(0.5);
		return numOfStarsArr;
	};
	const stars: JSX.Element[] = convertNumOfStarsToArr().map((star: number, i: number) => (
		<li className='inline-block' key={i}>
			{star === 0.5 ? (
				<HalfStarIcon fill={starGold} height={25} width={25} />
			) : (
				<StarIcon fill={starGold} height={25} width={25} />
			)}
		</li>
	));

	return (
		<div className='bg-gray-50 rounded-md py-8 px-4 relative'>
			<div className='text-center mb-4'>
				<ul>
					{stars}
				</ul>
			</div>
			<div className='text-center mb-8 h-[100px]'>
				<p className='testimonial-text text-grey-500 italic'>
					{testimonial}
				</p>
			</div>
			<div className='h-[90px] w-[90px] mx-auto mt-12 mb-4 border-4 border-white border-b-primary-normal border-l-primary-normal rounded-full overflow-hidden'>
				{/* next/image not used due to issues w/ Owl carousel */}
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img src={personImgSrc} alt={`photo of ${name}`} />
			</div>
			<div className='text-center'>
				<h3>
					{name}
				</h3>
				<p className='font-medium'>
					{designation}
				</p>
			</div>
		</div>
	);
};

export default XDTestimonialCard;
