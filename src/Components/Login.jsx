import { useState } from "react";
import { Link } from "react-router-dom";

import "../style/account.css"

function Login() {
  const[password,setpassword] =useState("");
  const[email,setEmail]=useState("");
  const [accept,setAccept] =useState(false);

  const [emailError,setEmailError] =useState("")

  async function submit(e) {
    let sendDate = false
    e.preventDefault();
    setAccept(true);
    if(    password.length < 6   ) {
        sendDate = false
    }else sendDate = true


    // try{
    //   if(sendDate) {
    //     // sendData
    //       let res = await axios.post("", {
    //       email: email,
    //       password: password,
    //     })
    //     if(res.status === 200) {
    //       window.localStorage.setItem("email",email) ;
    //       window.location.pathname='/'
    //     }
        
    //   }
    // } catch (error) {
    //   setEmailError(error.response.status)
    // }
    
  }
  return (
    <div className=" login bg-[#fefae0] relative">
      <div className="bg-[#c4975e] p-[10px] element-center relative first-letter:
            top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
            w-[300px] rounded-[10px]
      ">
          <form 
            onSubmit={submit}
            className="">
            <div className=" flex-col  flex mb-[15px] ">
                <label
                  className=" text-[#fefae0] text-[15px] mb-[6px]"
                  htmlFor="password"
                >
                  Password*
                </label>
                <input
                  className="  outline-none py-[8px] px-[15px]  
                    text-[14px] min-color
                    rounded-[6px] "
                  type="password"
                  id="password"
                  required
                  placeholder="Enter password "
                  value={password}
                  onChange={(e)=>setpassword(e.target.value)}
                />

                {
                  password.length < 6 &&accept && <p className="error">he number of letters is not less than 6 </p>
                }
              </div>

              <div className=" flex-col  flex mb-[15px] ">
                <label
                  className=" text-[#fefae0] text-[15px] mb-[6px]"
                  htmlFor="email"
                >
                  Email*
                </label>
                <input
                  className="  outline-none py-[8px] px-[15px]  
                    text-[14px] min-color
                    rounded-[6px] "
                  type="email"
                  id="email"
                  placeholder=" Enter Email "
                  required
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />

                  {/* {
                      accept &&  emailError === 422  && <span className="error-message">The email has already been taken </span>
                  } */}
              </div>

              <div
                className=" text-[#fefae0] bg-[#220100] text-center
                  rounded-[50px] cursor-pointer
                  my-[15px] px-[18x]  py-[10px]
                  "
              >
                <input 
                  className=" tracking-[1px] cursor-pointer  hover:tracking-[4px] duration-[0.3s] transition-all "
                type="submit" value={"Sign In"} />
              </div>
              <p className="my-[40px] text-[#fefae0] text-center text-[15px]">
               Do not have an account?
                <Link to={"/account "} className="text-[#220100] ml-[2px] font-bold text-[14px]">
                   Sign Up
                </Link>
              </p>

          </form>
      </div>
      
    </div>
  )
}

export default Login
