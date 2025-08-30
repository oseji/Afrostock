import Image from "next/image";
import logo from "../assets/logo.svg";

const Header = () => {
	return (
		<header className=" flex flex-row justify-between items-center font-semibold px-24 py-4 bg-transparent">
			<Image src={logo} alt="Afrostock Logo" />

			<nav className=" flex flex-row items-center gap-10">
				<span className=" navText">Explore</span>
				<span className=" navText">about us</span>
				<span className=" navText">sign in</span>

				<button className=" capitalize text-white rounded-4xl px-6 py-4 bg-[#7B4B3A] cursor-pointer border-2 border-[#7B4B3A] hover:bg-transparent hover:scale-105 hover:text-[#7B4B3A] transition ease-in-out duration-200">
					sign up
				</button>
			</nav>
		</header>
	);
};

export default Header;
