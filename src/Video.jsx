

const Video = ({video}) => {

    const { video2, title, para} = video

    return (
        <div>


   <div className="max-w-xs h-[550px] p-6 rounded-md shadow-md bg-[#135D66] text-gray-50">


                <video  className="object-cover object-center w-full rounded-md h-72 bg-gray-500" controls>
                 <source src={video2} type="video/mp4" />
                
               </video>

	<div className="mt-6 mb-2">
	
		<h2 className="text-xl font-semibold tracking-wide text-black"> {title} </h2>
	</div>
	<p className="text-gray-100"> {para} </p>
    </div>

            
        </div>
    );
};



export default Video;