import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from './DPostS';


const Posts1= ()=> {
    const data =useSelector(state =>state.Posts1)

    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(getPosts());
    }, []);

    

  return (
    <div>
        <table>
            {data?.list?.map((item)=>{
                return(
                    <div>
                        <tr>
                            <td> {item.id}</td>
                            <td> {item.title}</td>

                            <td> {item.price}</td>
                            <td> {item.description}</td>
                        </tr>
                     </div>  
                )
                
            })}
   </table>
    </div>
  )
}
export default Posts1;
