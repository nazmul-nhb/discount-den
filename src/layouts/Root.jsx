import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
	return (
		<>
			<Navbar />
			<main className="min-h-[calc(100vh-64px)] w-full mt-16 mx-auto p-4 sm:px-6 md:px-12">
				<Outlet />
			</main>
		</>
	);
};

export default Root;
