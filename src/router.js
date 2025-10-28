import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './components/homepage/homepage';
import Projects from './components/projects/projects';
import Contacts from './components/contact/contact';
import NotFound from './components/notfound/NotFound';
import JoinForm from './components/joinForm/JoinForm';

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
        path: 'join', // Or '/join' if you prefer an absolute path from basename
        element: <JoinForm />,
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

