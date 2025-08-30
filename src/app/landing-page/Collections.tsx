import Image from "next/image";

const Collections = () => {
	const boxContent = [
		{
			image: "/people.svg",
			title: "People",
			description:
				"Portraits, everyday life shots, traditional & modern attire.",
		},
		{
			image: "/lifestyle.svg",
			title: "Lifestyle",
			description:
				"Portraits, everyday life shots, traditional & modern attire.",
		},
		{
			image: "/art.svg",
			title: "Art",
			description:
				"Portraits, everyday life shots, traditional & modern attire.",
		},
		{
			image: "/culture.svg",
			title: "Culture",
			description:
				"Portraits, everyday life shots, traditional & modern attire.",
		},
	];

	return (
		<section className=" bg-[#FFFBF0] sectionPadding">
			<h1 className=" sectionHeading">Our Unique Collection</h1>
			<p className=" mb-8">
				Celebrate the beauty, diversity, and stories of Africa through
				authentic, high-quality images.
			</p>

			<div className=" flex flex-row items-center justify-center gap-10">
				{boxContent.map((box, index) => (
					<div
						className="collectionsBox relative overflow-hidden rounded-4xl group cursor-pointer"
						key={index}
					>
						{/* Background Image */}
						<Image
							src={box.image}
							alt={box.title}
							fill
							className="object-cover transition-transform duration-500 group-hover:scale-110"
						/>

						{/* Dark Overlay */}
						<div className="absolute inset-0 bg-black/15 group-hover:bg-black/30 transition-colors duration-500"></div>

						{/* Content */}
						<div className="absolute inset-0 flex flex-col justify-end  p-4 z-10">
							<h1 className="collectionsBoxHeading ">{box.title}</h1>

							<p>{box.description}</p>
						</div>
					</div>
				))}
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
