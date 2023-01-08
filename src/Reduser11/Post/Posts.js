import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from './postsSlice';

const Posts = ()=> {
    const {list, status} =useSelector(state =>state.posts)

    console.log(list);
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(getPosts({userId1 : 1}));
    }, [dispatch]);

    if (status === 'loading'){
        return <div>Loading......</div>
    }


  return (
    <div>
            {list?.map((item)=>{
                return(
                    <div>{item.id} {item.title}</div> 
                )
                
            })}

    </div>
  )
}
export default Posts;
