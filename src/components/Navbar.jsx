import React, { useState } from "react";
import { appleImg, searchImg, bagImg, satvikImg } from "../utils";
import { navLists } from "../constants";
import bentoImg from "../assets/bento.jpeg";

const Navbar = () => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
			<nav className="flex w-full screen-max-width">
				<img src={appleImg} alt="Apple Logo" width={21} height={25} />

				<div className="flex flex-1 justify-center max-sm:hidden">
					{navLists.map((nav) => (
						<div
							key={nav}
							className="px-5 text-xl cursor-pointer text-white hover:font-bold transition-all"
						>
							{nav}
						</div>
					))}
				</div>

				<div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
					<img src={searchImg} alt="search" width={21} height={21} />
					<img src={bagImg} alt="bag" width={21} height={21} />

					<div
						className="relative"
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
						onClick={() =>
							window.open(
								"https://bento.me/satviksrivastava7",
								"_blank"
							)
						}
						style={{ cursor: "pointer" }}
					>
						<img
							src={satvikImg}
							alt="Satvik Srivastava"
							style={{
								width: "24px",
								height: "28px",
								borderRadius: "100%",
							}}
						/>
						{isHovered && (
							<img
								src={bentoImg}
								alt="Satvik Srivastava Portfolio"
								style={{
									position: "absolute",
									top: 35,
									left: -50,
									zIndex: 9999,
									minWidth: "15vw",
									minHeight: "auto",
									borderRadius: "8px",
									maxWidth: "90%",
									maxHeight: "90vh",
								}}
							/>
						)}
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
