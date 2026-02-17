import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-body">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

function Header() {
  return <header className="header">Dashboard Header</header>;
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li>Home</li>
        <li>Reports</li>
        <li>Settings</li>
      </ul>
    </aside>
  );
}

function MainContent() {
  return (
    <main className="main-content">
      <h1>Welcome to the Dashboard</h1>
      <p>This is a basic dashboard layout for demonstration purposes.</p>
    </main>
  );
}

export default Dashboard;