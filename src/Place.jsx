import { useLoaderData } from "react-router-dom";
import PlaceInfo from "./PlaceInfo";


const Place = () => {


    const data = useLoaderData();

    console.log(data);





    return (
        <div className=" mt-10">

            <div>

            <section>
	<div className="bg-[#135D66]">
		<div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900">Some Beautiful Places Information  </h1>
			<p className="mt-6 mb-8  sm:mb-12 xl:max-w-3xl text-gray-900  text-2xl">“We travel not to escape life, but for life not to escape us.”</p>
			<div className="flex flex-wrap justify-center">
				<button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 btn text-gray-50">Get started</button>
				<button type="button" className="px-8 py-3 m-2 text-lg border rounded border-gray-700  btn  text-black ">Learn more</button>
			</div>
		</div>
	</div>
	<img src="https://images.jdmagicbox.com/quickquotes/listicle/listicle_1693734064583_1hqs7_1374x1031.jpg" alt="" className="w-5/6 h-[600px] mx-auto mb-12 -mt-20 bg-gray-500 rounded-lg shadow-md lg:-mt-40" />
    </section>

     <hr className=" mb-5 mt-5"></hr> 

            </div>

{/* --------------------------------------- */}

         <div  className=" flex justify-center">

          <div className=" mb-20 mt-20 grid  md:grid-cols-3 gap-10">


               {

                 data.map( data => <PlaceInfo key={data.id} data={data}  ></PlaceInfo>  )


               }








          </div>

          </div>





            
        </div>
    );
};

export default Place;