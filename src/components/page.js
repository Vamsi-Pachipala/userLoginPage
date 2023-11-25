import { useState } from "react";
import logo from "../resource/login_img.jpg";
function Page() {
  let errorArray=[]
  let [userName, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [mobileNumber, setMobileNumber] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [error, setError] = useState([]);
  let [success,setSuccess]=useState("")
  function submitForm(e) {
    e.preventDefault()
    setError([])
    setSuccess("")
    if(userName==""){
      errorArray.push("userName should not be empty")
     
    }
    if(email==""){
      errorArray.push("email should not be empty")
   
    }
    if(mobileNumber==""){
      errorArray.push("mobileNumber should not be empty")
    
    }
    if(password==""){
      errorArray.push("password should not be empty")
    }
    if(password!=confirmPassword){
      errorArray.push("password did not match")
    }
    if(errorArray.length>0){
       setSuccess("")
       setError(errorArray)
    }
    else{
      setError([])
      setSuccess("Form submitted Successfully")
    }
  }
  return (
    <div class="page">
      <div class="left_div">
        <img src={logo} />
      </div>
      <div class="right_div">
        <form onSubmit={submitForm}>
          <div class="right">
            <input type="text" placeholder="fullName" onChange={(e)=>{
              setUserName(e.target.value)
            }} />
            <input type="email" placeholder="E-mail" onChange={(e)=>{
              setEmail(e.target.value)
            }} />
            <input type="number" placeholder="Mobile Number" onChange={(e)=>{
              setMobileNumber(e.target.value)
            }}/>
            <input type="password" placeholder="Password" onChange={(e)=>{
              setPassword(e.target.value)
            }}/>
            <input type="password" placeholder="confirm password" onChange={(e)=>{
              setConfirmPassword(e.target.value)
            }}/>
            <button type="submit">Submit</button>
              {
                error.length>0 && error.map((item)=>
                  <p style={{color:'red'}}>{item}</p>
                )
              }
              {
                <p style={{color:'green'}}>{success}</p>
              }
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
