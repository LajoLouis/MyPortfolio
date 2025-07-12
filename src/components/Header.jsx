import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Header() {
  return (
    <header className="bg-black text-white px-9 py-4 flex justify-between items-center flex-col lg:flex-row xs:space-y-2">
      <h1 className="text-xl font-bold text-yellow-600">FRANKLIN</h1>
      <nav className="space-x-4 flex">
        <motion.div whileTap={{scale:0.9}}>
          <Link
            to={`/`}
            className="hover:text-yellow-400 hover:scale-125 border-b-2 border-yellow-400 pb-1"
          >
            HOME
          </Link>
        </motion.div>
        <motion.div whileTap={{scale:0.9}}>
          <Link to={`/resume`} className="hover:text-yellow-400 hover:scale-150">
            RESUME
          </Link>
        </motion.div>
        <motion.div whileTap={{scale:0.9}}>
          <Link to={`/projects`} className="hover:text-yellow-400 hover:scale-150">
            PROJECTS
          </Link>
        </motion.div>
        <motion.div whileTap={{scale:0.9}}>
          <Link to={`/contact`} className="hover:text-yellow-400 hover:scale-150">CONTACT</Link>
        </motion.div>
      </nav>
    </header>
  );
}

export default Header;
