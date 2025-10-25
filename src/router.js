import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './components/homepage/homepage';
import Projects from './components/projects/projects';
import NotFound from './components/notfound/NotFound';

// Create the router configuration with data router API
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      // Add other routes here as needed (events, team, contact, etc.)
      
      // Catch-all route for 404 Not Found
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
], {
  basename: 'ieeecssbcnssce',
});

export default router;

