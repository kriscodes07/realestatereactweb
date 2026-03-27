import React ,{ useEffect, useState}from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from "framer-motion"

const Projects = () => {

const [currentindex, setcurrentindex] = useState(0)
const [cardstoshow, setcardstoshow] = useState(1)


useEffect(()=>{
const upddatecardstodisplay=()=>{
    if(window.innerWidth >=1024){
        setcardstoshow(projectsData.length)
    }else{
        setcardstoshow(1)
    }}

    upddatecardstodisplay();
    window.addEventListener('resize',upddatecardstodisplay);
    return ()=> window.removeEventListener('resize',upddatecardstodisplay);

},[])

    const necxtproject=()=>{

    setcurrentindex((previousindex)=>(previousindex+1 )% projectsData.length)
}
const previousproject=()=>{

    setcurrentindex((previousindex)=>previousindex===0? projectsData.length-1 : previousindex-1)
}

  return (
    <motion.div 
    initial={{opacity:0 ,x:-200}}
        transition={{duration:1}}
        whileInView={{opacity:1 ,x:0}}
        viewport={{once:true}}
         className='container mx-auto oy-4 pt-20 px-6 md:px-20 lgLpx-32 my-20 w-full overflow-hidden ' id='Projects'>
<h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects <span className='underline underline-offset-4 decoration-1 under '>Completed</span></h1>
<p className='text-center text-gray-500 mb-8 max-w-80 mx-auto '>Crafting spaces , Building Legacues-Explore Out Protfolio</p>

{/* ---slider button---- */}

<div className='flex justify-end items-center mb-8'>
    <button  onClick={previousproject}  className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Project'>
        <img src={assets.left_arrow} alt="previous" />
    </button>
    <button  onClick={necxtproject}   className='p-3 bg-gray-200 rounded mr-2' aria-label='Next Project'>
        <img src={assets.right_arrow} alt="Next" />
    </button>
</div>

{/* project slider container */}

<div className='overflow-hidden'>
  <div className='flex gap-8 transition-transform duration-500 ease-in-out'  
  
  style={{transform:`translateX(-${(currentindex *100)/cardstoshow}%)`}}
  >
    {projectsData.map((project, index) => (
      <div key={index} className='relative shrink-0 w-full sm:w-1/4'>
        
        <img src={project.image} alt={project.title} />

        <div className='absolute left-0 right-0 bottom-1 flex justify-center'>
          <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
            
            <h2 className='text-xl font-semibold text-gray-800'>
              {project.title}
            </h2>

            <p className='text-gray-400 text-sm'>
              {project.price} <span>|</span> {project.location}
            </p>

          </div>
        </div>

      </div>
    ))}
  </div>
</div>
    </motion.div>
  )
}

export default Projects