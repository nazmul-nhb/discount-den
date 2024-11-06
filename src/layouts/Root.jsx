import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
	return (
		<>
			<Navbar />
			<main className="min-h-[calc(100vh-64px)]">
				<Outlet />
			</main>
		</>
	);
};

export default Root;
