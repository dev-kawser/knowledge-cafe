import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [Blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('Blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className='w-2/3'>
            <h1 className="text-3xl">Blogs: {Blogs.length}</h1>
        </div>
    );
};

export default Blogs;