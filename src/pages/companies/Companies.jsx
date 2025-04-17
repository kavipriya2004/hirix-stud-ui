import React, { useState, useEffect } from "react";
import "./Companies.css";

const Companies = () => {
  // State for dropdown open/close
  const [countryOpen, setCountryOpen] = useState(false);
  const [stateOpen, setStateOpen] = useState(false);
  const [districtOpen, setDistrictOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);
  const [sizeOpen, setSizeOpen] = useState(false);

  // State for selected values
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  // State for available options based on selections
  const [availableStates, setAvailableStates] = useState([]);
  const [availableDistricts, setAvailableDistricts] = useState([]);

  // Company data with image paths from assets folder
  const companies = [
    {
      id: 1,
      name: "Notion",
      category: "Software - Saas",
      logo: "/src/assets/notion-logo.png",
      description: "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa, laborum tempor Lorem incididunt."
    },
    {
      id: 2,
      name: "Colorcom",
      category: "Software - Saas",
      logo: "/src/assets/colorcom-logo.png",
      description: "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa, laborum tempor Lorem incididunt."
    },
    {
      id: 3,
      name: "Redwater",
      category: "Software - Saas", 
      logo: "/src/assets/redwater-logo.png",
      description: "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa, laborum tempor Lorem incididunt."
    },
    {
      id: 4,
      name: "Gillyflower",
      category: "Software - Saas",
      logo: "/src/assets/gillyflower-logo.png",
      description: "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa, laborum tempor Lorem incididunt."
    }
  ];

  // Hierarchical data for location filters
  const locationData = {
    "India": {
      "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
      "Karnataka": ["Bangalore", "Mysore", "Hubli"],
      "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"]
    },
    "USA": {
      "California": ["Los Angeles", "San Francisco", "San Diego"],
      "Texas": ["Houston", "Austin", "Dallas"],
      "New York": ["NYC", "Buffalo", "Albany"]
    },
    "Japan": {
      "Tokyo": ["Shinjuku", "Shibuya", "Ginza"],
      "Osaka": ["Umeda", "Namba", "Tennoji"],
      "Hokkaido": ["Sapporo", "Hakodate", "Asahikawa"]
    }
  };

  // Arrays for type and size filters
  const types = ["Start up", "MLC", "Product Base"];
  const sizes = ["Small", "Medium", "Large"];

  // Update available states when country changes
  useEffect(() => {
    if (selectedCountry) {
      setAvailableStates(Object.keys(locationData[selectedCountry] || {}));
      setSelectedState("");
      setSelectedDistrict("");
    } else {
      setAvailableStates([]);
    }
  }, [selectedCountry]);

  // Update available districts when state changes
  useEffect(() => {
    if (selectedCountry && selectedState) {
      setAvailableDistricts(locationData[selectedCountry][selectedState] || []);
      setSelectedDistrict("");
    } else {
      setAvailableDistricts([]);
    }
  }, [selectedCountry, selectedState]);

  // Toggle dropdown open/close
  const toggleDropdown = (setter) => {
    setter(prev => !prev);
  };

  // Handle selection of items
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setCountryOpen(false);
  };

  const handleStateSelect = (state) => {
    setSelectedState(state);
    setStateOpen(false);
  };

  const handleDistrictSelect = (district) => {
    setSelectedDistrict(district);
    setDistrictOpen(false);
  };

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setTypeOpen(false);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    setSizeOpen(false);
  };

  return (
    <div className="companies-container">
      <h1 className="main-title">Companies On Campus</h1>
      
      <div className="companies-content">
        <div className="filters-section">
          <h2>Locations</h2>
          <div className="filter-dropdowns">
            <div className="dropdown-container">
              <button 
                className="dropdown-button"
                onClick={() => toggleDropdown(setCountryOpen)}
              >
                {selectedCountry || "Country"} <span className="dropdown-arrow">▼</span>
              </button>
              {countryOpen && (
                <div className="dropdown-content show">
                  {Object.keys(locationData).map((country, index) => (
                    <div 
                      key={index}
                      className="dropdown-item"
                      onClick={() => handleCountrySelect(country)}
                    >
                      {country}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="dropdown-container">
              <button 
                className={`dropdown-button ${!selectedCountry ? 'disabled' : ''}`}
                onClick={() => selectedCountry && toggleDropdown(setStateOpen)}
                disabled={!selectedCountry}
              >
                {selectedState || "State"} <span className="dropdown-arrow">▼</span>
              </button>
              {stateOpen && selectedCountry && (
                <div className="dropdown-content show">
                  {availableStates.map((state, index) => (
                    <div 
                      key={index}
                      className="dropdown-item"
                      onClick={() => handleStateSelect(state)}
                    >
                      {state}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="dropdown-container">
              <button 
                className={`dropdown-button ${!selectedState ? 'disabled' : ''}`}
                onClick={() => selectedState && toggleDropdown(setDistrictOpen)}
                disabled={!selectedState}
              >
                {selectedDistrict || "District"} <span className="dropdown-arrow">▼</span>
              </button>
              {districtOpen && selectedState && (
                <div className="dropdown-content show">
                  {availableDistricts.map((district, index) => (
                    <div 
                      key={index}
                      className="dropdown-item"
                      onClick={() => handleDistrictSelect(district)}
                    >
                      {district}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <h2>Industry</h2>
          <div className="filter-dropdowns">
            <div className="dropdown-container">
              <button 
                className="dropdown-button red-button"
                onClick={() => toggleDropdown(setTypeOpen)}
              >
                {selectedType || "Type"} <span className="dropdown-arrow">▼</span>
              </button>
              {typeOpen && (
                <div className="dropdown-content show">
                  {types.map((type, index) => (
                    <div 
                      key={index}
                      className="dropdown-item"
                      onClick={() => handleTypeSelect(type)}
                    >
                      {type}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="dropdown-container">
              <button 
                className="dropdown-button"
                onClick={() => toggleDropdown(setSizeOpen)}
              >
                {selectedSize || "Size"} <span className="dropdown-arrow">▼</span>
              </button>
              {sizeOpen && (
                <div className="dropdown-content show">
                  {sizes.map((size, index) => (
                    <div 
                      key={index}
                      className="dropdown-item"
                      onClick={() => handleSizeSelect(size)}
                    >
                      {size}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="companies-list">
          {companies.map(company => (
            <div className="company-card" key={company.id}>
              <div className="company-logo">
                <img src={company.logo} alt={company.name} />
              </div>
              <div className="company-info">
                <div className="company-category">{company.category}</div>
                <h3 className="company-name">{company.name}</h3>
                <p className="company-description">{company.description}</p>
              </div>
              <div className="company-action">
                <button className="view-jobs-button">View Job's</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;