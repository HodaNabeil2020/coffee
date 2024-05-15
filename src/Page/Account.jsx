import { Link } from "react-router-dom";
import "../style/account.css";
import { useState } from "react";
import Footer from "../Components/Footer";

import ScrollTopButton from "../Components/ScrollTopButton";
function Account() {
  const [name,setName]=useState("");
  const[password,setpassword] =useState("");
  const[email,setEmail]=useState("");
  const [accept,setAccept] =useState(false)
  const [emailError,setEmailError] =useState("")


  function submite(e) {
    let sendData = false
    e.preventDefault();
    setAccept(true)

    if(  name === "" ||password.length < 6 ) {
      sendData = false
    }else sendData = true

    // try{
    //   if(sendDate) {
    //     // sendData
    //       let res = await axios.post("", {
    //       name: name,
    //       email: email,
    //       password: password,
    //     })
    //       if (res.status === 200) {
    //         window.localStorage.setItem("email", email);
    //         window.location.pathname='/'
    //       }
    //   }
    // } catch (error) {
    //   setEmailError(error.response.status)
    // }
  }
  return (
    <div className=" account bg-[#fefae0]    ">
      <div className="container    rounded-[6px]
          bg-[#c4975e] w-[80%] m-auto relative  top-[20px]">
      <div
      
       >
        <div className=" flex  justify-between sm:flex-col md:flex-row ">
          <div className=" w-full md:w-[40%] ">
            <div className="  relative flex-col pt-[50px]">
              <h3 className="  text-[#fefae0]  px-[15px] tracking-[1px]  mb-[20px] 
              sm:text-[20px]  md:text-[22px] lg:text-[25px] font-bold">
                Create account
              </h3>
              <div
                className="element-center gap-x-[8px] mx-[20px]  cursor-pointer py-[8px] px-[12px] 
                   rounded-[50px] mb-[15px]
                  border-[1px] border-[#fefae0]  border-solid"
               >
                <img
                  className=" w-[15px] h-[15px] object-cover "
                  src={require("../IMg/google.png")}
                  alt="img-google"
                />
                <span className="text-[#fefae0]  "> sign up with google </span>
              </div>
                <div className=" relative  break  mb-[15px]">
                    <span
                    className="    block text-center   text-[#fefae0]
                  "
                  >
                    Or
                  </span>
                </div>


              <form 
              onSubmit={submite}
              action="/" className="p-[15px]">
              <div className=" flex-col  flex mb-[15px] ">
                <label
                  className=" text-[#fefae0] text-[15px] mb-[6px]"
                  htmlFor="name"
                >
                  First name*
                </label>
                <input
                  className="  outline-none py-[6px]  sm:py-[8px] px-[15px]  
                  text-[14px] min-color
                  rounded-[6px] "
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e)=> {
                      setName(e.target.value)
                  }}
                />
                {
                  name === "" && accept && <p className="error ">Username required</p> 
                }
              </div>

              <div className=" flex-col  flex mb-[15px] ">
                <label
                  className=" text-[#fefae0] text-[15px] mb-[6px]"
                  htmlFor="email"
                >
                  Email *
                </label>
                <input
                  className=" outline-none py-[6px]  sm:py-[8px] px-[15px]  
                    text-[14px] min-color
                    rounded-[6px] "
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />

                  {/* {
                      accept &&  emailError === 422  && <span className="error-message">The email has already been taken </span>
                  } */}
              </div>

              <div className=" flex-col  flex mb-[15px] ">
                <label
                  className=" text-[#fefae0] text-[15px] mb-[6px]"
                  htmlFor="password"
                >
                  Password*
                </label>
                <input
                  className=" outline-none py-[6px]  sm:py-[8px] px-[15px]  
                    text-[14px] min-color
                    rounded-[6px] "
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e)=>setpassword(e.target.value)}
                />

                {
                  password.length < 6 &&accept && <p className="error">he number of letters is not less than 6 </p>
                }
              </div>

              <div
                className=" text-[#fefae0] bg-[#220100] text-center
                  rounded-[50px] cursor-pointer
                   my-[10px] sm:my-[15px] px-[18x]  py-[10px] sm:py-[12px]"
              >
                <input 
                  className=" text-[15px]  sm:text-[16px] tracking-[1px] cursor-pointer 
                   hover:tracking-[4px] duration-[0.3s] transition-all  "
                type="submit" value={"Create Accounte"} />
              </div>
              <p className="my-[40px] text-[#fefae0] text-center text-[15px]">
                You already have an account?
                <Link to={"/login"}
                 className="text-[#220100] ml-[2px] font-bold text-[14px] ">
                   Login in
                </Link>
              </p>
            </form>
            </div>
          
    
          </div>

          <div className=" container-image  flex-1   flex-grow flex  justify-end">
            <img
              className="  hidden sm:block sm:max-w-full object-cover      rounded-[6px] "
              src={require(`../IMg/img-about_2.jpg`)}
              alt="img_about"
            />
          </div>
        </div>
      </div>
      </div>


        <div className=" mt-[50px]">
        <Footer/>
        </div>
        <ScrollTopButton/>
    </div>
  );
}

export default Account;
