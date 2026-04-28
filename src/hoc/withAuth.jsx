function withAuth(Component) {
    return function ProtectedComponent(props) {
      const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  
      if (!isLoggedIn) {
        return (
          <div className="card">
            <h2>Access Denied</h2>
            <p>Please login first to view this page.</p>
          </div>
        );
      }
  
      return <Component {...props} />;
    };
  }
  
  export default withAuth;