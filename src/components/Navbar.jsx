import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { MdContactMail } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { GiCompass } from "react-icons/gi";

const Navbar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isNavbarVisible, setIsNavbarVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [navbarAtTop, setNavbarAtTop] = useState(true);

	const sidebarRef = useRef(null);

	// Close sidebar when clicking outside
	useEffect(() => {
		const handleClickOutside = (e) => {
			if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
				setIsSidebarOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [sidebarRef]);

	// Handle scroll behavior for navbar and topbar
	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			setNavbarAtTop(scrollY === 0);

			if (scrollY > lastScrollY) {
				setIsNavbarVisible(false);
			} else {
				setIsNavbarVisible(true);
			}
			setLastScrollY(scrollY);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [lastScrollY]);

	// Classes for navbar links
	const navClasses = ({ isActive }) =>
		isActive
			? "font-bold border-b-2 border-white flex items-center gap-2"
			: "hover:border-b-2 border-b-2 border-transparent hover:border-white font-semibold flex items-center gap-2 transition-all duration-500 text-morgul-secondary hover:text-white";

	// Navbar links
	const navigationItems = (
		<>
			<NavLink
				onClick={() => setIsSidebarOpen(false)}
				className={navClasses}
				to={"/"}
			>
				<FaHome className="sm:hidden" />
				Home
			</NavLink>
			<NavLink
				onClick={() => setIsSidebarOpen(false)}
				className={navClasses}
				to={"/contact"}
			>
				<MdContactMail className="sm:hidden" />
				Contact Us
			</NavLink>
		</>
	);

	return (
		<nav
			className={`bg-bg-primary/80 text-white flex items-center justify-between gap-1 md:gap-4 px-4 sm:px-6 py-3 md:px-8 h-16 fixed left-1/2 transform -translate-x-1/2 z-40 backdrop-blur-sm backdrop-filter transition-all duration-700 ${
				isSidebarOpen || !isNavbarVisible
					? "w-full top-0 rounded-none"
					: navbarAtTop
					? "w-[96%] sm:w-full top-2 sm:top-10 rounded-full sm:rounded-none shadow-md shadow-bg-primary"
					: "w-full top-0 sm:top-10"
			}`}
		>
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
					className="text-xl sm:text-2xl font-semibold hover:text-morgul-secondary transition-all duration-500"
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
						isSidebarOpen && "rotate-[225deg] text-blue-400"
					}`}
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
				/>
				<ul
					className={`w-3/5 sm:w-full flex flex-col sm:flex-row justify-start sm:justify-center gap-2 sm:gap-5 text-base sm:text-lg font-semibold transition-all duration-700 absolute sm:static sm:shadow-none pl-6 p-4 sm:p-0 ${
						isSidebarOpen
							? "right-0 top-16 bg-bg-primary/80"
							: "-right-full top-16 shadow-none"
					}`}
				>
					{navigationItems}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
