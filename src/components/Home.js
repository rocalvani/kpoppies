import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <section>
      <div className="main__img--container">
        <img src={props.img} alt="" />
      </div>
      <div className="main__color" index={props.id}></div>
      <div className="main__title">
        <h2 className="main__text" draggable="false">
          {props.title}
        </h2>
      </div>
      <div className="main__content">
        <p className="main__desc">{props.desc}</p>
        <div className="main__link" index={props.id}>
          <Link to={"/shop/item/" + props.link}>ver más</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
