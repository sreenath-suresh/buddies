
import CategoryItem from './components/category-item/category-item.component';
import './categories.styles.scss';

const App = () => {

  const categories = [
    {
      "id": 1,
      "title": "Caps",
      "imageUrl": "https://i.ibb.co/fnHbWSV/cap.jpg"
    },
    {
      "id": 2,
      "title": "Jackets",
      "imageUrl": "https://i.ibb.co/kqj0xg0/jacket.jpg"
    },
    {
      "id": 3,
      "title": "Sneakers",
      "imageUrl": "https://i.ibb.co/YBhPwPL/sneakers-2.jpg"
    },
    {
      "id": 4,
      "title": "Men",
      "imageUrl": "https://i.ibb.co/zb34bm8/men.jpg"

    },
    {
      "id": 5,
      "title": "Women",
      "imageUrl": "https://i.ibb.co/4JkGxWk/women.jpg"
    }  ]

    return (
      <div className='categories-div'>
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    );
  };
  
  export default App;
  