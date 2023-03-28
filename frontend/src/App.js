import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Components/Home";

import Signup from "./Components/Auth/SignUp/Signup";
import Signin from "./Components/Auth/SignIn/Signin";
import { AuthContext} from "./API/AuthContext";
import PrivateRoute from "./Route/PrivateRoute.jsx";
import Profile from "./Components/Profile/Profile";
import { ProfileContext } from "./API/ProfileContext";
import Tutors from "./Components/Tutors/Tutors";
import TutorProfile from "./Components/TutorProfile/TutorProfile";
import Messenger from "./Components/Messenger/Messenger";
import { ConversationContext } from "./API/ConversationContext";
import Header from "./Components/Main/Header";
import Footer from "./Components/Main/Footer";



function App() {


  return (

    <AuthContext>
    <ProfileContext>
    <ConversationContext>
      <Router>
        {/* <Header/>    */}

        <Switch>

          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/login" component={Signin} />
          <Route exact path="/register" component={Signup} />
      <main style={{ background: "#F5F5F5" }}>

          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/tutors" component={Tutors} />
          <PrivateRoute exact path="/tutor/:id" component={TutorProfile} />
          <PrivateRoute exact path="/profile/:id" component={Profile} />
          <PrivateRoute exact path="/Messenger" component={Messenger} />
          </main>


        </Switch>

        {/* <Footer /> */}

      </Router>
    </ConversationContext>
    </ProfileContext>
    </AuthContext>
  );
}

export default App;
