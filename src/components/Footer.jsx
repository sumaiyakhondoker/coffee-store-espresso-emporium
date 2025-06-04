import { FaFacebook, FaTwitter,FaInstagram ,FaLinkedin,FaPhoneAlt,FaEnvelope  } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[url(/more/13.jpg)] text-black  ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-3 md:justify-between p-10">
        <div className="">
            {/* logo */}
        <div className="lg:w-xl">
        <img className="w-17" src="/more/logo1.png" alt="" />

        <h3 className="text-4xl text-[#331a15] text-shadow-sm text-shadow-slate-500 mt-2 mb-3">
          Espresso Emporium
        </h3>
        <p className="font-raleway text-[#1b1a1a] ">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
      </div>

      {/* icons */}
      <div className="flex space-x-4 text-3xl my-6 ">
        <FaFacebook className="cursor-pointer"></FaFacebook>
        <FaTwitter className="cursor-pointer"></FaTwitter>
        <FaInstagram className="cursor-pointer"></FaInstagram>
        <FaLinkedin className="cursor-pointer"></FaLinkedin>
      </div>

      {/* get in touch */}
     
	
		<div className="text-[#331a15]">
			<h1 className="text-4xl  text-shadow-sm text-shadow-slate-500 mb-6">Get in touch</h1>
			<div className="space-y-4 font-raleway">
				
				<p className="flex items-center">
					<FaPhoneAlt className="text-lg mr-2"></FaPhoneAlt>
					<span>+88 01533 333 333</span>
				</p>
				<p className="flex items-center">
					<FaEnvelope className="text-lg mr-2"></FaEnvelope>
					<span>infocoffee@gmail.com</span>
				</p>
                <p className="flex items-center">
					<MdLocationOn className="text-xl mr-2"></MdLocationOn>
					<span>72, Wall street, King Road, Dhaka</span>
				</p>
			</div>
		</div>
		
	
        </div>


{/* form */}
<div className="max-w-lg flex justify-center items-center">
<div >
    <h3 className="text-4xl text-[#331a15] text-shadow-sm text-shadow-slate-500  mb-5">
          Connect with Us
        </h3>
    <form className="space-y-3">

        <input type="text" placeholder="Name" className="input border-none w-full" />
        <input type="text" placeholder="Email" className="input border-none w-full" />
        <textarea className="textarea border-none w-full" placeholder="Message "></textarea>
        <button className="btn border-2 border-[#331a15] hover:bg-[#e3b577]  text-xl rounded-3xl mt-4">Send Message</button>
    </form>
</div>
</div>

      
      </div>

      {/* copyright */}
      <div className="bg-[url(/more/24.jpg)] p-3">
        <p className="text-xl text-white text-center">Copyright Espresso Emporium ! All Rights Reserved</p>

      </div>
      
    </footer>
  );
};

export default Footer;
