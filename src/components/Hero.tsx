import Navbar from "./Navbar"
import Lambo1 from '../assets/lambo1.png'
import { FaArrowRight } from "react-icons/fa"
import { motion } from "motion/react"
const Hero = () => {
  const bgImage = {
    backgroundImage: "url('/bg.jpg')",
    backgroundSize: "cover",       
    backgroundPosition: "center",  
    backgroundRepeat: "no-repeat", 
    width: "100%",                
    height: "100vh",               
  };

  return (
    <div style={bgImage} className="md:overflow-x-hidden">
      <div className="bg-gradient-to-r from-gray-950 to-gray-900/90 h-full w-full">
        {/* Navbar Section  */}
        <Navbar />

        {/* Hero Section  */}
        <div className=" md:px-28 md:py-16 max-md:pt-20 p-8 min-h-[600px] text-white grid grid-cols-1 md:grid-cols-2 items-center overflow-hidden">
          {/* text section  */}
          <div className="max-md:flex flex-col items-center justify-center">
            <motion.div
              initial={{ y: -500, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="max-md:flex flex-col items-center justify-center overflow-hidden"
            >
              <h1 className="max-md:text-center text-5xl md:text-7xl font-bold">LAMBORGHINI <br /> <span className="text-transparent [-webkit-text-stroke:1px_white]  [-webkit-text-stroke-color:currentColor]">AVENDATOR</span></h1>
              <button
                className="mt-8 border border-white rounded-md  px-8 py-2 flex justify-center items-center gap-4 cursor-pointer">
                Explore <FaArrowRight className="hover:translate-x-2.5 transition-all duration-200" /> </button>
            </motion.div>

            {/* vehicle description */}
            <motion.div
              initial={{ y: 500, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="bg-black/30 p-6 md:max-w-[400px] mt-10 shadow-2xl hover:shadow-[0px_0px_4px_gray] hover:transition-all">
              <h1 className="text-xl font-semibold mb-2">VEHICLE FEATURES</h1>
              <p className=" text-xs md:text-sm">The car features rear-hinged suicide doors. Yuki Terai is credited with the exterior design. The interior fits four adults, with the front passengers seated on a single bench seat. The dashboard is decorated in wood trim with a long digital screen as the instrument and infotainment panel</p>
            </motion.div>
          </div>

          {/* image section  */}
          <div className="relative mt-10">
            <motion.div 
            initial={{y:80 ,rotateX:-10 , opacity:0}}
            animate={{y:0 ,rotateX:0 ,opacity:1}}
            transition={{duration:0.4 ,delay:1}}
            className="hidden md:block absolute mt-6  w-80 h-80 rounded-full border-12 border-white/70 shadow-[0_0_30px,_inset_0_0_20px] shadow-gray-400 z-[1]">
           </motion.div>
            <motion.p
            initial={{x:-200,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:0.6 ,delay:1.8}}
            className="absolute z-[2] text-6xl max-md:translate-y-[-340px] md:text-9xl font-bold text-white/5 top-10 md:translate-y-[-140px] md:translate-x-40"
            >
              SPORT
            </motion.p>
            <motion.img
              initial={{ x: -150, y: -80, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeInOut' }}
              src={Lambo1} alt="lambo-avendator" className="relative z-[3] mt-10 md:mt-30 scale-[1.3] drop-shadow-[6px_8px_15px_black]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
