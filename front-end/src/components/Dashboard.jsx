import React, { PropTypes } from 'react';


const Dashboard = ({ secretData }) => (
  <div className="container">
    <div></div>

    {secretData && <div style={{ fontSize: '16px', color: 'green' }}>{secretData}</div>}
  </div>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
