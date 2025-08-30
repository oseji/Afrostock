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
	const images = [
		one,
		two,
		three,
		four,
		five,
		six,
		seven,
		eight,
		nine,
		ten,
		eleven,
		twelve,
		thirteen,
		fourteen,
		fifteen,
	];

	const chunkedImages = [
		images.slice(0, 5),
		images.slice(5, 11),
		images.slice(11, 15),
	];

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

			<div className="grid grid-cols-3 gap-6 mt-8 mb-16">
				{chunkedImages.map((column, colIdx) => (
					<div key={colIdx} className="flex flex-col gap-6">
						{column.map((img, idx) => (
							<div
								key={idx}
								className="relative mb-4 overflow-hidden rounded-4xl"
							>
								<Image
									src={img}
									alt={`Image ${idx}`}
									width={500}
									height={700}
									className="w-full h-auto object-cover transition duration-500 ease-in-out hover:scale-110"
								/>
							</div>
						))}
					</div>
				))}
			</div>

			<div
				className=" bg-[#7B4B3A] rounded-4xl px-11 py-20 flex flex-row justify-between relative"
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

					<button className=" bg-white rounded-4xl px-6 py-2 text-black font-semibold capitalize cursor-pointer hover:scale-110 transition ease-in-out duration-500">
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
