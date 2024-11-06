import { Outlet } from "react-router-dom";

const Root = () => {
	return (
		<>
			<main className="min-h-[calc(100vh-64px)]">
				<Outlet />
			</main>
		</>
	);
};

export default Root;
