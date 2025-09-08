import { useState,useEffect,createContext } from "react";
// import Profile from "../pages/profile/Profile"; // Note: This import seems unnecessary here

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) =>{
    const [currentUser,setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || {
            // This is the temporary mock user object
            id:2,
            name:"Jonny sins",
            ProfilePic:
            "https://images.pexels.com/photos/206551/pexels-photo-206551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    );

    const login = () =>{
        // TO DO
        setCurrentUser({
            id:2,
            name:"Jonny sins",
            ProfilePic:
            "https://images.pexels.com/photos/206551/pexels-photo-206551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        });
    };

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser));
    },[currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser,login }}>
            {children}
        </AuthContext.Provider>
    );

};