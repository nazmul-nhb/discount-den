import { useState } from "react";
import { offers } from "../data/offers";
import Offer from "./Offer";
import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

const Offers = () => {
	const [visibleOffers, setVisibleOffers] = useState(offers.slice(0, 12));
	const [loading, setLoading] = useState(false);

	// Dummy loading state to display loading spinner
	const loadOffers = () => {
		setLoading(true);
		setTimeout(() => {
			setVisibleOffers(
				visibleOffers.length <= 12 ? offers : offers.slice(0, 12)
			);
			setLoading(false);
		}, 1000);
	};

	return (
		<section id="offers" className="w-full mx-auto mt-12">
			<h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-discount-primary animate-pulse text-center mb-12">
				Grab Exciting New Offers!
			</h3>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10">
				{visibleOffers.map((offer) => (
					<Offer key={offer.id} offer={offer} />
				))}
			</div>
			{offers.length > 12 && (
				<div className="mt-12 flex items-center justify-center">
					<Button
						className="text-lg font-bold text-bg-primary hover:text-white bg-discount-secondary hover:bg-bg-primary md:py-4 md:text-lg md:px-10 transition-all duration-500"
						size="large"
						onClick={loadOffers}
						icon={<PlusCircleOutlined />}
						loading={loading}
					>
						{visibleOffers.length <= 12
							? "More Offers"
							: "Less Offers"}
					</Button>
				</div>
			)}
		</section>
	);
};

export default Offers;
