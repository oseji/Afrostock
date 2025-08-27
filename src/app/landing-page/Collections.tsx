import Image from "next/image";
import people from "../assets/people.svg";
import lifestyle from "../assets/lifestyle.svg";
import art from "../assets/art.svg";
import culture from "../assets/culture.svg";

const Collections = () => {
	return (
		<section className=" bg-[#FFFBF0] sectionPadding">
			<h1 className=" sectionHeading">Our Unique Collection</h1>
			<p className=" mb-8">
				Celebrate the beauty, diversity, and stories of Africa through
				authentic, high-quality images.
			</p>

			<div className=" flex flex-row items-center justify-between">
				<Image src={people} alt="People" />
				<Image src={lifestyle} alt="Lifestyle" />
				<Image src={art} alt="Art" />
				<Image src={culture} alt="Culture" />
			</div>

			<p className=" text-center font-medium text-5xl mt-20 w-[90%] mx-auto capitalize">
				Discover the beauty and diversity of Africa through authentic,{" "}
				<span className=" text-[#999997]">
					high-quality photography. From vibrant city life to serene landscapes,
					our images tell the real stories of the continent
				</span>
			</p>
		</section>
	);
};

export default Collections;
