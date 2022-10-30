import { routes } from '@/ROUTES/routes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = (): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map(route => (
            <Route
              key={route.name}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
