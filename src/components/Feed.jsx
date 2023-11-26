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
      console.log(result)
      setData(result.reverse());
    };

    fetchData();
    console.log(data)
  }, []);

  return (
    <div className="feed-container">
      <div className="feed">
        {data.map((post, index) => (
          <Post key={index} content={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
