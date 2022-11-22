import Card from "../Components/Shared/Card";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is React app ta leave feedback for a product or service</p>
        <p>Version : 1.0.0</p>
        <p>
          <Link to="/">Back To Home</Link>
        </p>
      </div>
    </Card>
  );
};

export default About;
