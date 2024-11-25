import "../assets/cube.scss";
import cyc from "../assets/offers/cyc.jpg";
import kurtiistic from "../assets/offers/kurtiistic.jpg";
import perfecto from "../assets/offers/perfecto.png";
import lira from "../assets/offers/lira.jpg";
import lavishta from "../assets/offers/lavishta.jpg";
import hermizon from "../assets/offers/hermizon.jpg";

const Cube = () => {
	return (
		<div className="stage-cube-content mt-12 cursor-pointer hover:scale-105 transition-all duration-500">
			<div className={`cubeSpinner`}>
				<div className="offer1">
					<img
						loading="eager"
						className="aspect-square p-6"
						src={cyc}
						alt="Offer"
					/>
				</div>
				<div className="offer2">
					<img
						loading="eager"
						src={kurtiistic}
						className="-rotate-90 aspect-square p-6"
						alt="Offer"
					/>
				</div>
				<div className="offer3">
					<img
						loading="eager"
						src={perfecto}
						className="-rotate-180 aspect-square p-6"
						alt="Offer"
					/>
				</div>
				<div className="offer4">
					<img
						className="aspect-square p-6"
						loading="eager"
						src={lira}
						alt="Offer"
					/>
				</div>
				<div className="offer5">
					<img
						loading="eager"
						className="aspect-square p-6"
						src={lavishta}
						alt="Offer"
					/>
				</div>
				<div className="offer6">
					<img
						loading="eager"
						className="aspect-square p-6"
						src={hermizon}
						alt="Offer"
					/>
				</div>
			</div>
		</div>
	);
};

export default Cube;
