import withErrorBoundary from "../hoc/withErrorBoundary";

function BuggyComponent() {
  throw new Error("Intentional crash");

  return <h2>This will not render</h2>;
}

export default withErrorBoundary(BuggyComponent);