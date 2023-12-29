import React, {useState , useEffect} from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import googleLogo from '../assets/google.png'
import facebookLogo from '../assets/facebook.png'
import githubLogo from '../assets/github.png'

function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showPwdHide, setshowPwdHide] = useState(false);
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [isloading, setisloading] = useState(true);

    useEffect(()=>{
        if(password === ''){
            setshowPwdHide(false)
        }else{
            setshowPwdHide(true)
        }
    },[password])

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };
  return (
    
    <div className="">
      <div className="w-11/12  mx-auto pt-0 h-screen ">
        {/* Register area */}
        <div className="w-1/2 mx-auto h-auto ">
         
          <div className="bg-gray-950 h-5/6 pt-8 mt-8 rounded-lg">
          
            <div className="flex justify-center">
              <img className="w-7 h-7 mr-2" src={logo} alt="" />
              <p className="text-white font-bold text-3xl"> Monio Register</p>
            </div>

            <div className="pt-4">
                <p className="text-white text-center">Already have an account ? <span className="text-blue-500 font-bold cursor-pointer hover:text-blue-400"> <Link to='/login'>Login</Link> </span> </p>
            </div>

            <div className="w-1/2 mx-auto pt-6">
            <div class="mb-4 flex justify-evenly">
            <div>
            <label for="default-input" class="block mb-2 text-sm font-medium  text-gray-400"> First name</label>
    <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder="jhon"/>
            </div>
            <div className="ml-2">
            <label for="default-input" class="block mb-2 text-sm font-medium  text-gray-400"> Last name</label>
    <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder="Winston"/>
            </div>
   
</div>
            <div class="mb-4">
    <label for="default-input" class="block mb-2 text-sm font-medium  text-gray-400">Email</label>
    <input type="email" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder="jhon@example.com"/>
</div>
 <div className="mb-4 relative">
      <label
        htmlFor="default-input"
        className="block mb-2 text-sm font-medium text-gray-400"
      >
        Password
      </label>
      <input
        type={showPassword ? "text" : "password"}
        id="default-input"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-10"
        required
        placeholder="●●●●●●●●●●●●●" 
        value={password}
        onChange={(e)=>setpassword(e.target.value)}
        
      />
      {showPwdHide ? (
        <button
        className="absolute right-2 top-1/2 pt-7 transform -translate-y-1/2 cursor-pointer"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? (
          <i className="bi bi-eye-slash text-gray-400"></i>
        ) : (
          <i className="bi bi-eye text-gray-400"></i>
        )}
      </button>
      ):null}
      
    </div>
    {showPwdHide ? (
        <div className="mb-4  relative">
     
      <input
        type={showPassword ? "text" : "password"}
        id="default-input"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-10"
        required
        placeholder="Confirm password" 
       
        
      />
    
      
    </div>
    ):null}
    
    
    <div className="bg-blue-500 rounded-lg h-10 flex justify-center items-center cursor-pointer hover:bg-blue-700">
        <p className="text-white font-semibold">Register</p>
    </div>
    <div className="pt-2 pb-2">
        <p className="text-center text-gray-400">OR</p> 
       
    </div>
    <div className="bg-gray-900 h-10 rounded-lg flex items-center justify-center cursor-pointer">
    <img className="h-5 mr-2" src={googleLogo} alt="" />
        <p className="text-white">Register with Google</p>
    </div>
    <div className="bg-gray-900 mt-3 h-10 rounded-lg flex items-center justify-center cursor-pointer">
    <img className="h-6 mr-2" src={githubLogo} alt="" />
        <p className="text-white">Register with Github</p>
    </div>
    <div className="bg-gray-900 mt-3 h-10 rounded-lg flex items-center justify-center cursor-pointer    ">
    <img className="h-6 mr-2 ml-7" src={facebookLogo} alt="" />
        <p className="text-white">Register with Facebook</p>
    </div>
            
            <div className="pt-6 pb-8 text-center">
            <Link to="/" className="cursor-pointer">
            <p className="text-gray-300 font-bold">
              <i className="bi bi-arrow-left"></i> Back to home
            </p>
          </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
