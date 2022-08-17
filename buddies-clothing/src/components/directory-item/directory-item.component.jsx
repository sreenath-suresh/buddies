import { useNavigate } from 'react-router-dom'

import './directory-item.styles.scss'

const DirectoryItem = ({category}) => {/* initialising category item as a functional component */

    const { imageUrl, title, route } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return(
        <div  className="directory-item-container" onClick={onNavigateHandler}>{/*container for each category*/}
            <div className='background-image'style=
                {{ 
                backgroundImage: `url(${imageUrl})`, 
                }}
            /> {/*<img/> placeholder for image that is to be added later  */ }
            <div className="body">
                <h2>{title}</h2>
            </div> 
        </div>
    )
}

export default DirectoryItem