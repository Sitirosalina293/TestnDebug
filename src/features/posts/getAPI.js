import { useState, useEffect } from "react";
import axios from "axios";

const API = "https://jsonplaceholder.typicode.com/posts";

function useAPI(){
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
          const response = await axios.get(API);
          setData(response.data);
        }
        fetchPosts();
      }, [])
      return { data };
}
export default useAPI