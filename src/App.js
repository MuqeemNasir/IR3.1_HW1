import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main className="container py-5 bg-light">
        <h1 className="display-4 fw-medium ">Feautured Restaurants</h1>
        <div className="mb-3 pt-3">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
            className="img-fluid object-fit-cover border rounded h-100"
            alt="Restaurant 1 Image"
            style={{ maxHeight: "100%", width: "100%" }}
          />
        </div>
        <h2>Taste of Italy</h2>
        <address>Italin | Rating: 4.5</address>
        <address>123 Main Street, Anytown, USA</address>

        <div className="mb-3 pt-3">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D"
            className="img-fluid object-fit-cover border rounded h-100"
            alt="Restaurant 2 Image"
            style={{ maxHeight: "100%", width: "100%" }}
          />
        </div>
        <h2>Spice Village</h2>
        <address>Indian | Rating: 4.3</address>
        <address>453 Elm Street, Anytown, USA</address>
      </main>
      <Footer />
    </>
  );
}
