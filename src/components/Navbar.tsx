import { BiSearch } from "react-icons/bi"
import { MdMenu } from "react-icons/md"
import { motion } from "motion/react"
const Navbar = () => {
  const menuData = [
    {
      id:1,
      title: 'Home',
      link: '#',
    },
    {
      id:1,
      title: 'About US',
      link: '#',
    },
    {
      id:1,
      title: 'Cars',
      link: '#',
    },
    {
      id:1,
      title: 'Models',
      link: '#',
    },
  ]
  return (
    <motion.div 
    initial={{y:-20,opacity:0}}
    animate={{y:0 ,opacity:1}}
    transition={{duration:0.4, ease:'easeIn'}}
    className='flex items-center justify-between mx-10 md:ml-20 md:mr-20 py-4 text-white'>
      {/* logo */}
      <div>
        <img src='/logo.png' alt="logo" className="h-16 md:h-20 brightness-0 invert" />
      </div>
      {/* menu */}
      <ul className="hidden md:flex gap-2">
        {
          menuData.map((data)=>{
            return (
              <li className="py-2 px-6 rounded-md hover:shadow-[0_0_16px_gray] transition-all cursor-pointer shadow-gray-400">
                <a href={data.link} className="uppercase font-semibold text-lg">{data.title}</a>
              </li>
            )
          })
        }
      </ul>
      {/* side buttons */}
      <div className="flex gap-2">
        <MdMenu   className="text-4xl rounded-full bg-gray-700 p-2 hover:shadow-[0_0_16px_gray] shadow-gray-400 transition-all"/>
        <BiSearch className="text-4xl rounded-full bg-gray-700 p-2 hover:shadow-[0_0_16px_gray] shadow-gray-400 transition-all"/>
      </div>
    </motion.div>
  )
}

export default Navbar
