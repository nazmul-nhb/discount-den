import facebook from "../assets/facebook.gif";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { useTypewriter } from "react-simple-typewriter";

export default function HeroSection() {
	const [offerText] = useTypewriter({
		words: ["exclusive offers from our Facebook Page"],
		loop: true,
	});

	return (
		<div className="relative bg-gray-900 overflow-hidden my-8 rounded-lg">
			<div className="max-w-7xl mx-auto">
				<div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
					<div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
						<div className="sm:text-center lg:text-left">
							<h1 className="text-4xl tracking-tight space-x-3 font-extrabold text-gray-100 sm:text-5xl md:text-6xl">
								<span className="block xl:inline">
									Welcome to
								</span>
								<span className="block text-transparent bg-clip-text bg-gradient-to-tl from-bg-primary to-bg-secondary xl:inline">
									Discount Den
								</span>
							</h1>
							<p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
								Discover {offerText}
							</p>
							<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
								<div className="rounded-md shadow">
									<a
										href="#offers"
										className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-bg-primary hover:bg-bg-secondary md:py-4 md:text-lg md:px-10 transition-all duration-500"
									>
										<FaShoppingCart className="mr-2" />
										Shop Now
									</a>
								</div>
								<div className="mt-3 sm:mt-0 sm:ml-3">
									<a
										href="#offers"
										className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-bg-primary hover:text-white bg-discount-secondary hover:bg-bg-primary md:py-4 md:text-lg md:px-10 transition-all duration-500"
									>
										<FaSearch className="mr-2" />
										Explore
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
				<img
					className="h-40 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
					loading="eager"
					src={facebook}
					alt="Facebook Logo"
				/>
			</div>
		</div>
	);
}
