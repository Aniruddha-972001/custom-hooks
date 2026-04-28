import { useState } from "react";
import withErrorBoundary from "../hoc/withErrorBoundary";

function BuggyComponent() {
  const [shouldCrash, setShouldCrash] = useState(false);

  if (shouldCrash) {
    throw new Error("Intentional crash after button click");
  }

  return (
    <div className="card">
      <h2>Buggy Component</h2>
      <p>Click the button to simulate a component crash.</p>
      <button onClick={() => setShouldCrash(true)}>Crash Component</button>
    </div>
  );
}

export default withErrorBoundary(BuggyComponent);