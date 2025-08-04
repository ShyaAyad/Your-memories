import React, { useEffect } from 'react'
import { useCreatePost } from '../Store/post.store'

const Post = () => {

  const getAllData = useCreatePost((state) => state.getAllPosts)

  useEffect(() => {
    getAllData();
    console.log("Data list is empty")
  })

  return (
    // displaying data comming from the API here
    <div>Post</div>
  )
}

export default Post