import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import Form from './components/Form/Form'
import Feedbacks from './components/UserDashboard/feedbacks'
import Feedback from './components/Singlefeedback/feedback'
import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const route=createBrowserRouter([
  {
    path:"/",
    element:<Form></Form>
  },
  {
    path:"/feedbacks",
    element:<Feedbacks></Feedbacks>
  },
  {
    path:"/feedback/:id",
    element:<Feedback></Feedback>
  }
])


function App() {

  return (
    <ChakraProvider>
      <RouterProvider router={route}/>
    </ChakraProvider>
  )
}

export default App
