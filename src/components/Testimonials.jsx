import Marquee from "react-fast-marquee";
import { testimonials } from "../data/testimonials";
import Testimonial from "./Testimonial";

const Testimonials = () => {
	return (
		<section className="w-full mx-auto mt-16">
			<h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-morgul-primary text-center mb-12">
				What Our Savvy Shoppers Say
			</h3>
			<Marquee pauseOnHover={true} gradient={false} speed={40}>
				{testimonials.map((testimonial) => (
					<Testimonial
						key={testimonial.id}
						testimonial={testimonial}
					/>
				))}
			</Marquee>
		</section>
	);
};

export default Testimonials;
