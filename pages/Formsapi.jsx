import { width } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";

const Formsapi = () => {
  const [posts, setPosts] = useState([]);
  const [postid, setPostId] = useState();
  const [postDetails, setPostsDetails] = useState("");

  const getPosts = async () => {
    //fetching all data initially
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );
    setPosts(result.data);
  };

  const fetchPostDetail = async (e) => {
    //fetching induvisual post data with id
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postid}`
    );
    setPostsDetails(result.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    fetchPostDetail();
  }, [postid]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <select
              onChange={(e) => setPostId(e.target.value)}
              style={{ width: "50%" }}
            >
              {posts.map((post) => {
                return (
                  <>
                    <option value={post.id}>{post.title}</option>
                  </>
                );
              })}
            </select>
          </div>
          <div className="col-md-8">
            <h1>{postDetails.title}</h1>
            <p>{postDetails.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formsapi;
