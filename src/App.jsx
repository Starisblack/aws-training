import { Route, Routes } from "react-router-dom"
import Layout from "./Layout/Layout"
import Home from "./pages/Home"
import CourseResources from "./pages/CourseResources"
import Course from "./pages/Course"


const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/course-resources" exact element={<CourseResources />} />
        <Route path="/course/:title" exact element={<Course />} />
      </Routes>
    </Layout>
  )
}

export default App