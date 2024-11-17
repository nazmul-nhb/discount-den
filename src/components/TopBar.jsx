import { useState, useEffect } from "react";
import { FaPhone, FaWhatsapp, FaFacebookF, FaEnvelope } from "react-icons/fa";

const TopBar = () => {
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		const controlTopBar = () => {
			if (typeof window !== "undefined") {
				if (window.scrollY > lastScrollY) {
					// if scroll down hide the topbar
					setIsVisible(false);
				} else {
					// if scroll up show the topbar
					setIsVisible(true);
				}

				// remember current page location to use in the next move
				setLastScrollY(window.scrollY);
			}
		};
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", controlTopBar);

			// cleanup function
			return () => {
				window.removeEventListener("scroll", controlTopBar);
			};
		}
	}, [lastScrollY]);

	return (
		<div
			className={`bg-gray-800 text-white transition-all duration-500 h-10 ${
				isVisible ? "top-0 hidden sm:block" : "-top-12"
			} fixed w-full z-50`}
		>
			<div className="mx-auto px-4 sm:px-6 md:px-8 py-2">
				<div className="flex flex-wrap justify-between items-center">
					<div className="flex items-center space-x-4">
						<a
							href="tel:+8801623732187"
							className="flex items-center hover:text-gray-300"
						>
							<FaPhone className="mr-2" />
							<span className="hidden sm:inline">
								+880 1623 732 187
							</span>
						</a>
						<a
							href="https://wa.me/8801623732187"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center hover:text-gray-300"
						>
							<FaWhatsapp className="mr-2" />
							<span className="hidden sm:inline">WhatsApp</span>
						</a>
					</div>
					<div className="flex items-center space-x-4">
						<a
							href="https://facebook.com"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center hover:text-gray-300"
						>
							<FaFacebookF className="mr-2" />
							<span className="hidden sm:inline">Facebook</span>
						</a>
						<a
							href="mailto:info@discount-den.com"
							className="flex items-center hover:text-gray-300"
						>
							<FaEnvelope className="mr-2" />
							<span className="hidden sm:inline">
								info@discount-den.com
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
