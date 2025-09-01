"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Collections = () => {
	const headingRef = useRef<HTMLHeadingElement>(null);
	const subTextRef = useRef<HTMLParagraphElement>(null);
	const bottomParagraphRef = useRef<HTMLParagraphElement>(null);
	const boxHeadingRefs = useRef<(HTMLHeadingElement | null)[]>([]);
	const boxTextRefs = useRef<(HTMLParagraphElement | null)[]>([]);

	const boxContent = [
		{
			image: "/people.svg",
			title: "People",
			description:
				"Capturing portraits, emotions, and human connections across different walks of life.",
			id: 1,
		},
		{
			image: "/lifestyle.svg",
			title: "Lifestyle",
			description:
				"Showcasing everyday moments, leisure, work, fashion, and modern living styles.",
			id: 2,
		},
		{
			image: "/art.svg",
			title: "Art",
			description:
				"Highlighting creativity through paintings, sculptures, digital designs, and visual expression.",
			id: 3,
		},
		{
			image: "/culture.svg",
			title: "Culture",
			description:
				"Exploring traditions, festivals, heritage, and the diverse identities of communities.",
			id: 4,
		},
	];

	useEffect(() => {
		// heading animation
		if (headingRef.current) {
			const text = new SplitType(headingRef.current, {
				types: "chars,words",
			});

			const tl = gsap.timeline();

			tl.fromTo(
				text.chars,
				{ y: 40, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					stagger: 1,
					duration: 1,

					scrollTrigger: {
						trigger: headingRef.current,
						start: "top 80%",
						end: "top 50%",
						scrub: 3,
					},
				}
			);
		}

		// subtext animation
		if (subTextRef.current) {
			const text = new SplitType(subTextRef.current, {
				types: "chars,words",
			});

			const tl = gsap.timeline();

			tl.fromTo(
				text.chars,
				{ y: 40, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					stagger: 1,
					duration: 1,

					scrollTrigger: {
						trigger: subTextRef.current,
						start: "top 80%",
						end: "top 50%",
						scrub: 3,
					},
				}
			);
		}

		// bottom paragraph text
		if (bottomParagraphRef.current) {
			const text = new SplitType(bottomParagraphRef.current, {
				types: "chars,words",
			});

			const tl = gsap.timeline();

			tl.fromTo(
				text.chars,
				{ color: "#b8b8b8" },
				{
					color: "#000000",
					stagger: 1,
					duration: 1,

					scrollTrigger: {
						trigger: bottomParagraphRef.current,
						start: "top 70%",
						end: "top 40%",
						scrub: 3,
					},
				}
			);
		}

		// box headings
		if (boxHeadingRefs.current && boxHeadingRefs.current.length > 0) {
			boxHeadingRefs.current.forEach((ref) => {
				if (ref) {
					gsap.fromTo(
						ref,
						{ x: -150 },
						{
							x: 0,
							transformOrigin: "center",
							scrollTrigger: {
								trigger: ref,
								start: "top 95%",
								end: "top 90%",
								scrub: 1.5,
							},
						}
					);
				}
			});
		}

		// box text
		if (boxTextRefs.current && boxTextRefs.current.length > 0) {
			boxTextRefs.current.forEach((ref) => {
				if (ref) {
					gsap.fromTo(
						ref,
						{ x: 350 },
						{
							x: 0,
							transformOrigin: "center",
							scrollTrigger: {
								trigger: ref,
								start: "top 95%",
								end: "top 90%",
								scrub: 1.5,
							},
						}
					);
				}
			});
		}
	}, []);

	return (
		<section className=" bg-[#FFFBF0] sectionPadding">
			<h1 className=" sectionHeading" ref={headingRef}>
				Our Unique Collection
			</h1>

			<p className=" mb-8 overflow-hidden" ref={subTextRef}>
				Celebrate the beauty, diversity, and stories of Africa through
				authentic, high-quality images.
			</p>

			<div className=" flex  flex-col xl:flex xl:flex-row md:grid md:grid-cols-[auto_auto] items-center justify-center gap-10">
				{boxContent.map((box) => (
					<div
						className="collectionsBox relative overflow-hidden rounded-4xl group cursor-pointer mx-auto xl:mx-0"
						key={box.id}
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
							<h1
								className="collectionsBoxHeading"
								ref={(el) => {
									boxHeadingRefs.current[box.id] = el;
								}}
							>
								{box.title}
							</h1>

							<p
								className="collectionsBoxDescription"
								ref={(el) => {
									boxTextRefs.current[box.id] = el;
								}}
							>
								{box.description}
							</p>
						</div>
					</div>
				))}
			</div>

			<p
				className=" text-center font-medium text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-20 w-[90%] mx-auto capitalize text-[#b8b8b8]"
				ref={bottomParagraphRef}
			>
				Discover the beauty and diversity of Africa through authentic,
				high-quality photography. From vibrant city life to serene landscapes,
				our images tell the real stories of the continent
			</p>
		</section>
	);
};

export default Collections;
