import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AppBar from './components/layouts/AppBar';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';

const App = () => (
  <BrowserRouter>
    <AppBar />

    <main>
      <Routes>
        <Route index element={<Login />} />

        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
