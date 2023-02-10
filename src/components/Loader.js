const Loader = (props) => {
  return (
    <article className="main__loader--note">
      <span className="material-icons main__loader--loader">&#xe405;</span>
      <p className="main__loader--text">{props.msg}</p>
    </article>
  );
};

export default Loader;
