import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RestaurantsDetails = () => {
  const restaurantId = useParams();

  const restaurantInfo = [
    {
      id: 1,
      name: "The Taste of India",
      cuisine: "Inidan",
      location: "757 Cross Street, Seattle",
      rating: 4.5,
      description:
        "Experience authentic Italian Cuisine in a cozy atmoshphere.",
      menu: [
        { name: "Chicken Roasted", price: 20 },
        { name: "Chicken Biryani", price: 15 },
        { name: "Mutton Biryani", price: 35 },
      ],
    },
    {
      id: 2,
      name: "Spice Junction",
      cuisine: "Indian",
      location: "456 Elm Street, Townville",
      rating: 4.2,
      description: "Savor the falvors of India with our traditional dishes.",
      menu: [
        { name: "Chicken Tikka Masala", price: 14 },
        { name: "Vegetable Biryani", price: 12 },
        { name: "Gulab Jamun", price: 6 },
      ],
    },
    {
      id: 3,
      name: "Sushi Delight",
      cuisine: "Japanese",
      location: "789 Oak Avenue, Villageland",
      rating: 4.7,
      description: "Enjoy exquisite Japanese sushi prepared by master chefs.",
      menu: [
        { name: "California Roll", price: 10 },
        { name: "Sashimi Platter", price: 18 },
        { name: "Green Tea Ice Cream", price: 5 },
      ],
    },
    {
      id: 4,
      name: "The Golden Spoon",
      cuisine: "Italian",
      location: "123 Main Street, Cityville",
      rating: 4.5,
      description:
        "Experience authentic Italian Cuisine in a cozy atmoshphere.",
      menu: [
        { name: "Sphaghetti Carbonara", price: 15 },
        { name: "Margherita Pizza", price: 12 },
        { name: "Tiramisu", price: 8 },
      ],
    },
  ];

  const restaurantData = restaurantInfo.find(
    (res) => res.id == restaurantId.restaurantId
  );

  return (
    <>
      <Header />
      <main className="container py-4">
        <h1 className="display-3 fw-medium">{restaurantData.name}</h1>
        <p>Cuisine: {restaurantData.cuisine}</p>
        <p>Location: {restaurantData.location}</p>
        <p>Rating: {restaurantData.rating}</p>
        <p>{restaurantData.description}</p>
        <hr />
        <h3>Menu</h3>
        <div className="row">
          {restaurantData.menu.map((item, idx) => (
            <div key={idx} className="col-md-4 mb-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <strong className="card-title">{item.name}</strong>
                  <p className="card-text">Price: ${item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RestaurantsDetails;
