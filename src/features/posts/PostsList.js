import React from 'react';
import { Link } from "react-router-dom";
import useAPI from './getAPI';

function PostsList(){

    const { data } = useAPI();
  
    return(
        <>
            <header>
                <button className='btnHire fw-bold my-4 px-4 py-2 ms-5'>
                    <Link className="contentButton" to="/">Back to Home</Link>
                </button>
            </header>
            <div className="container">
                <h1 className="fw-bold">POST</h1>
                <table className="table table-striped mt-5">
                    <thead className="table-dark">
                        <tr>
                            <th className="title">Title</th>
                            <th className="content">Content</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((post =>(
                                <tr key={post.id}>
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>
                                </tr>
                            )))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default PostsList