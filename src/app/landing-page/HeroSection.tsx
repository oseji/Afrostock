import Image from "next/image";

import Header from "./Header";

import searchIcon from "../assets/search icon.svg";
import imageIcon from "../assets/image icon.svg";

const HeroSection = () => {
	return (
		<div
			style={{
				backgroundImage: 'url("heroBg.svg")',
				height: "100vh",
				backgroundSize: "cover",
			}}
			className=" relative"
		>
			<Header />

			<section className=" absolute top-1/2 -translate-y-1/2 sectionPadding">
				<div className=" w-full md:w-[600px] flex flex-col gap-8">
					<h1 className=" font-semibold capitalize text-6xl text-white">
						Search authentic <span className=" text-[#7B4B3A]">African</span>{" "}
						images
					</h1>

					<p className=" text-white">
						Discover Africa’s people, culture, and stories in every image. and
						get Stock images that reflect Africa’s true beauty and diversity.
					</p>

					<div className=" flex flex-row items-center justify-between gap-6  bg-white p-4 rounded-xl w-[90%]">
						<input
							type="text"
							name="searchBar"
							id="searchBar"
							placeholder="Search Free quality African images"
							className=" w-[80%] focus:outline-none"
						/>

						<div className=" flex flex-row items-center gap-2">
							<Image
								src={searchIcon}
								alt="Search Icon"
								className=" cursor-pointer"
							/>
							<Image
								src={imageIcon}
								alt="Image Icon"
								className=" cursor-pointer"
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default HeroSection;
