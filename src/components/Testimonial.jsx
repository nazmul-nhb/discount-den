import { getColorForFirstCharacter } from "color-generator-fl";
import PropTypes from "prop-types";
import { FaStar, FaStarHalf } from "react-icons/fa";

const Testimonial = ({ testimonial }) => {
	const textColor = getColorForFirstCharacter(testimonial.name);
	const bgColor = getColorForFirstCharacter(testimonial.name, 42);
	const mainBgColor = getColorForFirstCharacter(testimonial.name, 33);

	return (
		<div
			style={{ backgroundColor: mainBgColor }}
			className="shadow-md rounded-lg p-6 mx-4 my-2 w-80 flex-shrink-0"
		>
			<div className="flex items-center mb-4">
				{testimonial.image ? (
					<img
						src={testimonial.image}
						alt={testimonial.name}
						className="rounded-full w-12 h-12"
					/>
				) : (
					<div
						style={{ color: textColor, backgroundColor: bgColor }}
						className="rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold"
					>
						{testimonial.name[0]}
					</div>
				)}
				<div className="ml-4">
					<h3 className="font-semibold text-lg">
						{testimonial.name}
					</h3>
					<p className="text-gray-950 text-sm">{testimonial.role}</p>
				</div>
			</div>
			<p className="text-gray-200 mb-4">{testimonial.content}</p>
			<StarRating rating={testimonial.rating} />
		</div>
	);
};

const StarRating = ({ rating }) => {
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 !== 0;

	return (
		<div className="flex text-yellow-400">
			{[...Array(fullStars)].map((_, i) => (
				<FaStar key={i} />
			))}
			{hasHalfStar && <FaStarHalf />}
		</div>
	);
};

StarRating.propTypes = {
	rating: PropTypes.number.isRequired,
};

Testimonial.propTypes = {
	testimonial: PropTypes.object.isRequired,
};

export default Testimonial;
