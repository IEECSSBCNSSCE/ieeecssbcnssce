import { createBrowserRouter } from 'react-router-dom';
import App from './App';

// Note: I'll simplify the router to just use App since App.js now handles the main routing logic
// for internal transitions with AnimatePresence.
const router = createBrowserRouter([
  {
    path: '*',
    element: <App />,
  }
], {
  basename: '/ieeecssbcnssce',
});

export default router;
