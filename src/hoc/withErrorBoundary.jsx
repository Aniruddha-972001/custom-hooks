import React from "react";

// React error boundaries currently require class component lifecycle methods.

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

//   This runs when a child component throws an error.It updates the error boundary state:
//   Once hasError becomes true, the fallback UI is shown.
  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

//   This runs after an error is caught.It is commonly used for logging:
  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }
//   The render method decides what UI to show.
  render() {
    if (this.state.hasError) {
      return (
        <div className="card">
          <h2>Something went wrong</h2>
          <p>This part of the page crashed, but the app is still running.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

function withErrorBoundary(Component) {
  return function ProtectedComponent(props) {
    return (
      <ErrorBoundary>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}

export default withErrorBoundary;