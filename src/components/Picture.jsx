const Picture = ({ img }) => {
    console.log(img);
    return (
      <div className="imageContainer">
        <img src={img} alt="" />;
      </div>
    );
  };
  
  export default Picture;
  