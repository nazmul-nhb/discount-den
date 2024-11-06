import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { MdContactMail } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { GiCompass } from "react-icons/gi";

const Navbar = () => {
	const [openNavbar, setOpenNavbar] = useState(false);
    const sidebarRef = useRef(null);
    
	// sidebar clicking in small devices
	useEffect(() => {
		const handleClickOutside = (e) => {
			if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
				setOpenNavbar(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [sidebarRef]);

	// classes for navbar links
	const navClasses = ({ isActive }) =>
		isActive
			? "font-bold border-b-2 border-white flex items-center gap-2"
			: "hover:border-b-2 border-b-2 border-transparent hover:border-white font-semibold flex items-center gap-2 transition-all duration-500 text-gray-400 hover:text-white";

	// navbar links
	const navigationItems = (
		<>
			<NavLink
				onClick={() => setOpenNavbar(false)}
				className={navClasses}
				to={"/"}
			>
				<FaHome className="sm:hidden" />
				Home
			</NavLink>
			<NavLink
				onClick={() => setOpenNavbar(false)}
				className={navClasses}
				to={"/contact"}
			>
				<MdContactMail className="sm:hidden" />
				Contact Us
			</NavLink>
		</>
	);

	return (
		<nav className="w-full bg-blue-900/80 text-white flex items-center justify-between gap-0 md:gap-4 mx-auto px-2 sm:px-6 py-3 md:px-12 fixed top-0 left-0 right-0 h-16 z-50">
			<div className="absolute inset-0 backdrop-filter backdrop-blur-lg -z-10"></div>
			<div className="flex items-center justify-start gap-2">
				<figure className="cursor-pointer inset-0">
					<img
						className="w-9 sm:w-10 hover:animate-pulse"
						src="/logo.png"
						loading="eager"
						alt="Logo"
					/>
				</figure>
				<NavLink
					className="text-2xl sm:text-3xl font-semibold text-blue-50 hover:text-blue-300 transition-all duration-500"
					to={"/"}
				>
					Minas Morgul
				</NavLink>
			</div>
			<div
				ref={sidebarRef}
				className="flex justify-between items-center text-sm xl:text-base"
			>
				<GiCompass
					title="Navigate"
					className={`sm:hidden text-4xl hover:text-blue-300 cursor-pointer z-50 transition-all duration-1000 ${
						openNavbar && "rotate-[225deg] text-blue-400"
					}`}
					onClick={() => setOpenNavbar(!openNavbar)}
				/>
				<ul
					className={`w-3/5 sm:w-full flex flex-col sm:flex-row justify-start sm:justify-center gap-2 sm:gap-5 text-base sm:text-lg font-semibold transition-all duration-700 absolute sm:static sm:shadow-none h-auto pl-6 p-4 sm:p-0 ${
						openNavbar
							? "right-0 top-16 bg-blue-900/80 flex z-10"
							: "-right-full top-16 shadow-none"
					}`}
				>
					<div className="absolute inset-0 backdrop-filter backdrop-blur-lg -z-10"></div>
					{navigationItems}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
