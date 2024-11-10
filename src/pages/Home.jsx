import Cube from "../components/Cube";
import Offers from "../components/Offers";

const Home = () => {
	return (
		<section className="flex flex-col items-center">
			<div className="w-full">
				<Cube />
			</div>
			<Offers />
		</section>
	);
};

export default Home;
