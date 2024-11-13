import { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import genericOfferImage from "../assets/offer.png";

const Offer = ({ offer }) => {
	// State to manage modal visibility
	const [isModalOpen, setIsModalOpen] = useState(false);

	// Handlers to open and close the modal
	const showModal = () => setIsModalOpen(true);
	const handleCancel = () => setIsModalOpen(false);

	return (
		<div className="p-4 w-full max-w-xs bg-morgul-primary/15 rounded-lg shadow-md shadow-morgul-primary hover:shadow-lg hover:shadow-morgul-primary transition-all duration-300 mx-auto">
			{/* Image */}
			<figure className="w-full h-48 rounded-t-lg relative">
				<img
					loading="eager"
					src={genericOfferImage}
					alt={offer.title}
					className="w-full h-full object-cover rounded-t-lg"
				/>
				<figcaption className="text-white absolute bottom-2 font-semibold text-2xl w-full text-center">
					{offer.title}
				</figcaption>
			</figure>
			{/* Button to open modal */}
			<div className="mt-4 flex justify-center">
				<Button
					type="primary"
					icon={<InfoCircleOutlined />}
					onClick={showModal}
					className="w-full bg-bg-primary py-5 font-semibold md:text-lg hover:-translate-y-1 focus:translate-y-1 active:translate-y-0 transition-all duration-300"
				>
					View Offer
				</Button>
			</div>

			{/* Modal with offer details */}
			<Modal
				title={<span className="text-white">{offer.title}</span>}
				open={isModalOpen}
				onCancel={handleCancel}
				footer={null}
				className="rounded-lg text-white"
				styles={{
					body: {
						backgroundColor: "#124e65",
						padding: "24px",
						borderRadius: "8px",
					},
				}}
			>
				<div className="space-y-4">
					{/* Image */}
					<figure className="w-full h-56 rounded-md overflow-hidden">
						<img
							loading="eager"
							src={genericOfferImage}
							alt={offer.title}
							className="w-full h-full object-cover"
						/>
					</figure>

					{/* Discount and Expiry Date */}
					<div className="flex items-center justify-between">
						<p className="text-xl font-semibold text-yellow-400">
							{offer.discount}
						</p>
						<span className="text-sm text-gray-300">
							Expires: {offer.expiryDate}
						</span>
					</div>
					<p className="text-gray-200 leading-relaxed">
						{offer.description}
					</p>

					{/* Offer Details */}
					<div className="border-t border-gray-600 pt-4">
						<div className="flex justify-between items-center">
							<span className="font-medium text-gray-300">
								Category:
							</span>
							<span className="text-gray-400">
								{offer.category}
							</span>
						</div>
					</div>

					{/* External Link Button */}
					<Button
						href={offer.link}
						type="primary"
						target="_blank"
						rel="noopener noreferrer"
						className="w-full font-semibold bg-yellow-500 text-gray-900 border-none shadow-md shadow-yellow-500 hover:shadow-morgul-secondary hover:-translate-y-1 focus:translate-y-1 focus:shadow-sm transition-all duration-300 active:translate-y-0"
					>
						Claim Offer
					</Button>
				</div>
			</Modal>
		</div>
	);
};

// Prop validation for the offer object
Offer.propTypes = {
	offer: PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		expiryDate: PropTypes.string.isRequired,
		link: PropTypes.string.isRequired,
		discount: PropTypes.string.isRequired,
		category: PropTypes.string.isRequired,
		source: PropTypes.string.isRequired,
	}).isRequired,
};

export default Offer;
