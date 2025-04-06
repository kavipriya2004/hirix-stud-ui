import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [profileData, setProfileData] = useState({
    // Personal Details
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    newPassword: '',
    confirmNewPassword: '',
    
    // Educational Details
    education: '',
    university: '',
    degree: '',
    graduationYear: '',
    
    // Profile Details
    skills: '',
    experience: '',
    bio: '',
    
    // Job Preferences
    jobTitle: '',
    location: '',
    salary: '',
    workType: '',
    
    // Documents
    resume: null,
    coverLetter: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setProfileData(prevData => ({
        ...prevData,
        [name]: files[0]
      }));
    }
  };

  const handleSubmit = (e, section) => {
    e.preventDefault();
    console.log(`Saving ${section} data:`, profileData);
    // Here you would typically send the data to your backend
  };

  // Render different content based on active tab
  const renderTabContent = () => {
    switch(activeTab) {
      case 1:
        return renderPersonalDetails();
      case 2:
        return renderEducationalDetails();
      case 3:
        return renderProfileDetails();
      case 4:
        return renderJobPreferences();
      case 5:
        return renderDocumentsUpload();
      default:
        return renderPersonalDetails();
    }
  };

  const renderPersonalDetails = () => {
    return (
      <div className="content-section">
        <h2 className="section-title">User Settings</h2>
        <div className="details-section">
          <h3 className="sub-section-title">Details</h3>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">Name</label>
              <input 
                type="text" 
                id="firstName" 
                name="firstName" 
                placeholder="Enter your name..." 
                value={profileData.firstName} 
                onChange={handleChange} 
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input 
                type="text" 
                id="lastName" 
                name="lastName" 
                placeholder="Enter your last name..." 
                value={profileData.lastName} 
                onChange={handleChange} 
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="enter your email..." 
                value={profileData.email} 
                onChange={handleChange} 
              />
            </div>
            <div className="form-group phone-group">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <div className="phone-inputs">
                <input 
                  type="text" 
                  id="phoneNumber" 
                  name="phoneNumber" 
                  placeholder="Enter your phone number..." 
                  value={profileData.phoneNumber} 
                  onChange={handleChange} 
                />
              </div>
            </div>
          </div>
          
          <button className="save-button" onClick={(e) => handleSubmit(e, 'details')}>Save changes</button>
        </div>
        
        <div className="details-section">
          <h3 className="sub-section-title">Password</h3>
          
          <div className="form-row">
            <div className="form-group full-width">
              <label htmlFor="password">Change password</label>
              <div className="password-inputs">
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  placeholder="Put your old password..." 
                  value={profileData.password} 
                  onChange={handleChange} 
                />
                <input 
                  type="password" 
                  id="confirmPassword" 
                  name="confirmPassword" 
                  placeholder="Confirm password..." 
                  value={profileData.confirmPassword} 
                  onChange={handleChange} 
                />
              </div>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group full-width">
              <label htmlFor="newPassword">New password</label>
              <div className="password-inputs">
                <input 
                  type="password" 
                  id="newPassword" 
                  name="newPassword" 
                  placeholder="Put your new password..." 
                  value={profileData.newPassword} 
                  onChange={handleChange} 
                />
                <input 
                  type="password" 
                  id="confirmNewPassword" 
                  name="confirmNewPassword" 
                  placeholder="Confirm new password..." 
                  value={profileData.confirmNewPassword} 
                  onChange={handleChange} 
                />
              </div>
            </div>
          </div>
          
          <div className="password-actions">
            <button className="save-button" onClick={(e) => handleSubmit(e, 'password')}>Save changes</button>
            <a href="#" className="forgot-password">Forgot your password?</a>
          </div>
        </div>
      </div>
    );
  };

  const renderEducationalDetails = () => {
    return (
      <div className="content-section">
        <h2 className="section-title">Educational Details</h2>
        <div className="details-section">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="education">Highest Education</label>
              <select 
                id="education" 
                name="education" 
                value={profileData.education} 
                onChange={handleChange}
              >
                <option value="">Select Education</option>
                <option value="highschool">High School</option>
                <option value="bachelors">Bachelor's Degree</option>
                <option value="masters">Master's Degree</option>
                <option value="phd">Ph.D.</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="university">University/Institution</label>
              <input 
                type="text" 
                id="university" 
                name="university" 
                placeholder="University name" 
                value={profileData.university} 
                onChange={handleChange} 
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="degree">Degree/Field of Study</label>
              <input 
                type="text" 
                id="degree" 
                name="degree" 
                placeholder="E.g., Computer Science" 
                value={profileData.degree} 
                onChange={handleChange} 
              />
            </div>
            <div className="form-group">
              <label htmlFor="graduationYear">Graduation Year</label>
              <input 
                type="text" 
                id="graduationYear" 
                name="graduationYear" 
                placeholder="E.g., 2022" 
                value={profileData.graduationYear} 
                onChange={handleChange} 
              />
            </div>
          </div>

          <button className="save-button" onClick={(e) => handleSubmit(e, 'education')}>Save changes</button>
        </div>
      </div>
    );
  };

  const renderProfileDetails = () => {
    return (
      <div className="content-section">
        <h2 className="section-title">Professional Profile</h2>
        <div className="details-section">
          <div className="form-row">
            <div className="form-group full-width">
              <label htmlFor="skills">Skills</label>
              <input 
                type="text" 
                id="skills" 
                name="skills" 
                placeholder="E.g., JavaScript, React, Node.js" 
                value={profileData.skills} 
                onChange={handleChange} 
              />
              <small className="input-help">Separate skills with commas</small>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group full-width">
              <label htmlFor="experience">Years of Experience</label>
              <input 
                type="text" 
                id="experience" 
                name="experience" 
                placeholder="E.g., 3 years" 
                value={profileData.experience} 
                onChange={handleChange} 
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group full-width">
              <label htmlFor="bio">Professional Bio</label>
              <textarea 
                id="bio" 
                name="bio" 
                rows="4" 
                placeholder="Brief description about yourself..." 
                value={profileData.bio} 
                onChange={handleChange} 
              />
            </div>
          </div>

          <button className="save-button" onClick={(e) => handleSubmit(e, 'profile')}>Save changes</button>
        </div>
      </div>
    );
  };

  const renderJobPreferences = () => {
    return (
      <div className="content-section">
        <h2 className="section-title">Job Preferences</h2>
        <div className="details-section">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="jobTitle">Desired Job Title</label>
              <input 
                type="text" 
                id="jobTitle" 
                name="jobTitle" 
                placeholder="E.g., Software Developer" 
                value={profileData.jobTitle} 
                onChange={handleChange} 
              />
            </div>
            <div className="form-group">
              <label htmlFor="location">Preferred Location</label>
              <input 
                type="text" 
                id="location" 
                name="location" 
                placeholder="E.g., Remote, New York" 
                value={profileData.location} 
                onChange={handleChange} 
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="salary">Expected Salary</label>
              <input 
                type="text" 
                id="salary" 
                name="salary" 
                placeholder="E.g., 70,000" 
                value={profileData.salary} 
                onChange={handleChange} 
              />
            </div>
            <div className="form-group">
              <label htmlFor="workType">Work Type</label>
              <select 
                id="workType" 
                name="workType" 
                value={profileData.workType} 
                onChange={handleChange}
              >
                <option value="">Select Work Type</option>
                <option value="fulltime">Full-time</option>
                <option value="parttime">Part-time</option>
                <option value="contract">Contract</option>
                <option value="freelance">Freelance</option>
              </select>
            </div>
          </div>

          <button className="save-button" onClick={(e) => handleSubmit(e, 'preferences')}>Save changes</button>
        </div>
      </div>
    );
  };

  const renderDocumentsUpload = () => {
    return (
      <div className="content-section">
        <h2 className="section-title">Documents Upload</h2>
        <div className="details-section">
          <div className="form-row">
            <div className="form-group full-width">
              <label htmlFor="resume">Resume/CV</label>
              <div className="file-upload">
                <input 
                  type="file" 
                  id="resume" 
                  name="resume" 
                  onChange={handleFileChange} 
                />
                <div className="file-name">
                  {profileData.resume ? profileData.resume.name : "No file chosen"}
                </div>
              </div>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group full-width">
              <label htmlFor="coverLetter">Cover Letter (Optional)</label>
              <div className="file-upload">
                <input 
                  type="file" 
                  id="coverLetter" 
                  name="coverLetter" 
                  onChange={handleFileChange} 
                />
                <div className="file-name">
                  {profileData.coverLetter ? profileData.coverLetter.name : "No file chosen"}
                </div>
              </div>
            </div>
          </div>

          <button className="save-button" onClick={(e) => handleSubmit(e, 'documents')}>Save changes</button>
        </div>
      </div>
    );
  };

  return (
    <div className="profile-settings-container">
      <h1 className="profile-settings-title">Profile Settings</h1>
      
      <div className="profile-tabs">
        <div className={`tab ${activeTab === 1 ? 'active' : ''}`} onClick={() => setActiveTab(1)}>
          <span className="tab-number">1.</span> Personal Details
          {activeTab === 1 && <span className="check-icon">✓</span>}
        </div>
        <div className={`tab ${activeTab === 2 ? 'active' : ''}`} onClick={() => setActiveTab(2)}>
          <span className="tab-number">2.</span> Educational Details
          {activeTab === 2 && <span className="check-icon">✓</span>}
        </div>
        <div className={`tab ${activeTab === 3 ? 'active' : ''}`} onClick={() => setActiveTab(3)}>
          <span className="tab-number">3.</span> Profile Details
          {activeTab === 3 && <span className="check-icon">✓</span>}
        </div>
        <div className={`tab ${activeTab === 4 ? 'active' : ''}`} onClick={() => setActiveTab(4)}>
          <span className="tab-number">4.</span> Job Preferences
          {activeTab === 4 && <span className="check-icon">✓</span>}
        </div>
        <div className={`tab ${activeTab === 5 ? 'active' : ''}`} onClick={() => setActiveTab(5)}>
          <span className="tab-number">5.</span> Documents Upload
          {activeTab === 5 && <span className="check-icon">✓</span>}
        </div>
      </div>
      
      <div className="profile-content">
        <div className="content-left">
          {renderTabContent()}
        </div>
        
        <div className="content-right">
          <div className="profile-card">
            <div className="profile-avatar">
              <img src="/path/to/avatar.png" alt="Profile avatar" />
            </div>
            <div className="profile-info">
              <h3 className="profile-name">@User-Name</h3>
              <p className="profile-email">user@email.com</p>
            </div>
          </div>
          
          <div className="info-card">
            <h3 className="info-title">Information</h3>
            <div className="info-item">
              <span className="info-label">Name:</span>
              <span className="info-value">Name, Last Name</span>
            </div>
            <div className="info-item">
              <span className="info-label">Email:</span>
              <span className="info-value">user@email.com</span>
            </div>
            <div className="info-item">
              <span className="info-label">Tel:</span>
              <span className="info-value">+51 966 696 123</span>
            </div>
            <div className="info-item">
              <span className="info-label">Address:</span>
              <span className="info-value">505/A dhasasampalayam, mettupalayam, coimbatore.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;