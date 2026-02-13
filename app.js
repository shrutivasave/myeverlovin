// app.js - Main application component

const { useState } = React;

function MusicPromoterPortfolio() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [selectedArtist, setSelectedArtist] = useState(null);

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setSelectedArtist(null);
  };

  const goToLanding = () => {
    setCurrentPage('landing');
    setSelectedArtist(null);
  };

  return (
    <div className="bg-white min-h-screen">
      {currentPage === 'landing' && (
        <LandingPage onNavigate={handleNavigation} />
      )}
      {currentPage === 'artists' && (
        <ArtistsPage 
          selectedArtist={selectedArtist}
          setSelectedArtist={setSelectedArtist}
          onNavigate={handleNavigation}
          goToLanding={goToLanding}
        />
      )}
      {currentPage === 'shows' && (
        <ShowsPage 
          onNavigate={handleNavigation}
          goToLanding={goToLanding}
        />
      )}
      {currentPage === 'taste' && (
        <TastePage 
          onNavigate={handleNavigation}
          goToLanding={goToLanding}
        />
      )}
      {currentPage === 'about' && (
        <AboutPage 
          onNavigate={handleNavigation}
          goToLanding={goToLanding}
        />
      )}
    </div>
  );
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MusicPromoterPortfolio />);
