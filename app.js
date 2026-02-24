// app.js - Main application component

const { useState, useEffect } = React;

function MusicPromoterPortfolio() {
  // Initialize from URL hash or default to landing
  const getInitialPage = () => {
    const hash = window.location.hash.slice(1) || 'landing';
    return hash.split('/')[0];
  };

  const [currentPage, setCurrentPage] = useState(getInitialPage());
  const [selectedArtist, setSelectedArtist] = useState(null);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'landing';
      const [page, artistId] = hash.split('/');
      setCurrentPage(page);
      
      if (page === 'artists' && artistId) {
        const artist = artistsData.find(a => a.id === artistId);
        setSelectedArtist(artist || null);
      } else {
        setSelectedArtist(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setSelectedArtist(null);
    window.location.hash = page;
  };

  const goToLanding = () => {
    setCurrentPage('landing');
    setSelectedArtist(null);
    window.location.hash = 'landing';
  };

  const handleArtistSelect = (artist) => {
    setSelectedArtist(artist);
    window.location.hash = `artists/${artist.id}`;
  };

  return (
    <div className="bg-white min-h-screen">
      {currentPage === 'landing' && (
        <LandingPage onNavigate={handleNavigation} />
      )}
      {currentPage === 'artists' && (
        <ArtistsPage 
          selectedArtist={selectedArtist}
          setSelectedArtist={handleArtistSelect}
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