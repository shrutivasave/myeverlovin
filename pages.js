// pages.js - Individual page components

const LandingPage = ({ onNavigate }) => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-center px-4">
      <div className="font-mono font-bold text-4xl md:text-5xl tracking-wider mb-12">
        <img 
        src={"assets/everlovin-logo.png"} 
        alt="URMYEVERLOVIN" 
        className="mx-auto"
    />
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center gap-8">
        {['Artists', 'Shows', 'Taste', 'About'].map(tab => (
          <button
            key={tab}
            onClick={() => onNavigate(tab.toLowerCase())}
            className="font-mono text-xl hover:text-red-600 transition-colors pb-1"
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex flex-col gap-4">
        {['Artists', 'Shows', 'Taste', 'About'].map(tab => (
          <button
            key={tab}
            onClick={() => onNavigate(tab.toLowerCase())}
            className="font-mono text-xl hover:text-red-600 transition-colors pb-2"
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  </div>
);

const ArtistsPage = ({ selectedArtist, setSelectedArtist, onNavigate, goToLanding }) => {
  if (selectedArtist) {
    return (
      <div className="min-h-screen bg-white">
        <StaticContact />
        
        {/* Header - Desktop */}
        <div className="hidden md:flex justify-between items-center p-8 border-b border-black">
          <Logo onClick={goToLanding} />
          <Navigation onNavigate={onNavigate} />
        </div>

        {/* Header - Mobile */}
        <div className="md:hidden p-6 border-b border-black">
          <Navigation onNavigate={onNavigate} mobile />
          <Logo onClick={goToLanding} className="mt-4" />
        </div>

        {/* Artist Detail - Desktop */}
        <div className="hidden md:flex p-12 gap-12">
          <div className="flex-1">
            <h2 className="font-mono text-4xl mb-4">{selectedArtist.name}</h2>
            <a 
              href={`https://instagram.com/${selectedArtist.ig.slice(1)}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-mono text-red-600 hover:underline mb-6 block"
            >
              {selectedArtist.ig}
            </a>
            <p className="font-mono text-sm leading-relaxed">{selectedArtist.bio}</p>
            <button 
              onClick={() => setSelectedArtist(null)}
              className="mt-8 font-mono border border-black px-6 py-2 hover:bg-black hover:text-white transition-colors"
            >
              ← Back to Artists
            </button>
          </div>
          <div className="flex-1">
            <img 
              src={selectedArtist.image} 
              alt={selectedArtist.name} 
              className="w-full aspect-square object-cover" 
            />
          </div>
        </div>

        {/* Artist Detail - Mobile */}
        <div className="md:hidden p-6">
          <h2 className="font-mono text-3xl mb-3">{selectedArtist.name}</h2>
          <a 
            href={`https://instagram.com/${selectedArtist.ig.slice(1)}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-mono text-red-600 hover:underline mb-4 block"
          >
            {selectedArtist.ig}
          </a>
          <img 
            src={selectedArtist.image} 
            alt={selectedArtist.name} 
            className="w-full aspect-square object-cover mb-6" 
          />
          <p className="font-mono text-sm leading-relaxed mb-6">{selectedArtist.bio}</p>
          <button 
            onClick={() => setSelectedArtist(null)}
            className="font-mono border border-black px-6 py-2 hover:bg-black hover:text-white transition-colors"
          >
            ← Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <StaticContact />
      
      {/* Header - Desktop */}
      <div className="hidden md:flex justify-between items-center p-8 border-b border-black">
        <Logo onClick={goToLanding} />
        <Navigation onNavigate={onNavigate} />
      </div>

      {/* Header - Mobile */}
      <div className="md:hidden p-6 border-b border-black">
        <Navigation onNavigate={onNavigate} mobile />
        <Logo onClick={goToLanding} className="mt-4" />
      </div>

      {/* Artists Grid - Desktop (3 columns) */}
      <div className="hidden md:grid grid-cols-3 gap-8 p-12">
        {artistsData.map(artist => (
          <button
            key={artist.id}
            onClick={() => setSelectedArtist(artist)}
            className="group"
          >
            <img 
              src={artist.image} 
              alt={artist.name}
              className="w-full aspect-square object-cover mb-3 grayscale group-hover:grayscale-0 transition-all"
            />
            <p className="font-mono text-sm group-hover:text-red-600 transition-colors">
              {artist.name}
            </p>
          </button>
        ))}
      </div>

      {/* Artists Grid - Mobile (2 columns) */}
      <div className="md:hidden grid grid-cols-2 gap-6 p-6">
        {artistsData.map(artist => (
          <button
            key={artist.id}
            onClick={() => setSelectedArtist(artist)}
            className="group"
          >
            <img 
              src={artist.image} 
              alt={artist.name}
              className="w-full aspect-square object-cover mb-2"
            />
            <p className="font-mono text-xs">{artist.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

const ShowsPage = ({ onNavigate, goToLanding }) => (
  <div className="min-h-screen bg-white">
    <StaticContact />
    
    {/* Header - Desktop */}
    <div className="hidden md:flex justify-between items-center p-8 border-b border-black">
      <Logo onClick={goToLanding} />
      <Navigation onNavigate={onNavigate} />
    </div>

    {/* Header - Mobile */}
    <div className="md:hidden p-6 border-b border-black">
      <Navigation onNavigate={onNavigate} mobile />
      <Logo onClick={goToLanding} className="mt-4" />
    </div>

    {/* Flyers Grid - Desktop (3 columns) */}
    <div className="hidden md:grid grid-cols-3 gap-8 p-12">
      {showsData.map(show => (
        <div key={show.id} className="group">
          <img 
            src={show.image} 
            alt={show.title}
            className="w-full h-auto object-cover mb-3 grayscale group-hover:grayscale-0 transition-all"
            style={{ aspectRatio: '6/8.5' }}
          />
          <p className="font-mono text-xs leading-relaxed">{show.title}</p>
        </div>
      ))}
    </div>

    {/* Flyers Grid - Mobile (2 columns) */}
    <div className="md:hidden grid grid-cols-2 gap-6 p-6">
      {showsData.map(show => (
        <div key={show.id}>
          <img 
            src={show.image} 
            alt={show.title}
            className="w-full h-auto object-cover mb-2"
            style={{ aspectRatio: '6/8.5' }}
          />
          <p className="font-mono text-xs leading-relaxed">{show.title}</p>
        </div>
      ))}
    </div>
  </div>
);

const TastePage = ({ onNavigate, goToLanding }) => (
  <div className="min-h-screen bg-white">
    <StaticContact />
    
    {/* Header - Desktop */}
    <div className="hidden md:flex justify-between items-center p-8 border-b border-black">
      <Logo onClick={goToLanding} />
      <Navigation onNavigate={onNavigate} />
    </div>

    {/* Header - Mobile */}
    <div className="md:hidden p-6 border-b border-black">
      <Navigation onNavigate={onNavigate} mobile />
      <Logo onClick={goToLanding} className="mt-4" />
    </div>

    {/* Records Grid - Desktop (3 columns) */}
    <div className="hidden md:grid grid-cols-3 gap-8 p-12">
      {tasteData.map(record => (
        <div key={record.id} className="group">
          <img 
            src={record.image} 
            alt={record.album}
            className="w-full aspect-square object-cover mb-3 grayscale group-hover:grayscale-0 transition-all"
          />
          <p className="font-mono text-xs leading-relaxed">{record.album}</p>
        </div>
      ))}
    </div>

    {/* Records Grid - Mobile (2 columns) */}
    <div className="md:hidden grid grid-cols-2 gap-6 p-6">
      {tasteData.map(record => (
        <div key={record.id}>
          <img 
            src={record.image} 
            alt={record.album}
            className="w-full aspect-square object-cover mb-2"
          />
          <p className="font-mono text-xs leading-relaxed">{record.album}</p>
        </div>
      ))}
    </div>
  </div>
);

const AboutPage = ({ onNavigate, goToLanding }) => (
  <div className="min-h-screen bg-white">
    <StaticContact />
    
    {/* Header - Desktop */}
    <div className="hidden md:flex justify-between items-center p-8 border-b border-black">
      <Logo onClick={goToLanding} />
      <Navigation onNavigate={onNavigate} />
    </div>

    {/* Header - Mobile */}
    <div className="md:hidden p-6 border-b border-black">
      <Navigation onNavigate={onNavigate} mobile />
      <Logo onClick={goToLanding} className="mt-4" />
    </div>

    {/* Content */}
    <div className="p-6 md:p-12 max-w-4xl mx-auto">
      {/* Profile */}
      <div className="mb-12">
        <img 
          src="assets\zander.jpeg"
          alt="Profile"
          className="w-full md:w-1/2 aspect-square object-cover mb-6 "
        />
        
        <div className="font-mono text-sm space-y-6 mb-8">
          <p className="leading-relaxed">
            everlovin' nyc is zach anderson. he's a gig promoter and artist manager living in brooklyn new york.
          </p>
        </div>

        <div className="space-y-2 font-mono text-sm mb-12">
          <p>E: <a href="mailto:urmyeverlovin@gmail.com" className="text-red-600 hover:underline">urmyeverlovin@gmail.com</a></p>
          <p>IG: <a href="https://instagram.com/urmyeverlovin" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">urmyeverlovin</a></p>
        </div>
      </div>

      {/* Additional Images
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        <img src="assets\aboutshow\sinema.jpg" alt="Show 1"  />
        <img src="assets\aboutshow\patpiano.jpeg" alt="Show 2" />
        <img src="assets\aboutshow\crowd.jpeg" alt="Show 3" />
      </div>  */}


      {/* Venues */}
      <div>
        <h3 className="font-mono text-xl mb-6 border-b border-black pb-2">Venues</h3>
        <div className="font-mono text-sm space-y-3">
          {venues.map((venue, index) => (
            <p key={index}>{venue}</p>
          ))}
        </div>
      </div>
    </div>
  </div>
);
