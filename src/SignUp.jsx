



const SignUp = () => {
    return (
        <div   className=" p-10 bg-no-repeat bg-cover "    style={{backgroundImage: 'url(https://www.travelcharacter.com/wp-content/uploads/2020/05/Bora-Bora.jpg)'}} >
            <div className=" flex justify-center">

            <div className="flex flex-col max-w-md w-[600px] p-6 rounded-md sm:p-10 bg-[#135D66] text-gray-100">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Sign Up</h1>
		<p className="text-sm text-gray-400">Sign Up to access your account</p>
	</div>


	<form noValidate="" action="" className="space-y-12">
		<div className="space-y-4">
            <div>
				<label htmlFor="email" className="block mb-2 text-sm">Your Name</label>
                <input type="text" placeholder="Your Name" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-white text-gray-100" />
			</div>


			<div>
				<label htmlFor="email" className="block mb-2 text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="Your Email" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-white text-gray-100" />
			</div>


			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm">Password</label>
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-400">Forgot password?</a>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-white text-gray-100" />
			</div>



		</div>
		<div className="space-y-2">
			<div>
				<button type="button" className=" btn w-full px-8 py-3 font-semibold rounded-md bg-white text-gray-900">Sign Up</button>
			</div>
			
		</div>
	</form>
</div>



            </div>
        </div>
    );
};

export default SignUp;