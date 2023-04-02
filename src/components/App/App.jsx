import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from './App.styled';
import { Toaster } from 'react-hot-toast';
import Navigation from 'components/Navigation/Navigation';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <Toaster toastOptions={{ duration: 2000 }} />
    </Container>
  );
};

export default App;
