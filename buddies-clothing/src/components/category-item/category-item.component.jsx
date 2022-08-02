import './category-item.styles.scss'

const CategoryItem = ({category}) => {/* initialising category item as a functional component */

    const { imageUrl, title } = category;

    return(
        <div  className="category-div">{/*container for each category*/}
            <div className='background-image'style=
                {{ 
                backgroundImage: `url(${imageUrl})`, 
                }}
            /> {/*<img/> placeholder for image that is to be added later  */ }
            <div className="category-body-div">
                <h2>{title}</h2>
                <p>Explore</p>
            </div> 
        </div>
    )
}

export default CategoryItem