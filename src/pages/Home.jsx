import Cube from "../components/Cube";
import Features from "../components/Features";
import HeroSection from "../components/HeroSection";
import Offers from "../components/Offers";
import { BangladeshMFS, CardPaymentOptions } from "../components/Payment";

const Home = () => {
	return (
		<section className="relative">
			<HeroSection/>
			<Features />
			<div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-around mx-auto">
				<CardPaymentOptions />
				<Cube />
				<BangladeshMFS />
			</div>
			<Offers />
		</section>
	);
};

export default Home;
