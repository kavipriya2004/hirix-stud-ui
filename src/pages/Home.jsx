import React from 'react';

const Home = () => {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Home</h1>
        <p className="page-description">Welcome to Hirix - where talent meets opportunity.</p>
      </div>
      
      <div className="recent-jobs">
        <h2>Recent Jobs</h2>
        <p>Discover the latest job opportunities tailored to your profile and interests.</p>
        
        {/* You can add more content here */}
      </div>
    </div>
  );
};

export default Home;