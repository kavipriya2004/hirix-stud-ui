import React from 'react';

const Notifications = () => {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Notifications</h1>
        <p className="page-description">Stay updated with your job applications and recruiter activity.</p>
      </div>
      
      <div className="notifications-content">
        <p>You have no new notifications at this time.</p>
        
        {/* You can add more content here */}
      </div>
    </div>
  );
};

export default Notifications;