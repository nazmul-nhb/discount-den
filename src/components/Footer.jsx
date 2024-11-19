import { useState } from "react";
import { Input, Button, message } from "antd";
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
	const [email, setEmail] = useState("");
	const [messageApi, contextHolder] = message.useMessage();

	const currentYear = new Date().getFullYear();

	const handleSubscription = () => {
		if (email.trim()) {
			messageApi.success("Subscribed successfully!");
			setEmail("");
		} else {
			messageApi.error("Please enter a valid email address!");
		}
	};

	return (
		<footer className="max-md:bg-discount-primary md:bg-wave bg-cover bg-bottom h-full text-white pt-8 pb-8 mt-16">
			{contextHolder}
			{/* Main Content */}
			<div className="max-w-screen-2xl mx-auto md:pt-6 px-8 lg:px-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Company Information */}
					<div>
						<h3 className="text-lg font-semibold mb-4">
							Our Company
						</h3>
						<ul className="space-y-2">
							<li>
								<a href="#" className="hover:text-gray-300">
									About Us
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-gray-300">
									Careers
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-gray-300">
									Press
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-gray-300">
									Blog
								</a>
							</li>
						</ul>
					</div>

					{/* Customer Service */}
					<div>
						<h3 className="text-lg font-semibold mb-4">
							Customer Service
						</h3>
						<ul className="space-y-2">
							<li>
								<a href="#" className="hover:text-gray-300">
									Contact Us
								</a>
							</li>
							<li>
								<a href="#faqs" className="hover:text-gray-300">
									FAQs
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-gray-300">
									Shipping & Returns
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-gray-300">
									Order Status
								</a>
							</li>
						</ul>
					</div>

					{/* Social Media Links */}
					<div>
						<h3 className="text-lg font-semibold mb-4">
							Connect With Us
						</h3>
						<div className="flex space-x-4">
							<a
								href="#"
								className="hover:text-blue-500 transition-all duration-300 hover:scale-125"
							>
								<FaFacebookF size={24} />
							</a>
							<a
								href="#"
								className="hover:text-sky-600 transition-all duration-300 hover:scale-125"
							>
								<FaTwitter size={24} />
							</a>
							<a
								href="#"
								className="hover:text-red-800 transition-all duration-300 hover:scale-125"
							>
								<FaInstagram size={24} />
							</a>
							<a
								href="#"
								className="hover:text-sky-500 transition-all duration-300 hover:scale-125"
							>
								<FaLinkedinIn size={24} />
							</a>
						</div>
					</div>

					{/* Newsletter Signup */}
					<div>
						<h3 className="text-lg font-semibold mb-4">
							Stay Updated
						</h3>
						<p className="mb-2">
							Subscribe to our newsletter for exclusive offers and
							updates.
						</p>
						<div className="flex md:items-center flex-col md:flex-row gap-2">
							<Input
								onChange={(e) => setEmail(e.target.value)}
								value={email.trim()}
								placeholder="Enter your email"
								id="email"
								name="email"
								className="flex-grow mr-2"
							/>
							<Button
								type="default"
								onClick={handleSubscription}
								className="font-semibold text-discount-primary"
							>
								Subscribe
							</Button>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="mt-12 pt-8 border-t border-gray-700">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p>
							&copy; {currentYear} Discount Den. All rights
							reserved.
						</p>
						<div className="mt-4 md:mt-0">
							<a href="#" className="mr-4 hover:text-gray-300">
								Privacy Policy
							</a>
							<a href="#" className="mr-4 hover:text-gray-300">
								Terms of Service
							</a>
							<a href="#" className="hover:text-gray-300">
								Sitemap
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
