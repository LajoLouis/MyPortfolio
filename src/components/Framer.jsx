import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Framer() {
    const [show, setShow] = useState(true);
  return (
    <div className="App h-[2000px]" style={{ padding: "2rem" }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "skyblue",
          borderRadius: 10,
        }}
      >
        Hello, I'm animated!
      </motion.div>
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        I'm sliding in!
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          padding: "10px 20px",
          background: "black",
          color: "white",
          borderRadius: "5px",
          border: "none",
        }}
      >
        Click Me
      </motion.button>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        I fade in when you scroll!
      </motion.div>
      <motion.div
        drag
        style={{
          width: 100,
          height: 100,
          backgroundColor: "coral",
          borderRadius: 10,
        }}
      >
        Drag me!
      </motion.div>
      <div>
      <button onClick={() => setShow(!show)}>Toggle</button>

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            I appear and disappear with animation!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </div>
  );
}

export default Framer;
