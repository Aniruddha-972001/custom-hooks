import withAuth from "../hoc/withAuth";

function Dashboard() {
  return (
    <div className="card">
      <h2>Dashboard</h2>
      <p>This page is protected using the withAuth HOC.</p>
    </div>
  );
}

export default withAuth(Dashboard);