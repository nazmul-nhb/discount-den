import Cube from "../components/Cube";
import Features from "../components/Features";
import HeroSection from "../components/HeroSection";
import Offers from "../components/Offers";
import { BangladeshMFS, CardPaymentOptions } from "../components/Payment";
import Testimonials from "../components/Testimonials";

const Home = () => {
	return (
		<section className="relative">
			<HeroSection />
			<Features />
			<div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-around mx-auto">
				<CardPaymentOptions />
				<Cube />
				<BangladeshMFS />
			</div>
			<Offers />
			<Testimonials />
		</section>
	);
};

export default Home;
