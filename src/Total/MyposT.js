import React, { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'

  export default function MyposT () {

    const mydiss = useDispatch();

      const mydata = useSelector(p=>p.posts.data);
     
       console.log(mydata);

      useEffect(() => {

         mydiss({ type: 'FETCH_POSTS_REOUEST'});

      }, []);

    return (
        <div>
            <table>
                <tbody>
        {mydata?.map((elment,index) => {
             return(
              <tr key={index}>  
                  <td>{elment.id}</td>
                  <td>{elment.title}</td>
                  <td>{elment.albumId}</td> 
            </tr>
        )
       })}
         </tbody>
       </table>
       </div>
    );
}


