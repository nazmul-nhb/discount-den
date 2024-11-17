import { Form, Input, Button, message } from "antd";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";

const { TextArea } = Input;

const Contact = () => {
	const [form] = Form.useForm();
	const [messageApi, contextHolder] = message.useMessage();

	const onFinish = (info) => {
		messageApi.success(
			`Message sent! We will contact you soon ${info.name}!`
		);

		form.resetFields();
	};
	return (
		<section className="sm:mt-12">
			{contextHolder}
			<div className="bg-bg-secondary/75 shadow-md rounded-lg overflow-hidden">
				<div className="md:flex">
					{/* Contact Form */}
					<div className="md:w-1/2 p-6 text-discount-primary">
						<h2 className="text-2xl font-semibold mb-6">
							Send Us a Message
						</h2>
						<Form form={form} layout="vertical" onFinish={onFinish}>
							<Form.Item
								name="name"
								label="Name"
								rules={[
									{
										required: true,
										message: "Please enter your name",
									},
								]}
							>
								<Input
									size="large"
									placeholder="Enter your name"
								/>
							</Form.Item>
							<Form.Item
								name="email"
								label="Email"
								rules={[
									{
										required: true,
										type: "email",
										message: "Please enter a valid email",
									},
								]}
							>
								<Input
									size="large"
									placeholder="Enter your email"
								/>
							</Form.Item>
							<Form.Item
								name="subject"
								label="Subject"
								rules={[
									{
										required: true,
										message: "Please enter a subject",
									},
								]}
							>
								<Input
									size="large"
									placeholder="Enter a message subject"
								/>
							</Form.Item>
							<Form.Item
								name="message"
								label="Message"
								rules={[
									{
										required: true,
										message: "Please enter your message",
									},
								]}
							>
								<TextArea
									size="large"
									placeholder="Write your message"
									rows={4}
								/>
							</Form.Item>
							<Form.Item>
								<Button
									type="primary"
									htmlType="submit"
									className="bg-discount-primary shadow-md shadow-discount-primary transition-all duration-500"
								>
									Send Message
								</Button>
							</Form.Item>
						</Form>
					</div>

					{/* Contact Information */}
					<div className="md:w-1/2 bg-bg-primary/75 text-white p-6">
						<h2 className="text-2xl font-semibold mb-6">
							Contact Information
						</h2>
						<div className="space-y-4">
							<p className="flex items-center">
								<FaMapMarkerAlt className="mr-2" />
								Discount Den, SS Road, Sirajganj
							</p>
							<p className="flex items-center">
								<FaPhone className="mr-2" />
								+880 1623 732 187
							</p>
							<p className="flex items-center">
								<FaEnvelope className="mr-2" />
								info@discount.com
							</p>
							<p className="flex items-center">
								<FaClock className="mr-2" />
								Mon - Fri: 9:00 AM - 5:00 PM
							</p>
						</div>

						{/* Map */}
						<div className="mt-6 flex gap-4 flex-col md:flex-row justify-between">
							<h3 className="flex text-xl font-semibold mb-4">
								<FaMapLocation className="mr-2" /> Our Location
							</h3>
							<div className="p-1 border aspect-square md:w-80 lg:w-96 rounded-lg">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29054.487450517685!2d89.6994811!3d24.45734415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdc1df830dba1b%3A0x58f0cbb092e78b62!2sSirajganj!5e0!3m2!1sen!2sbd!4v1731497139056!5m2!1sen!2sbd"
									width="100%"
									height="100%"
									loading="eager"
									className="rounded-lg"
									referrerPolicy="no-referrer-when-downgrade"
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
