import { Link } from "react-router-dom";

const PlaceInfo = ({data}) => {

    const { id, image, place, country, description} = data;


    return (
        <div className=" ">


            <div>

                     
            
            
        
             
            <div className="max-w-xs h-[500px] p-6 rounded-md shadow-md bg-[#135D66] text-gray-50">
	        <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
	        <div className="mt-6 mb-2">
	        	<span className="block text-xs font-medium tracking-widest uppercase text-violet-400">Place: {place} </span>
	        	<h2 className="text-xl font-semibold tracking-wide"> country: {country} </h2>
	        </div>
	        <p className="text-gray-100 text-sm">  {description} </p>

            </div>
  











            </div>


            
        </div>
    );
};

export default PlaceInfo;