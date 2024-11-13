import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";

const Root = () => {
	return (
		<>
			<header className="w-full mx-auto">
				<TopBar />
				<Navbar />
			</header>
			<main className="min-h-[calc(100vh-64px)] w-full mt-24 mx-auto p-4 sm:px-6 md:px-12">
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default Root;
