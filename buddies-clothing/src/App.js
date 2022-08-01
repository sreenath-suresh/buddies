
import './categories.styles.scss';

const App = () => {

  const categories = [
    {
      id:1,
      title: 'Caps',
    },
    {
      id:2,
      title: 'Jackets',
    },
    {
      id:3,
      title: 'Sneakers',
    },    
    {
      id:4,
      title: 'Men',
    },
    {
      id:5,
      title: 'Women',
    }
  ]

  return (
        <div className="categories-div">{/*container for categories*/}
          {categories.map(({title, id})=>(
            <div key={id} className="category-div">{/*container for each category*/}
            <div className='background-image'/> {/*<img/> placeholder for image that is to be added later  */ }
            <div className="category-body-div">
              <h2>{title}</h2>
              <p>Explore</p>
            </div> 
          </div>
          ))}
        </div>   
    );
};

export default App;
