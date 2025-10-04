import { motion } from "framer-motion";
import Characters from "./components/Characters";
import LoginForm from "./components/LoginForm";

export default function App() {
	return (
		<div className="grid grid-cols-2 w-[900px] h-[600px] bg-white rounded-2xl shadow-xl overflow-hidden mx-auto m-1 border-1">
			<motion.div
				initial={{ opacity: 0, x: -60 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}>
				<Characters />
			</motion.div>
			<motion.div
				initial={{ opacity: 0, x: 60 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}>
				<LoginForm />
			</motion.div>
		</div>
	);
}
