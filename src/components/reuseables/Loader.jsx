import { useState} from "react";
import ClockLoader from "react-spinners/ClockLoader";



function Loader() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#000");
  return (
    <div className="sweet-loading block flex justify-center items-center h-screen">
      <ClockLoader color={color} loading={loading} css='' size={150} />
    </div>
  );
}

export default Loader