
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className='w-1/3 bg-gray-200'>
            <div className='text-center mt-4'>
                <h2 className='text-2xl font-bold text-red-600'>Reading Time: {readingTime}</h2>
            </div>
            <h2 className="text-3xl font-bold text-center mt-4">BookMarks: {bookmarks.length}</h2>
            <div className='mt-8'>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};


Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;