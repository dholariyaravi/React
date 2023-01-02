import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getUserlist } from './action/Action';

 export default function UserList () {

    const data = useSelector (y=>y.user.data.data)
    
    const Mycous = useDispatch();
    console.log(data);

    useEffect ( () => {
        Mycous(getUserlist());
    }, [])

    return (
        <div> 
            <table>
                <tbody>
            {data?.map((val,index) => {
                return(
                    <tr key={index}>
                         <td>{val.id}</td>
                        <td>{val.email}</td>
                        <td>{val.first_name}</td>
                        <td>{val.last_name}</td>
                       {/* <img src={val.avatar}></img> */}
                     
                    </tr>   
                )    
            })}
           </tbody>
             </table>
        </div>  
    );
}


