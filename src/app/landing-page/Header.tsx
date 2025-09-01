"use client";
import { useRef, useState } from "react";

import Image from "next/image";
import logo from "../assets/logo.svg";

const Header = () => {
	const menuLineRefs = useRef<(HTMLSpanElement | null)[]>([]);
	const navRef = useRef<HTMLElement | null>(null);
	const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

	const toggleMenu = () => {
		const navbar = navRef.current;
		navbar?.classList.toggle("hideNav");

		setIsMenuToggled(!isMenuToggled);

		if (!isMenuToggled) {
			menuLineRefs.current[0]?.classList.add("-rotate-45");
			menuLineRefs.current[0]?.classList.remove("top-[10%]");

			menuLineRefs.current[1]?.classList.add("hidden");

			menuLineRefs.current[2]?.classList.add("rotate-45");
			menuLineRefs.current[2]?.classList.remove("top-[90%]");
		} else {
			menuLineRefs.current[0]?.classList.remove("-rotate-45");
			menuLineRefs.current[0]?.classList.add("top-[10%]");

			menuLineRefs.current[1]?.classList.remove("hidden");

			menuLineRefs.current[2]?.classList.remove("rotate-45");
			menuLineRefs.current[2]?.classList.add("top-[90%]");
		}
	};

	return (
		<header className=" flex flex-col md:flex-row justify-between md:items-center font-semibold px-0 md:px-10 xl:px-24 py-0 md:py-5 bg-transparent">
			<div className=" w-full md:w-auto bg-white md:bg-transparent p-5 md:p-0 flex flex-row justify-between items-center z-50">
				<Image src={logo} alt="Afrostock Logo" />

				<div className="menuContainer" onClick={toggleMenu}>
					<span
						className="top-[10%] w-full "
						ref={(el) => {
							menuLineRefs.current[0] = el;
						}}
					></span>
					<span
						className="top-1/2 w-[60%] "
						ref={(el) => {
							menuLineRefs.current[1] = el;
						}}
					></span>
					<span
						className="top-[90%] w-full "
						ref={(el) => {
							menuLineRefs.current[2] = el;
						}}
					></span>
				</div>
			</div>

			<nav
				className=" flex flex-col md:flex-row items-center gap-10 bg-white md:bg-transparent py-10 md:py-0 transition ease-in-out duration-500 w-full md:w-auto hideNav z-40"
				ref={navRef}
			>
				<span className=" navText">Explore</span>
				<span className=" navText">about us</span>
				<span className=" navText">sign in</span>

				<button className=" capitalize text-white rounded-4xl px-6 py-4 bg-[#7B4B3A] cursor-pointer border-2 border-[#7B4B3A] hover:bg-transparent hover:scale-105 hover:text-[#7B4B3A] transition ease-in-out duration-500">
					sign up
				</button>
			</nav>
		</header>
	);
};

export default Header;
