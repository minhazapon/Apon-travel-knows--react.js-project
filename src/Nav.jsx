import { Link, NavLink } from "react-router-dom";

const Nav = () => {

    const links = <>

       <li><NavLink to="/"  >Home</NavLink></li>
       <li><NavLink to="/news" >News</NavLink></li>   
       <li><NavLink to="/destination" >Destination</NavLink></li>   
       <li><NavLink to="/blog" >Blog</NavLink></li>   
       <li><NavLink to="/contact" >Contact</NavLink></li>   
       <li><NavLink to="/place" >Place</NavLink></li>   
       <li><NavLink to="/list" >Place List</NavLink></li>   
       
     
    </>
 


    return (
        <div>

                <div className="navbar bg-base-100  shadow-lg">
                  <div className="navbar-start">
                    <div className="dropdown">
                      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                      </div>
                      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                         {links}
                      </ul>
                    </div>
                    
                    <div className=" flex items-center" >
                    <img className=" h-[40px]" src="https://i.ibb.co/2tT1RpL/travel.png" alt="" />
                    <a className="btn btn-ghost text-2xl text-[#135D66] font-bold ">AponTravels Knows</a>
                    </div>


                  </div>
                  <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {links}
                    </ul>
                  </div>
                  <div className="navbar-end">


                    <Link to="/login" >
                    <a className="btn  bg-[#135D66] text-white">Login</a>
                    </Link>

                    
                    
                  </div>
                </div>
             

            
        </div>
    );
};

export default Nav;