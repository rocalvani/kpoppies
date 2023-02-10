import Loader from "./Loader";
import Sparkle from "./Sparkle";

const LoaderContainer = (props) => {
  return (
    <section className="main__loader">
      <Sparkle />
      <Sparkle />
      <Sparkle />
      <Sparkle />
      <Sparkle />

      <Loader msg={props.msg} />
    </section>
  );
};

export default LoaderContainer;
