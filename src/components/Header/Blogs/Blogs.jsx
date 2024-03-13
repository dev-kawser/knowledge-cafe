import { useEffect } from "react";
import { useState } from "react";
import Blog from "../../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({ handleAddToBookmark, handleMarkAsRead }) => {
    const [Blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('Blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className='w-2/3'>
            {
                Blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handleAddToBookmark={handleAddToBookmark}
                    handleMarkAsRead ={handleMarkAsRead}
                    ></Blog>)
            }
        </div>
    );
};


Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blogs;