import { useState } from "react";
import { ImCross } from "react-icons/im";
import facebook from "../assets/facebook.gif";
import { useTypewriter } from "react-simple-typewriter";

const Facebook = () => {
	const [hide, setHide] = useState(false);

	const [offerText] = useTypewriter({
		words: ["Explore Latest Offers from Our Facebook Page"],
		loop: true,
	});

	return (
		<div
			className={
				hide
					? "hidden"
					: "absolute top-2 left-1/2 -translate-x-1/2 z-50 animate-growShrink"
			}
		>
			<figure className="relative w-44">
				<img className="w-full min-w-44 aspect-square" src={facebook} alt="Facebook" />
				<figcaption className="text-center font-semibold text-xl cursor-pointer text-teal-100">
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://fb.com"
					>
						{offerText}
					</a>
				</figcaption>
				<ImCross
					onClick={() => setHide(true)}
					title="Close"
					className="absolute top-2 right-2 font-bold text-xl cursor-pointer text-red-600"
				/>
			</figure>
		</div>
	);
};

export default Facebook;
