import React, { useState, useEffect } from 'react';
import '../styles/Feed.css'
import Post from './Post';
import * as fcl from "@onflow/fcl"
import { getPosts } from "../cadence/scripts/getPosts"

const Feed = () => {
  const [ data, setData ] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await fcl.send([fcl.script(getPosts)]).then(fcl.decode);
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div className="feed">
      {data.map((post) => (
        <Post
          content={post}
        />
      ))}
    </div>
  );
};

export default Feed;
