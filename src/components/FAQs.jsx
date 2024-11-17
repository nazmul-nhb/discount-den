import { Collapse } from "antd";
import { faqs } from "../data/faqs";
import {
	PlusOutlined,
	MinusOutlined,
	InfoCircleOutlined,
} from "@ant-design/icons";

const { Panel } = Collapse;

export default function FAQs() {
	return (
		<section id="faqs" className="w-full mx-auto mt-12">
			<h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-morgul-primary text-center mb-12">
				Frequently Asked Questions
			</h3>
			<Collapse
				style={{
					border: "none",
				}}
				className="text-white"
				expandIcon={({ isActive }) =>
					isActive ? (
						<MinusOutlined
							style={{
								color: "white",
								fontSize: "20px",
								fontWeight: "bold",
							}}
						/>
					) : (
						<PlusOutlined
							style={{
								color: "white",
								fontSize: "20px",
								fontWeight: "bold",
							}}
						/>
					)
				}
				expandIconPosition="end"
			>
				{faqs.map((faq, index) => (
					<Panel
						style={{
							borderRadius: 8,
						}}
						className="bg-bg-primary"
						header={
							<span className="flex items-center text-xl font-medium text-gray-100">
								<InfoCircleOutlined
									style={{
										color: "white",
										marginRight: "8px",
									}}
								/>
								{faq.question}
							</span>
						}
						key={index}
					>
						<p className="text-gray-200 text-lg">{faq.answer}</p>
					</Panel>
				))}
			</Collapse>
		</section>
	);
}
