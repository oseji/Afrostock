import Image from "next/image";

import one from "../assets/categories/1.svg";
import two from "../assets/categories/2.svg";
import three from "../assets/categories/3.svg";
import four from "../assets/categories/4.svg";
import five from "../assets/categories/5.svg";
import six from "../assets/categories/6.svg";
import seven from "../assets/categories/7.svg";
import eight from "../assets/categories/8.svg";
import nine from "../assets/categories/9.svg";
import ten from "../assets/categories/10.svg";
import eleven from "../assets/categories/11.svg";
import twelve from "../assets/categories/12.svg";
import thirteen from "../assets/categories/13.svg";
import fourteen from "../assets/categories/14.svg";
import fifteen from "../assets/categories/15.svg";

import twoGirls from "../assets/2 girls.svg";

const Categories = () => {
	return (
		<div className=" sectionPadding">
			<h1 className=" sectionHeading">Free Afro booth images </h1>

			<div>
				<div className=" flex flex-row items-center justify-center gap-10 capitalize mb-8">
					<span className=" categoryFilter bg-[#7B4B3A] text-white">
						lifestyle
					</span>
					<span className="categoryFilter">Technology</span>
					<span className="categoryFilter">Health</span>
					<span className="categoryFilter">Business</span>
					<span className="categoryFilter">Travel</span>
					<span className="categoryFilter">Food</span>
					<span className="categoryFilter">Entertainment</span>
					<span className="categoryFilter">Education</span>
					<span className="categoryFilter">Sports</span>
				</div>
			</div>

			<div
				className=" bg-[#7B4B3A] rounded-lg px-11 py-20 flex flex-row justify-between relative"
				style={{
					backgroundImage: `url("/background image brown.svg")`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className=" w-[40%]">
					<p className=" text-white mb-8 capitalize text-5xl font-semibold">
						invitation for African photographers to upload their work
					</p>

					<button className=" bg-white rounded-lg px-6 py-2 text-black font-semibold capitalize cursor-pointer hover:scale-110 transition ease-in-out duration-200">
						Join as a Creator
					</button>
				</div>

				<Image
					src={twoGirls}
					alt="Two Girls"
					className=" absolute bottom-0 right-0 h-[80%]"
				/>
			</div>
		</div>
	);
};

export default Categories;
