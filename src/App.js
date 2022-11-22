import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Card from "./Components/Shared/Card";
import FeedbackForm from "./Components/FeedbackForm";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/FeedbackStats";
import Header from "./Components/Header";
// import FeedbackData from "./data/FeedbackData";
import About from "./Pages/About";
import AboutIconLink from "./Components/AboutIconLink";
import { FeedbackProvider } from "./Components/Context/FeedbackContext";
// import Post from "./Components/Post";
const App = () => {
  // const [feedback, setFeedback] = useState(FeedbackData);

  // const addFeedback = (newFeedback) => {
  //   newFeedback.id = uuidv4();
  //   setFeedback([newFeedback, ...feedback]);
  // };

  // const deleteFeedback = (id) => {
  //   if (window.confirm("Are you sure you want to delete")) {
  //     setFeedback(feedback.filter((item) => item?.id !== id));
  //   }
  // };
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<About />} />
          </Routes>
          {/* <Card>
          <NavLink to="/" activeClassName="active">
          Home
          </NavLink>
          <NavLink to="/about" activeClassName="active">
          About
          </NavLink>
        </Card> */}
          <AboutIconLink />
        </div>
      </BrowserRouter>
    </FeedbackProvider>
  );
};

export default App;
