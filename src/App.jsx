import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Pokemon from './routes/pokemon/pokemon';

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path=":pokemon" element={<Pokemon />} />
    </Routes>
  );
};

export default App;
