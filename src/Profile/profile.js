
import "../App.css";
export default function Profile(prop) {
    return (
      <div className="App">
          <div className="cont" >
          <h1 align="">{prop.fullname}</h1>
          <br />
        <h2>{prop.bio}</h2>
        </div>
        <div>
        <img src={prop.Photo} alt="img in src" />
        </div>
        <button onClick={prop.alert}>success</button>
      </div>
    );
  };


  