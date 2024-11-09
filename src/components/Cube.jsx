import "../assets/cube.scss";
import genericOfferImage from "../assets/offer.png";

const Cube = () => {
	return (
		<div className="stage-cube-content">
			<div className="cubeSpinner">
				<div className="offer1">
					<img
						className="aspect-square p-6"
						src={genericOfferImage}
						alt="Offer"
					/>
				</div>
				<div className="offer2">
					<img
						src={genericOfferImage}
						className="-rotate-90 aspect-square p-6"
						alt="Offer"
					/>
				</div>
				<div className="offer3">
					<img
						src={genericOfferImage}
						className="-rotate-180 aspect-square p-6"
						alt="Offer"
					/>
				</div>
				<div className="offer4">
					<img
						className="aspect-square p-6"
						src={genericOfferImage}
						alt="Offer"
					/>
				</div>
				<div className="offer5">
					<img
						className="aspect-square p-6"
						src={genericOfferImage}
						alt="Offer"
					/>
				</div>
				<div className="offer6">
					<img
						className="aspect-square p-6"
						src={genericOfferImage}
						alt="Offer"
					/>
				</div>
			</div>
		</div>
	);
};

export default Cube;
