import { useLoaderData } from "react-router-dom";
import Video from "./Video";



const PlaceList = () => {
    

    const video = useLoaderData();

    console.log(video);

   


    return (
        <div className=" mt-10 mb-20 ">

            <div>
               
               <h1 className=" text-center text-6xl font-bold text-[#135D66] ">World Beautiful places</h1>

               <p  className=" text-2xl text-center  text-slate-400 mt-5"  >Feel Beautiful places</p>
            
            </div>
             
            <div className=" flex justify-center">
  
            <div className=" grid  md:grid-cols-3 gap-10">

                  {

                      video.map( video => <Video key={video.id} video={video} ></Video>  )

                  }


            </div>

            </div>
            
        </div>
    );
};

export default PlaceList;