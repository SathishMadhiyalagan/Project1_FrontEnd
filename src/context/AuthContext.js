import { createContext,useState,useEffect, Children } from 'react'
import jwt_decode from "jwt-decode";
import { useNavigate  } from 'react-router-dom';



const AuthContext=createContext()

export default AuthContext;

export const AuthProvider =({children})=>{

    
    let [authTokens,setAuthTokens]=useState(()=>localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')):null)
    let [user,setUser]=useState(()=>localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')):null)
    let [loading,setLoading]=useState(true)
    
    let history=useNavigate ()
    

    let loginUser =async (event)=>{
        event.preventDefault()
        console.log('Form is submitted')
        let response=await fetch('http://127.0.0.1:8000/api/token/',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'username':event.target.username.value,'password':event.target.password.value})
        })
        let data=await response.json();
        console.log('data',data);
        console.log('responce',response);
        if (response.status==200){
            // console.log(data);
            setAuthTokens(data);
            setUser(jwt_decode(data.access));
            localStorage.setItem('authTokens',JSON.stringify(data));
            history.push('/')
        }else{
            alert('Something Wrong here!')
        }
    }

    let logoutUser=()=>{
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        history.push('/login')
    }

    let updateToken = async () =>{
        let response=await fetch('http://127.0.0.1:8000/api/token/refresh/',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'refresh':authTokens.refresh})
        })
        let data=await response.json();
        if (response.status==200){
            // console.log(data);
            setAuthTokens(data);
            setUser(jwt_decode(data.access));
            localStorage.setItem('authTokens',JSON.stringify(data));
            
        }else{
            logoutUser()
        }

    }


    useEffect(()=>{
        let mints15=1000*60*15;
        let interval=setInterval(()=>{
            if(authTokens){
                updateToken()
            }
        },mints15)
        return ()=> clearInterval(interval)

    },[authTokens,loading])

    let contextData={
        user:user,
        loginUser:loginUser,
        logoutUser:logoutUser,
    }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}
