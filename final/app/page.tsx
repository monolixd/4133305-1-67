import Basic from "@/components/Basic";
import Hook from "@/components/Hook";
import React from "react";
import UsersPage from "./user/page";



const App:React.FC =()=>{
  return(
    <>
      <h1>Welcome To Andy World</h1>
      <p>Hello Typescript</p>
      
      {/* <Basic />
      <Hook /> */}
      <UsersPage />
    </>
  );
};

export default App;
