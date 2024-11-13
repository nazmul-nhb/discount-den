import {
	FaCcVisa,
	FaCcMastercard,
	FaCcAmex,
	FaCcDiscover,
	FaCcPaypal,
	FaCcApplePay,
} from "react-icons/fa";

export const CardPaymentOptions = () => {
	return (
		<div className="lg:w-1/3 mt-8 mb-12">
			<h3 className="text-lg sm:text-xl md:text-2xl font-bold text-morgul-primary mb-8">
				Cards We Accept!
			</h3>
			<div className="w-full grid grid-cols-3 gap-8 text-7xl mx-auto">
				<FaCcVisa
					title="VISA Card"
					className="text-blue-600 hover:scale-110 transition-all duration-500 shadow-sm shadow-bg-primary rounded-lg px-1 flex items-center justify-center border border-morgul-primary/15"
				/>
				<FaCcMastercard
					title="Master Card"
					className="text-red-500 hover:scale-110 transition-all duration-500 shadow-sm shadow-bg-primary rounded-lg px-1 flex items-center justify-center border border-morgul-primary/15"
				/>
				<FaCcAmex
					title="American Express"
					className="text-blue-800 hover:scale-110 transition-all duration-500 shadow-sm shadow-bg-primary rounded-lg px-1 flex items-center justify-center border border-morgul-primary/15"
				/>
				<FaCcDiscover
					title="Discover"
					className="text-orange-500 hover:scale-110 transition-all duration-500 shadow-sm shadow-bg-primary rounded-lg px-1 flex items-center justify-center border border-morgul-primary/15"
				/>
				<FaCcPaypal
					title="Paypal"
					className="text-blue-900 hover:scale-110 transition-all duration-500 shadow-sm shadow-bg-primary rounded-lg px-1 flex items-center justify-center border border-morgul-primary/15"
				/>
				<FaCcApplePay
					title="Apple Pay"
					className="text-black hover:scale-110 transition-all duration-500 shadow-sm shadow-bg-primary rounded-lg px-1 flex items-center justify-center border border-morgul-primary/15"
				/>
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
						className="bg-bg-secondary shadow-sm shadow-bg-primary rounded-lg p-2 flex items-center justify-center border border-morgul-primary/15 hover:scale-105 transition-all duration-500"
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