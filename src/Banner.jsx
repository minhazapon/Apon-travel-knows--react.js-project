import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className=" mt-10 mb-10  mr-10 ml-10 ">
              
             <div className=" flex justify-center items-center gap-10 bg-[#135D66] p-5 rounded-2xl flex-col md:flex-row  ">

              <div>
                   <h1 className=" text-xl text-white " >“Life is about the adventures you take and the memories you make.<br></br> So travel often and live life with open eyes and an open heart.”</h1>
                     
               <Link to="/place" >      
                <a href="#_" className=" mt-10  relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#6ea8af] rounded-full shadow-md group">
               <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#135D66] group-hover:translate-x-0 ease">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
               </span>
               <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">View Places</span>
               <span className="relative invisible">View Places</span>
               </a>
               </Link> 
           
              </div>


              <div>

                <img className=" h-[400px] w-[350px] rounded-2xl" src="https://i.ibb.co/RSQp1rW/banner.jpg" alt="" />
              </div>


              </div>



            
        </div>
    );
};

export default Banner;