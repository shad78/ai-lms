import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import AddCourseScreen from "./screens/AddCourseScreen";
import CourseScreen from "./screens/CourseScreen";
import AddProgramScreen from "./screens/AddProgramScreen";
import ProgramScreen from "./screens/ProgramScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="p-4">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/add-course" element={<AddCourseScreen />} />
            <Route path="/course/:id" element={<CourseScreen />} />
            <Route path="/course/:id/add-prog" element={<AddProgramScreen />} />
            <Route path="/course/:id/program/:id" element={<ProgramScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
