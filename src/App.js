import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import privateRoutes from './routes/privateRoutes'
import PrivateRoute from './routes/PrivateRoute'

function App() {
  return (
    <>
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout
            const Page = route.page
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })}
          {privateRoutes.map((route, index) => {
            const Layout = route.layout
            const Page = route.page
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <PrivateRoute>
                    <Layout>
                      <Page />
                    </Layout>
                  </PrivateRoute>
                }
              />
            )
          })}
        </Routes>
      </Router>
      <ToastContainer autoClose={1200} />
    </>
  )
}

export default App
