import { FaShippingFast, FaLock, FaHeadset } from "react-icons/fa";

const features = [
	{
		icon: <FaShippingFast />,
		title: "Free Shipping",
		description: "On orders over $50",
	},
	{
		icon: <FaLock />,
		title: "Secure Payments",
		description: "100% secure transactions",
	},
	{
		icon: <FaHeadset />,
		title: "24/7 Support",
		description: "Dedicated support team",
	},
];

const Features = () => {
	return (
		<section className="mt-8 mb-20">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
				{features.map((feature, index) => (
					<div
						key={index}
						className="bg-bg-secondary/10 border border-bg-secondary/20 p-6 rounded-lg shadow-md shadow-morgul-primary hover:scale-105 transition-all duration-500 flex items-center space-x-4"
					>
						<div className="text-3xl text-morgul-primary">
							{feature.icon}
						</div>
						<div>
							<h3 className="text-lg font-semibold">
								{feature.title}
							</h3>
							<p className="text-gray-600">
								{feature.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Features;
