import { useAuth } from '../contexts/AuthContext.jsx'; 
import AuthForm from './Auth-Form.jsx';
import { Loader2 } from 'lucide-react';

const ProtectedDashboard = () => {
  return (
    <div>
      <p>You are already logged in!</p>
    </div>
  );
};

const AuthFlow = () => {
  const { currentUser, loading } = useAuth();
  
  const renderContent = () => {
    if (loading) {
      return (
        <div>
          <Loader2 />
          <span>Checking Authentication Status...</span>
        </div>
      );
    }

    if (currentUser) {
      return <ProtectedDashboard />;
    }
    
    return <AuthForm />;
  };

  return (
    <div className="ieee-auth-page">
      <div className="ieee-auth-card">
        {renderContent()}
      </div>
    </div>
  );
};

export default AuthFlow;
