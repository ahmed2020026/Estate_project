const Register = () => {
    const Submite = (e) => e.preventDefault();
    return (
        <>
            <section className="flex items-center justify-center">
                <div className="container">
                    <form className="md:w-xl mx-auto border rounded-lg border-[#cccccca4] shadow-lg px-3" data-aos="fade-zoom-in" data-aos-easing="ease-in-back">
                        <h1 className="text-center my-15 font-bold text-3xl md:text-5xl">Sign Up</h1>
                        <div className="form-input p-2.5 relative">
                            <input type="text" name="first_name" required autoComplete="off" className="block w-full border-3 border-[#cccccc9f] outline-0 p-2 py-3 rounded-lg focus:border-sky-500 valid:border-sky-500"/>
                            <span className="absolute top-0">First Name</span>
                        </div>
                        <div className="form-input p-2.5 relative">
                            <input type="text" name="last_name" required autoComplete="off" className="block w-full border-3 border-[#cccccc9f] outline-0 p-2 py-3 rounded-lg focus:border-sky-500 valid:border-sky-500"/>
                            <span className="absolute top-0">Last Name</span>
                        </div>
                        <div className="form-input p-2.5 relative">
                            <input type="email" name="email" required autoComplete="off" className="block w-full border-3 border-[#cccccc9f] outline-0 p-2 py-3 rounded-lg focus:border-sky-500 valid:border-sky-500"/>
                            <span className="absolute top-0">Email</span>
                        </div>
                        <div className="form-input p-2.5 relative">
                            <input type="password" name="password" required autoComplete="off" className="block w-full border-3 border-[#cccccc9f] outline-0 p-2 py-3 rounded-lg focus:border-sky-500 valid:border-sky-500"/>
                            <span className="absolute top-0">Password</span>
                        </div>
                        <button className="p-2.5 relative bg-sky-500 rounded-lg cursor-pointer text-white btn2 w-30 mx-auto block my-5" onClick={Submite}>Sign</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Register;