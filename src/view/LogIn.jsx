import {useForm} from 'react-hook-form';
import { useMutation,QueryClient } from 'react-query';
import axios from 'axios';
import { useState, useEffect } from 'react';
const queryClient = new QueryClient()

function LogIn(){
    
    const [response, setResponse] = useState("")
    
    const {register,handleSubmit,errors}=useForm(0);
    const mutation = useMutation( async(data)=>{
        console.log(data)
        try {
            const loginDetail={login: data.user_name, password: data.password}
            const response = await axios.post("http://devapi.zaicrm.com/api/auth/login",loginDetail);
            console.log(response);
           setResponse(response)
        } catch (error) {
            console.log(error.response)
           setResponse(error.response)
        }
        
        
    });
    const onSubmit =(data) => {
        mutation.mutate(data);
    };
    return(
        <div className="row mt-5">
            <div className="col-3"></div>
            <form className="col-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                <div className="col-6 mb-5">User Name</div>
                <div className="col-6"><input ref={register({required:true})} type="text" className={`form-control ${errors&&errors.user_name&&"border-red"} ${response&&response.data&&response.data.data&&response.data.data.login&&"border-red"}`} name="user_name" />
                {errors&&errors.user_name&&<p className="text-danger">User Name is required</p>}
                {response&&response.data&&response.data.data&&response.data.data.login&&<p className="text-danger">{response.data.data.login}</p>}
                </div>
                <div className="col-6 mb-5">Password</div>
                <div className="col-6"><input type="password" ref={register({required:true})} name="password" className={`form-control ${errors&&errors.password&&"border-red"} ${response&&response.data&&response.data.data&&response.data.data.password&&"border-red"}`}  />
                { errors&&errors.password&&<p className="text-danger">Password is required</p>}
                {response&&response.data&&response.data.data&&response.data.data.password&&<p className="text-danger">{response.data.data.password}</p>}</div>
                
                
                <div className="col-6"></div>
                <div className="col-6"><input  type="submit" value="Log In" className="btn btn-primary"  />
                {response&&response.data&&response.data.code===200&&response.data.data&&<p className="text-success">{response.data.message}</p>}
                </div>
                </div>
            </form>
        </div>
        
    )
}

export default LogIn;