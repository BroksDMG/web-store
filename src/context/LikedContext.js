import React,{createContext,useState} from "react";
const LikedContext=createContext([])
export const LikedProvider=({children})=>{
    const [liked,setLiked] =useState([])
  return (
    <LikedContext.Provider value={[liked,setLiked]}>
        {children}
    </LikedContext.Provider>
  );
};