import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './components/homepage/homepage';
import Projects from './components/projects/projects';
import Contacts from './components/contact/contact';
import NotFound from './components/notfound/NotFound';
import Profile from './components/Profile/Profile';

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
      {
        path: 'contacts',
        element: <Contacts />,
      },
      {
        path: 'profile',
        element: <Profile />,
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
  basename: '/ieeecssbcnssce',
});

export default router;

