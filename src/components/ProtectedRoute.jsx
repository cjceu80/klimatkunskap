import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../utils/UserAuthContext";


//Redirect if not logged in
const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  console.log("Check user in Private: ", user);
  if (!user) {
    return <Navigate to="/klimat" />;
  }
  return children;
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired
}
