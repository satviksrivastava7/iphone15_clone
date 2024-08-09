import React from "react";
import { appleImg, searchImg, bagImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
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
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
