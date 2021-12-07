import "./styles.css";

export default function BookViewer(props) {
  let sequels = props.books[props.current].sequels;
    let sequelsData
  if (sequels) {
    sequelsData = sequels.map((sequel) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <li style={{ padding: "5px" }}>{sequel}</li>
        <img alt="play" height="20px" src="https://i.imgur.com/8aRZ4bs.png" />
      </div>
    ));
  }

  return (
    <div class="bigdetails">
      <img
        class="big"
        alt={props.books[props.current].name}
        src={props.books[props.current].coverImg}
      />
      <ol>{sequelsData}</ol>
    </div>
  );
}
