import {
	FaCcVisa,
	FaCcMastercard,
	FaCcAmex,
	FaCcDiscover,
} from "react-icons/fa";

export const CardPaymentOptions = () => {
	return (
		<div className="lg:w-1/3 mt-8 mb-12">
			<h3 className="text-lg sm:text-xl md:text-2xl font-bold text-morgul-primary mb-8">
				Cards We Accept!
			</h3>
			<div className="w-full grid grid-cols-2 gap-8 text-6xl mx-auto">
				<FaCcVisa className="text-blue-600" />
				<FaCcMastercard className="text-red-500" />
				<FaCcAmex className="text-blue-400" />
				<FaCcDiscover className="text-orange-500" />
			</div>
		</div>
	);
};

export const BangladeshMFS = () => {
	const mfsOptions = [
		{ name: "bKash", logo: "src/assets/mfs/bkash.svg" },
		{ name: "Nagad", logo: "src/assets/mfs/nagad.svg" },
		{ name: "Upay", logo: "src/assets/mfs/upay.png" },
		{ name: "Rocket", logo: "src/assets/mfs/rocket.png" },
	];

	return (
		<div className="lg:w-1/3 mt-8 mb-12">
			<h3 className="text-lg sm:text-xl md:text-2xl font-bold text-morgul-primary mb-8">
				MFS Payments We Accept!
			</h3>
			<div className="w-full grid grid-cols-2 gap-8">
				{mfsOptions.map((option) => (
					<figure
						key={option.name}
						title={option.name}
						className="shadow-sm shadow-bg-primary rounded-lg p-2 flex items-center justify-center border border-morgul-primary/15"
					>
						<img
							src={option.logo}
							alt={`${option.name} logo`}
							className="w-24"
						/>
					</figure>
				))}
			</div>
		</div>
	);
};
