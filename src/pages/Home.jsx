import Cube from "../components/Cube";
import Features from "../components/Features";
import Offers from "../components/Offers";

const Home = () => {
	return (
		<section className="flex flex-col items-center">
			<div className="w-full mt-12">
				<Cube />
			</div>
			<Features />
			<Offers />
		</section>
	);
};

export default Home;
