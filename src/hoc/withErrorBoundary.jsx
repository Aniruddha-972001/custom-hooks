import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

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