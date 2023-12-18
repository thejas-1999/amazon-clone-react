import "./Home.css";
import Product from "./Product";
const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="the home image of amazone"
        />

        <div className="home__row">
          {/* 2 product components */}
          <Product
            id={"001"}
            title={"Think and Grow Rich: THE 21st CENTURY EDITION"}
            price={29.99}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/711xMzVPIuL._AC_SY145_.jpg"
            }
            rating={4}
          />
          <Product
            id={"002"}
            title={"MuscleBlaze MB-Vite Daily Multivitamin"}
            price={20.76}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61CVm4xU1SL._SL1500_.jpg"
            }
            rating={3}
          />
        </div>
        <div className="home__row">
          {/* 3 product components */}
          <Product
            id={"003"}
            title={"About Space Christmas Tree "}
            price={10}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91QBH7hhtuL._AC_SY200_.jpg"
            }
            rating={3}
          />
          <Product
            id={"004"}
            title={"MuscleBlaze MB-Vite Daily Multivitamin"}
            price={20.76}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61CVm4xU1SL._SL1500_.jpg"
            }
            rating={3}
          />
          <Product
            id={"005"}
            title={"Think and Grow Rich: THE 21st CENTURY EDITION"}
            price={29.99}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/711xMzVPIuL._AC_SY145_.jpg"
            }
            rating={4}
          />
        </div>
        <div className="home__row">
          {/* 1 product component */}
          <Product
            id={"006"}
            title={"About Space Christmas Tree"}
            price={10}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91QBH7hhtuL._AC_SY200_.jpg"
            }
            rating={3}
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
