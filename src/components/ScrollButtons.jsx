import { useState, useEffect } from "react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

const ScrollButtons = () => {
	const [showTopButton, setShowTopButton] = useState(false);
	const [showBottomButton, setShowBottomButton] = useState(false);

	const handleScroll = () => {
		const scrollTop = window.scrollY || document.documentElement.scrollTop;
		const scrollHeight = document.documentElement.scrollHeight;
		const clientHeight = document.documentElement.clientHeight;

		setShowTopButton(scrollTop > 160);
		setShowBottomButton(scrollTop + clientHeight < scrollHeight - 320);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const scrollToBottom = () => {
		window.scrollTo({
			top: document.documentElement.scrollHeight,
			behavior: "smooth",
		});
	};

	return (
		<div
			className={`fixed right-1 bottom-4 text-teal-700 text-3xl md:text-4xl flex flex-col gap-1`}
		>
			{showTopButton && (
				<button
					onClick={scrollToTop}
					className={`cursor-pointer hover:text-discount-secondary transition-all duration-500`}
				>
					<IoIosArrowDropup />
				</button>
			)}

			{showBottomButton && (
				<button
					onClick={scrollToBottom}
					className={`cursor-pointer hover:text-discount-secondary transition-all duration-500`}
				>
					<IoIosArrowDropdown />
				</button>
			)}
		</div>
	);
};

export default ScrollButtons;
