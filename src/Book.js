export const Book = (props) => {
  const { img, title, author, getbook, id } = props;
  const getSinglebook = () => {
    getbook(id);
  };

  return (
    <section>
      <img src={img} />
      {/* {console.log(2 + 2)} */}
      {/* {console.log(2 + 2)} */}
      {/* HERE IT WILL IMMEDIATELY INVOKE THE FUNCTION SO TO SOLVE THIS THERE ARE THE TWO FIXES */}
      {/* <button onClick={getbook(id)}>Click ME</button> */}
      <button onClick={getSinglebook}>Click ME</button>

      <h2>{title}</h2>
      <h4>{author}</h4>
    </section>
  );
};
