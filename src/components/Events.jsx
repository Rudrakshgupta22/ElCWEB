import { useState } from 'react';

const upcomingEvents = [
  { name: 'Founder\'s Day', date: '12/03/2026', type: 'Celebration' },
  { name: 'CXO Series', date: '22/06/2026 - 27/06/2026', type: 'Seminar' },
  { name: 'Fresher\'s Party', date: '18/07/2026', type: 'Networking' },
  { name: 'The Avengers Cup', date: '08/08/2026', type: 'Competition' },
  { name: 'UG Fresher\'s Party', date: '12/09/2026', type: 'Networking' },
  { name: 'Roadies - 2.0', date: '25/09/2026 - 26/09/2026', type: 'Adventure' },
  { name: 'Octave Night', date: '03/10/2026', type: 'Cultural' },
  { name: 'Crime Run', date: '10/10/2026', type: 'Challenge' },
  { name: 'Bread Butter Banter', date: '24/10/2026', type: 'Competitive' },
  { name: 'Daawat', date: '21/11/2026', type: 'Celebration' },
  { name: 'Mid-night Sunrise', date: '16/01/2027', type: 'Special Event' },
  { name: 'Senior\'s Farewell', date: '23/01/2027', type: 'Farewell' },
  { name: 'Corporate Escape Room', date: '20/02/2027', type: 'Team Building' },
  { name: 'UG Farewell', date: '13/03/2027', type: 'Farewell' }
];

const flagshipEvents = [
  {
    name: 'Roadies',
    description: 'A Thrilling flagship event packed with adventure and physical challenges ,where students push their limits to earn the title "Roadie of the Year"',
    detailedDescription: 'Roadies is ELCs flagship adventure event that challenges students to step beyond their comfort zones through a series of thrilling physical, strategic, and team-based tasks. ',
    stats: [
      { value: '500+', label: 'Participants' },
      { value: '20K+', label: 'Online Reach' },
      { value: '30+', label: 'Speakers' }
    ],
    galleryImages: [
      {
        id: 1,
        src: '/images/eventgallery/roadies/img.png',
        alt: 'Leadership Summit Keynote'
      },
      {
        id: 2,
        src: '/images/eventgallery/roadies/trophy.png.jpeg',
        alt: 'Networking Session'
      },
      {
        id: 3,
        src: '/images/eventgallery/roadies/imgg.png',
        alt: 'Panel Discussion'
      }
    ]
  },
  {
    name: 'Daawat',
    description: 'A festive food fair where clubs sell homemade dishes on campus,celebrating Diwali with fun and flavour.',
    detailedDescription: 'Gain practical expertise through immersive workshops delivered by industry experts with real-world experience across multiple domains.',
    stats: [
      { value: '200+', label: 'Attendees' },
      { value: '8K+', label: 'Online Reach' },
      { value: '10+', label: 'Mentors' }
    ],
    galleryImages: [
      {
        id: 1,
        src: '/images/eventgallery/daawat/dw1.jpeg',
        alt: 'Workshop Session'
      },
      {
        id: 2,
        src: '/images/eventgallery/daawat/dw2.jpeg',
        alt: 'Hands-on Training'
      },
      {
        id: 3,
        src: '/images/eventgallery/daawat/dw3.jpeg',
        alt: 'Group Learning'
      }
    ]
  },
  {
    name: 'Mid-night Sunrise',
    description: 'A corporate networking event where students engage with industry leaders, gaining insights and building connections for future career growth in a relaxed interactivce setting.',
    detailedDescription: 'Transform ideas into reality in our intensive innovation marathon featuring mentorship, resources, and exciting prizes for breakthrough solutions.',
    stats: [
      { value: '150+', label: 'Participants' },
      { value: '5K+', label: 'Online Reach' },
      { value: '₹50K', label: 'Prize Pool' }
    ],
    galleryImages: [
      {
        id: 1,
        src: '/images/eventgallery/midnightsunrise/img1.png',
        alt: 'Hackathon Opening'
      },
      {
        id: 2,
        src: '/images/eventgallery/midnightsunrise/img2.png',
        alt: 'Team Collaboration'
      },
      {
        id: 3,
        src: '/images/eventgallery/midnightsunrise/img3.png',
        alt: 'Project Presentation'
      }
    ]
  }
];

function FlipCard({ event, onGalleryClick }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleGalleryClick = (e) => {
    e.stopPropagation();
    onGalleryClick(event);
  };

  return (
    <div
      className="h-80 cursor-pointer"
      onClick={handleCardClick}
      style={{
        perspective: '1000px'
      }}
    >
      <div
        className="relative w-full h-full transition-transform duration-500 rounded-2xl"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        <div
          className="absolute w-full h-full rounded-2xl border-2 border-brand-navy/20 bg-white p-8 shadow-card"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
        >
          <h3 className="text-xl font-bold text-brand-navy">{event.name}</h3>
          <p className="mt-4 text-sm leading-6 text-brand-navy/70">{event.description}</p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {event.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-lg font-black text-brand-gold">{stat.value}</p>
                <p className="text-xs uppercase tracking-[0.24em] text-brand-navy/50 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-brand-navy/50 text-center">Click to view details</p>
        </div>

        <div
          className="absolute w-full h-full rounded-2xl border-2 border-brand-gold bg-gradient-to-br from-brand-navy to-brand-navy-light p-8 shadow-card flex flex-col justify-between"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div>
            <h3 className="text-lg font-bold text-brand-gold">About the Event</h3>
            <p className="mt-4 text-sm leading-6 text-white">{event.detailedDescription}</p>
          </div>
          <button
            onClick={handleGalleryClick}
            className="inline-flex items-center gap-2 rounded-lg bg-brand-gold px-6 py-3 text-sm font-bold text-brand-navy hover:bg-brand-gold/90 transition"
          >
            View Gallery
          </button>
        </div>
      </div>
    </div>
  );
}

function GalleryModal({ event, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative mx-auto w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl"
        style={{ minHeight: '100vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-navy/80 text-white hover:bg-brand-navy transition"
          aria-label="Close gallery"
        >
          X
        </button>

        <div className="bg-brand-navy p-6 sm:p-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">{event?.name}</h3>
          <p className="mt-2 text-brand-gold text-sm font-semibold">Event Photo Gallery</p>
        </div>

        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {event?.galleryImages?.map((image) => (
              <div
                key={image.id}
                className="aspect-video rounded-lg bg-brand-light-gray overflow-hidden border-2 border-brand-gold/20 hover:border-brand-gold transition"
              >
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-navy/10 to-brand-gold/10">
                  <div className="text-center">
                    <div className="text-4xl text-brand-gold/40 mb-2"></div>
                       <img
      src={image.src}
      alt={image.alt}
      className={`rounded-lg ${event?.name === 'Roadies' && image.id === 2 ? 'max-w-full max-h-full object-contain' : 'w-full h-full object-cover'}`}
    />
                    <p className="text-xs text-brand-navy/60">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-brand-navy/60 text-center">
          
          </p>
        </div>

        <div className="border-t-2 border-brand-navy/10 bg-brand-light-gray p-6 sm:p-8">
          <p className="text-sm text-brand-navy/70 mb-4">
            Interested in attending or sponsoring this event?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-gold px-6 py-3 text-sm font-bold text-brand-navy hover:bg-brand-gold/90 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}

function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const handleGalleryClick = (event) => {
    setSelectedEvent(event);
    setIsGalleryOpen(true);
  };

  const handleCloseGallery = () => {
    setIsGalleryOpen(false);
    setTimeout(() => setSelectedEvent(null), 300);
  };

  return (
    <>
      <section id="events" className="relative overflow-hidden bg-brand-light-gray py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="space-y-16">
            <div>
              <span className="inline-flex rounded-lg border border-brand-gold/30 bg-brand-gold/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.24em] text-brand-gold">
                Signature Events
              </span>
              <h2 className="mt-6 text-4xl font-black text-brand-navy sm:text-5xl">
                Our Flagship Programs
              </h2>
              <p className="mt-4 text-lg text-brand-navy/70 max-w-2xl">
                Click any card to explore event details and view the photo gallery.
              </p>

              <div className="mt-12 grid gap-8 lg:grid-cols-3">
                {flagshipEvents.map((event, idx) => (
                  <FlipCard
                    key={idx}
                    event={event}
                    onGalleryClick={handleGalleryClick}
                  />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black text-brand-navy mb-8">2026-2027 Event Calendar</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {upcomingEvents.map((event, idx) => (
                  <div key={idx} className="rounded-xl border-2 border-brand-navy/10 bg-white p-4 shadow-card transition hover:border-brand-gold hover:shadow-glow">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h4 className="font-bold text-brand-navy">{event.name}</h4>
                        <p className="text-xs text-brand-navy/60 mt-1">{event.date}</p>
                      </div>
                      <span className="inline-flex rounded-lg bg-brand-gold/10 px-2 py-1 text-xs font-bold text-brand-gold">
                        {event.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <GalleryModal
        event={selectedEvent}
        isOpen={isGalleryOpen}
        onClose={handleCloseGallery}
      />
    </>
  );
}

export default Events;
