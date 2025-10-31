import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import AuthFlow from './components/AuthFlow';
import HomePage from './components/homepage/homepage';
import Projects from './components/projects/projects';
import Contacts from './components/contact/contact';
import NotFound from './components/notfound/NotFound';
import Profile from './components/Profile/Profile';
import JoinForm from './components/joinForm/JoinForm';
import Team from './components/team/Team';

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
        path: 'auth',
        element: <AuthFlow />,
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
        path: 'join', // Or '/join' if you prefer an absolute path from basename
        element: <JoinForm />,
      },
      // Add other routes here as needed (events, team, contact, etc.)
      {
        path: 'team',
        element: <Team />,
      },
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

