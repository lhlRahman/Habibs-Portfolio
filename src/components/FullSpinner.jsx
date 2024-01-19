import { motion } from "framer-motion";
import Spinner from "./Spinner";

export default function FullPageTextSpinnerLoader() {
  return (
    <div className="h-full w-full m-0 bg-black overflow-hidden relative">
      <motion.div
        className="absolute spinner-1"
        style={{ right: '-535px', bottom: '-840px' }}
        initial={{ rotate: 45 }}
        animate={{ rotate: -315 }}
        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
      >
        <Spinner
          text="LOADING  LOADING  LOADING  LOADING  LOADING"
          radius={800}
          fontSize="180px"
          letterSpacing={8}
        />
      </motion.div>
      <motion.div
        className="absolute spinner-2"
        style={{ right: '-385px', bottom: '-695px' }}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
      >
        <Spinner
          text="LOADING  LOADING  LOADING  LOADING"
          radius={650}
          fontSize="180px"
          letterSpacing={10}
        />
      </motion.div>
      <motion.div
        className="absolute spinner-3"
        style={{ right: '-200px', bottom: '-510px' }}
        initial={{ rotate: -5 }}
        animate={{ rotate: -365 }}
        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
      >
        <Spinner
          text="LOADING LOADING LOADING"
          radius={480}
          fontSize="180px"
          letterSpacing={15}
        />
      </motion.div>
    </div>
  );
}
