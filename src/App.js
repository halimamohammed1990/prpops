import Profile from "./Profile/profile";
import Photo from "./meme.jpg";
import "./App.css";
export default function App() {
  const funprop = () => {
    return alert("this my alert");
  };
  return (
    <div className="App">
      <Profile fullname="البحر"  bio="يأخذ البحر مساحةً كبيرة من القصائد والخواطر والقصص والروايات."    Photo={Photo} alert={funprop} />
    </div>
  );
}
