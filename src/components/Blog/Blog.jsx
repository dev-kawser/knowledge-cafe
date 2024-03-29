import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const {id, title, cover, author, author_img, reading_time, posted_date, hashtags } = blog;
    return (
        <div className='space-y-5 mb-16'>
            <img src={cover} alt={`title of the cover is {title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <img className='w-16' src={author_img} alt="" />
                    <div>
                        <h3 className="text-xl font-bold">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)}><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-3xl font-bold">{title}</h2>
            {/* <p>{hashtags}</p> */}
            <div className='flex gap-2'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </div>
            <button onClick={() => handleMarkAsRead(id, reading_time)} className='text-purple-800 underline font-medium'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;