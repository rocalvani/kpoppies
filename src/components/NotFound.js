import { Link } from "react-router-dom";
import Sparkle from "./Sparkle";

const NotFound = () => {
  return (
    <div className="main__notFound">
      <Sparkle />
      <Sparkle />
      <Sparkle />
      <Sparkle />
      <Sparkle />
      <div className="main__notFound--content">
        <span className="material-icons main__notFound--icon">&#xe811;</span>
        <h3>Oooooops!</h3>
        <p>Parece que no pudimos encontrar nada acá.</p>
        <Link to="/">volvé al inicio</Link>
      </div>
    </div>
  );
};

export default NotFound;
