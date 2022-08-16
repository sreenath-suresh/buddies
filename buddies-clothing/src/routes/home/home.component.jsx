import Directory from '../../components/directory/directory.component';


const Home = () => {

  const categories = [
    {
      "id": 1,
      "title": "Caps",
      "imageUrl": "https://i.ibb.co/FHJg1DQ/caps.jpg"
    },
    {
      "id": 2,
      "title": "Jackets",
      "imageUrl": "https://i.ibb.co/7Y5WHKG/jackets.jpg"
    },
    {
      "id": 3,
      "title": "Sneakers",
      "imageUrl": "https://i.ibb.co/Hzpct7K/sneakers.jpg"
    },
    {
      "id": 4,
      "title": "Men",
      "imageUrl": "https://i.ibb.co/m9JkYfg/men.jpg"

    },
    {
      "id": 5,
      "title": "Women",
      "imageUrl": "https://i.ibb.co/7GDLFV9/women.jpg"
    }  ]

    return (
      <Directory categories={categories} />

    );
  };
  
  export default Home;
  