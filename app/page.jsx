import Link from 'next/link';
import { Clock, MapPin, Joystick } from 'lucide-react';

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container" style={{ display: 'flex', gap: '3rem', margin: '4rem auto', flexWrap: 'wrap' }}>
          
          <div className="hero-content" style={{ flex: '2 1 500px' }}>
            <h1 className="title-glow" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem' }}>
              Level Up Your <span className="gradient-text">Arcade</span> Experience
            </h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px' }}>
              Welcome to the ultimate retro and modern gaming destination in Attica, Indiana. Explore our vast collection of pinball machines and classic arcade cabinets!
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link href="/games" className="btn-primary">View All Games</Link>
              <Link href="/events" className="btn-secondary">Upcoming Events</Link>
            </div>
            
            <div className="highlighted-games" style={{ marginTop: '5rem' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Joystick color="var(--color-secondary)" /> Highlighted Games
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                
                <div className="glass-panel glass-panel-hover" style={{ padding: '1.5rem' }}>
                  <div style={{ height: '150px', background: 'linear-gradient(135deg, #2a0845 0%, #6441A5 100%)', borderRadius: '8px', marginBottom: '1rem' }}></div>
                  <h3>Medieval Madness</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Defend the castle in this legendary 1997 Williams classic.</p>
                </div>
                
                <div className="glass-panel glass-panel-hover" style={{ padding: '1.5rem' }}>
                  <div style={{ height: '150px', background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', borderRadius: '8px', marginBottom: '1rem' }}></div>
                  <h3>Twilight Zone</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Step into another dimension. Highest rated pinball of all time.</p>
                </div>

                <div className="glass-panel glass-panel-hover" style={{ padding: '1.5rem' }}>
                  <div style={{ height: '150px', background: 'linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)', borderRadius: '8px', marginBottom: '1rem' }}></div>
                  <h3>Pac-Man Arcade</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>The arcade pioneer that started it all.</p>
                </div>

              </div>
            </div>
            
          </div>

          <aside className="hours-sidebar glass-panel" style={{ flex: '1 1 300px', padding: '2rem', height: 'fit-content' }}>
             <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
               <Clock color="var(--color-primary)" /> Opening Hours
             </h3>
             <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
               <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                 <span>Mon - Wed</span>
                 <span style={{ color: 'var(--color-text-muted)', fontWeight: '600' }}>Closed</span>
               </li>
               <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                 <span>Thursday</span>
                 <span style={{ color: 'var(--color-secondary)', fontWeight: '600' }}>4PM - 8PM</span>
               </li>
               <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                 <span>Friday</span>
                 <span style={{ color: 'var(--color-secondary)', fontWeight: '600' }}>4PM - 9PM</span>
               </li>
               <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                 <span>Saturday</span>
                 <span style={{ color: 'var(--color-secondary)', fontWeight: '600' }}>2PM - 9PM</span>
               </li>
               <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                 <span>Sunday</span>
                 <span style={{ color: 'var(--color-secondary)', fontWeight: '600' }}>3PM - 7PM</span>
               </li>
             </ul>
             
             <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
               <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                 <MapPin color="var(--color-primary)" size={20} /> Location
               </h3>
               <p style={{ color: 'var(--color-text-muted)' }}>Pinball on Perry<br/>Attica, IN</p>
             </div>
          </aside>
          
        </div>
      </section>
    </div>
  );
}
