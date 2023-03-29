import { useNavigate } from "react-router-dom";

export default function HomePage(){

    const navigate = useNavigate ();

    return (
        <div className="HomePage">
  <button className="BtnHome" onClick={() => navigate ("/characters")}>GO</button>
        </div>
    )
}