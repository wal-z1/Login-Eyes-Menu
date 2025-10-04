import { useEffect } from "react";
import { motion } from "framer-motion";

// Eye
const Eye = () => (
	<div
		className="eye relative w-3 h-3 bg-white rounded-full" /*a white circle*/
	>
		<div
			className="bg-black rounded-full pupil absolute top-[2px] left-[2px] w-2 h-2 transition-transform" /*a smaller balc dot to use with mouse movement */
		/>
	</div>
);

// characters
const Character = ({ bgColor, width, height, borderRadius }) => (
	<div
		className={
			`relative flex justify-around items-center ${bgColor} ${width} ${height} ${borderRadius}`
			/*the chara div with slectable proprties*/
		}>
		<Eye />
		<Eye />
	</div>
);

const characters = [
	{
		bgColor: "bg-[#ff8c42]",
		width: "w-28",
		height: "h-14",
		borderRadius: "rounded-full",
	},
	{
		bgColor: "bg-[#8e7dff]",
		width: "w-12",
		height: "h-28",
		borderRadius: "rounded-xl",
		layout: "column",
	},
	{
		bgColor: "bg-[#222]",
		width: "w-10",
		height: "h-24",
		borderRadius: "rounded-lg",
		layout: "column",
	},
	{
		bgColor: "bg-[#ffd84d]",
		width: "w-12",
		height: "h-20",
		borderRadius: "rounded-2xl",
	},
];
export default function Characters() {
	useEffect(() => {
		function trackMouse(e) {
			// select all eyes use the query select thing
			all_eyes = document.querySelectorAll(".eye");
			// returns an array of the eyes
			all_eyes.forEach((oneeye) => {
				// return the pupil children of each eye to the thing
				const pupil = oneeye.querySelector(".pupil");
				// Eye position and size
				const rect = oneeye.getBoundingClientRect();
				// return a big object of the pos of elemnts
				const eyeXcenter = rect.left + rect.width / 2;
				const eyeYcenter = rect.top + rect.height / 2;
				// from eye center to mouse
				const x = e.clientX - eyeXcenter;
				const y = e.clientY - eyeYcenter;
				// move pupil to mouse , making it move with x and y distances towords the mouse
				pupil.style.transform = `translate(${x * 0.2}px, ${y * 0.3}px)`;
			});
		}

		// listen to mouse moves
		document.addEventListener(
			"mousemove",
			trackMouse
		); /*a doc even listener if mousemoves run the tack mouse*/

		// remove listener once unused , or it will use more and more memory on refreches
		return () => document.removeEventListener("mousemove", trackMouse);
	}, []); // Run once on load

	return (
		<motion.div className="flex items-end gap-4 w-[98%] p-6">
			{characters.map((theelemnt, index) => (
				<Character key={index} {...theelemnt} />
			))}
		</motion.div>
	);
}
