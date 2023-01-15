import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { getPosts1 } from './Out';


    const Tipp = () => {

         const data = useSelector(state => state.postc11)
 
          const mydispa = useDispatch();

          useEffect(() => {
            mydispa(getPosts1());
         
          },[]);


  return (
    <div>
        {data?.list1?.map((item,index) => {
            return(
                <div key={index}>
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

export default Tipp
