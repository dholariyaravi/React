import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from './DPostS';


const Posts1 = () => {
    const data =useSelector(state =>state.Posts1)

    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(getPosts());
    }, []);


  return (
    <div>
         {data?.list?.map((item)=>{
                return(
                    <div>
                        {/* {item.image} */}
                             {item.id},
                             {item.title},
                             {item.price},
                             {item.description},
                     </div>  
                )  
            })}
    </div>
  )
}
export default Posts1;
