import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'

const DisplayPost = () => {
    const [posts, setPosts] = useState([])
    
    useEffect(()=>{
        const fetchData = async () => {
            const res = await fetch("http://localhost:7000/api/blog/", {
                method: "GET",
                headers: {
                    token: localStorage.getItem("token")
                }
            })
            const data = await res.json()
            if(res.ok){
                setPosts(data)
            }else{
                console.log(data);
            }
        }
        fetchData()
    }, [posts])
    
    // const post = [
    //     {
    //         id: 1,
    //         title: "this is title 1",
    //         content: "this is content 1",
    //         image: "https://pbs.twimg.com/media/FnW_XyEaAAIO3gB?format=jpg&name=large",
    //         user: "jack",
    //         timestamp: "2 days ago"
    //     },
    //     {
    //         id: 2,
    //         title: "this is title 2",
    //         content: "this is content 2",
    //         image: "https://inside-machinelearning.com/wp-content/uploads/2023/01/jenjuhi23094_a_human_creating_a_universe_dadbab2c-107e-4b2e-b23e-100568c7b0fe.png",
    //         user: "jack",
    //         timestamp: "1 days ago"
    //     }
    // ]
    return (
        <Box sx={{ maxWidth: "600px", display: "flex", flexDirection: "column", margin: "auto", gap: 3, py:2 }}>
            {posts && posts.map(post=>(
                <PostCard post={post} key={post._id} />
            ))}
        </Box>
    )
}

export default DisplayPost