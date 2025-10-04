import { motion } from "framer-motion";

export default function LoginForm() {
	return (
		<motion.div className=" w-[98%] p-6">
			<h2 className="text-2xl font-semibold mb-2">Welcome back!</h2>
			<p className="text-gray-600 mb-8">Please enter your details.</p>
			{/*A for wrap for the input elements */}

			<form
				className="flex flex-col gap-5" /*Flex on col and nice gapping lol*/
			>
				<div>
					<label className="text-sm mb-2">Email</label>
					<input className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-black outline-none" />
				</div>

				<div>
					<label className=" text-sm mb-2">Password</label>
					<input
						type="password" /*to hideteh chars*/
						className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-black outline-none"
					/>
				</div>
				{/*recreation of the image in insta*/}
				<div
					className="flex items-center justify-between text-sm" /*flex for he row*/
				>
					<label className="flex items-center gap-2">
						<input type="checkbox" />
						Remember me
					</label>
					<a
						href="#"
						className="text-gray-500 hover:text-black" /*added a nice hover*/
					>
						Forgot password?
					</a>
				</div>

				<button className="bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
					Log in
				</button>
				<button className="bg-gray-100 py-2 rounded-lg hover:bg-gray-200 transition">
					Log in with Google
				</button>
			</form>
		</motion.div>
	);
}
