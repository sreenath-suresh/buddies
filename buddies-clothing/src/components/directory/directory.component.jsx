import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss';

const Directory = ({categories}) => {
    return (
        <div>
            <h1>Categories</h1>
            <div className='directory-div'>
              {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
              ))}
          </div>
        </div>
    )
}
export default Directory;