import Image from "next/image";
import footerIcon from "../assets/footer logo.svg";
import upArrow from "../assets/arrow-big-up-dash.svg";
import socialMediaIcons from "../assets/social media.svg";

const Footer = () => {
	return (
		<footer className=" flex flex-col bg-[#FFFBF0]">
			<div className=" flex flex-col xl:flex-row gap-10 xl:gap-0  md:items-start md:justify-between sectionPadding">
				<div className=" xl:w-[30%] flex flex-col gap-6">
					<Image src={footerIcon} alt="Footer Icon" />

					<p>
						Discover the beauty and diversity of Africa through authentic,
						high-quality photography. From vibrant city life to serene
						landscapes, our images tell the real stories of the continent
					</p>

					<Image src={socialMediaIcons} alt="Social Media Icons" />
				</div>

				<div className="  w-full xl:w-auto flex flex-col gap-6">
					<div className=" w-full xl:w-auto flex-wrap flex flex-row justify-between xl:justify-start items-start gap-6">
						<div className="footerColumn">
							<h1 className="footerColumnHeading">About Us</h1>
							<p className="footerColumnItem">Our Story</p>
							<p className="footerColumnItem">Careers</p>
							<p className="footerColumnItem">Press</p>
							<p className="footerColumnItem">Contact</p>
						</div>

						<div className="footerColumn">
							<h1 className="footerColumnHeading">Collections</h1>
							<p className="footerColumnItem">New Arrivals</p>
							<p className="footerColumnItem">Best Sellers</p>
							<p className="footerColumnItem">Seasonal Picks</p>
							<p className="footerColumnItem">Gift Guides</p>
						</div>

						<div className="footerColumn">
							<h1 className="footerColumnHeading">Resources</h1>
							<p className="footerColumnItem">Blog</p>
							<p className="footerColumnItem">FAQs</p>
							<p className="footerColumnItem">Shipping & Returns</p>
							<p className="footerColumnItem">Size Guide</p>
						</div>

						<div className="footerColumn">
							<h1 className="footerColumnHeading">Support</h1>
							<p className="footerColumnItem">Help Center</p>
							<p className="footerColumnItem">Privacy Policy</p>
							<p className="footerColumnItem">Terms of Service</p>
							<p className="footerColumnItem">Accessibility</p>
						</div>
					</div>

					<button className=" w-fit mx-auto lg:mx-0 lg:ml-auto mt-10 cursor-pointer rounded-4xl px-6 py-2 border-[#7B4B3A] border-2 flex flex-row items-center gap-2 justify-center capitalize font-semibold text-[#7B4B3A] transition ease-in-out duration-500 hover:scale-105">
						<Image src={upArrow} alt="Up Arrow" />

						<span>back to the top</span>
					</button>
				</div>
			</div>

			<div className=" border-t border-[#7B4B3A] py-8 font-semibold text-center">
				<p>@ 2023 Afrostock . All right reserved. </p>
			</div>
		</footer>
	);
};

export default Footer;
