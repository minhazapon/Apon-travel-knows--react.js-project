
const Personal = () => {
    return (
        <div className=" mt-10 mb-10 mr-10 ml-10">

            <div>

                    <div>
                         <h1 className=" text-6xl font-bold text-center">Give Your Personal Information</h1>

                    </div>


                    <div className=" mt-10">


                    <section className="p-6 bg-[#135D66] rounded-xl text-gray-50">
	        <form noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
	      	<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Personal Inormation</p>
				<p className="text-xs">Give your personal Information for join Us</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sm">First name</label>
					<input id="firstname" type="text" placeholder="First name" className=" p-3   w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="lastname" className="text-sm">Last name</label>
					<input id="lastname" type="text" placeholder="Last name" className=" p-3    w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="email" className="text-sm">Email</label>
					<input id="email" type="email" placeholder="Email" className=" p-3   w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
				</div>
				<div className="col-span-full">
					<label htmlFor="address" className="text-sm">Address</label>
					<input id="address" type="text" placeholder="" className=" p-3    w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="city" className="text-sm">City</label>
					<input id="city" type="text" placeholder="" className=" p-3    w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="state" className="text-sm">State / Province</label>
					<input id="state" type="text" placeholder="" className="p-3    w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="zip" className="text-sm">ZIP / Postal</label>
					<input id="zip" type="text" placeholder="" className=" p-3    w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
				</div>
			</div>
		</fieldset>
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Profile</p>
				<p className="text-xs"> Give your profile picture </p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="username" className="text-sm">Username</label>
					<input id="username" type="text" placeholder="Username" className=" p-3   w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="website" className="text-sm">Website</label>
					<input id="website" type="text" placeholder="https://" className=" p-3    w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
				</div>
				<div className="col-span-full">
					<label htmlFor="bio" className="text-sm">Bio</label>
					<textarea id="bio" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"></textarea>
				</div>
           				<div className="col-span-full">
           					<label htmlFor="bio" className="text-sm">Photo</label>
           					<div className="flex items-center space-x-2">
           						<img src="https://scontent.fjsr17-1.fna.fbcdn.net/v/t39.30808-6/279336089_1981534982234380_2190436952041281487_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BNhPT1Xkl3kAb5FW999&_nc_ht=scontent.fjsr17-1.fna&oh=00_AfArgPlC7B02mkfoLfT-V1ByvaBs-SEPS6v2f8XfNmegVg&oe=66264911" alt="" className="w-10 h-10 bg-gray-500 rounded-full bg-gray-700" />
           						<button type="button" className=" btn   px-4 py-2 border rounded-md border-gray-100">Change</button>
           					</div>
           				</div>
           			</div>
           		</fieldset>
           	</form>
                  </section>















                    </div>












            </div>
            
        </div>
    );
};

export default Personal;