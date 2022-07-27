
const App = () => {

  const categories = [
    {
      id:1,
      title: 'Men',
    },
    {
      id:2,
      title: 'Women',
    },
    {
      id:3,
      title: 'Caps',
    },
    {
      id:4,
      title: 'Jackets',
    },
    {
      id:5,
      title: 'Sneakers',
    }
  ]

  return (
        <div className="categories-div">{/*container for categories*/}
          {categories.map(({title})=>(
            <div className="category-div">{/*container for each category*/}
            {/*<img/> placeholder for image that is to be added later  */ }
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
