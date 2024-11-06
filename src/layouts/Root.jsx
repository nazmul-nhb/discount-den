import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
	return (
		<>
			<Navbar />
			<main className="min-h-[calc(100vh-64px)] mt-16 mx-auto px-2 sm:px-6 py-3 md:px-12">
				<Outlet />
			</main>
		</>
	);
};

export default Root;
