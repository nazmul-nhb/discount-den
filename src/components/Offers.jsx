import { offers } from "../data/offers";
import Offer from "./Offer";

const Offers = () => {
	return (
		<section id="offers" className="w-full mx-auto mt-12">
			<h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-discount-primary animate-pulse text-center mb-12">
				Enjoy Exciting New Offers!
			</h3>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10">
				{offers.map((offer) => (
					<Offer key={offer.id} offer={offer} />
				))}
			</div>
		</section>
	);
};

export default Offers;
