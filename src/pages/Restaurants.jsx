import Footer from "../components/Footer";
import Header from "../components/Header";

export default function () {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1 className="display-4 fw-medium mb-3">Restaurants</h1>
        <div className="card mb-3">
          <div className="row g-0 align-items-stretch">
            <div className="col-md-4">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
                className="img-fluid h-100 w-100 object-fit-cover rounded-start"
                alt="Restaurant 1 Image"
                style={{ maxHeight: "100%", width: "100%" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Taste of India</h5>
                <p className="card-text">
                  Enjoy authentic Indian cuisine at Tase of India. Explore a
                  variety of delicious dishes from different regions of India.
                </p>
                <address className="mb-0">Rating: 4.7 | Open Now</address>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3">
          <div className="row g-0 aligns-items-stretch">
            <div className="col-md-4">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D"
                className="img-fluid object-fit-cover rounded-start h-100"
                alt="Restaurant 2 Image"
                style={{ maxHeight: "100%", width: "100%" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-">Pizza Paradise</h5>
                <p>
                  Indulge in mouth-watering pizzas at Pizza Paradise. With a
                  variety of toppings and crusts, it's a pizza lover's dream.
                </p>
                <address className="mb-0">Rating: 4.5 | Open Now</address>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
