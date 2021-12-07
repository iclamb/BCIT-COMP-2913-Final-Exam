export default function BookDetail({ name, coverImg, author, coauthor, setCurrent }) {
    let coauthorstring;

    if(coauthor){
        coauthorstring = "with " + coauthor;
    }
  
    return (
    <div class="bigbig" style={{ display: "flex", cursor: "pointer" }}>
      <img
        alt={name}
        style={{
          height: "45px",
          borderRadius: "30px",
          marginBottom: "15px",
        }}
        src={coverImg}
        onClick={() => setCurrent()}
      />
      <p onClick={() => setCurrent()} style={{ marginLeft: "50px" }}>
        {name} by {author} {coauthorstring}
      </p>
    </div>
  );
}
