import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss';

const categories = [
  {
    id: 1,
    title: "Caps",
    imageUrl: "https://i.ibb.co/FHJg1DQ/caps.jpg",
    route: 'shop/caps'
    
  },
  {
    id: 2,
    title: "Jackets",
    imageUrl: "https://i.ibb.co/7Y5WHKG/jackets.jpg",
    route: 'shop/jackets'
  },
  {
    id: 3,
    title: "Sneakers",
    imageUrl: "https://i.ibb.co/Hzpct7K/sneakers.jpg",
    route: 'shop/sneakers'
  },
  {
    id: 4,
    title: "Men",
    imageUrl: "https://i.ibb.co/m9JkYfg/men.jpg",
    route: 'shop/men'

  },
  {
    id: 5,
    title: "Women",
    imageUrl: "https://i.ibb.co/7GDLFV9/women.jpg",
    route: 'shop/women'
  }  ]



const Directory = () => {
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