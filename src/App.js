import Container from '@mui/material/Container';

import { Header } from './components';
import { Home, FullPost, Registration, AddPost, Login } from './pages';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<FullPost />} />
          <Route path="/posts/create" element={<h2>Contacts</h2>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Registration />} />
          <Route path="*" element={<h1>ОШИКБА, ТАКОГО АДРЕСА НЕ СУЩЕСТВУЕТ</h1>} />
        </Routes>
        <Home />
      </Container>
    </>
  );
}

export default App;
