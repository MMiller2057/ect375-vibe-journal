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

          <aside className="hours-sidebar" style={{ 
            flex: '1 1 300px', 
            padding: '2rem', 
            height: 'fit-content',
            background: '#0a0a0c',
            border: '2px solid #333',
            borderRadius: '12px',
            boxShadow: 'inset 0 0 20px rgba(0,0,0,0.8), 0 0 15px rgba(0,255,255,0.1)',
            position: 'relative',
            overflow: 'hidden'
          }}>
             {/* Retro Scanline Overlay */}
             <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 4px, 3px 100%', pointerEvents: 'none' }}></div>
             
             <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#00ffff', textShadow: '0 0 8px rgba(0,255,255,0.6)' }}>
               <Clock color="#00ffff" /> SYSTEM TIMES
             </h3>
             
             <div style={{ fontFamily: '"Courier New", Courier, monospace', fontSize: '1.1rem' }}>
               <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem', padding: 0 }}>
                 <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                   <span style={{ color: '#aaa' }}>MON-WED</span>
                   <span style={{ color: '#ff4b2b', fontWeight: 'bold', textShadow: '0 0 5px rgba(255, 75, 43, 0.6)' }}>OFFLINE</span>
                 </li>
                 <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                   <span style={{ color: '#fff' }}>THURSDAY</span>
                   <span style={{ color: '#38ef7d', fontWeight: 'bold', textShadow: '0 0 5px rgba(56, 239, 125, 0.6)' }}>4PM-8PM</span>
                 </li>
                 <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                   <span style={{ color: '#fff' }}>FRIDAY</span>
                   <span style={{ color: '#38ef7d', fontWeight: 'bold', textShadow: '0 0 5px rgba(56, 239, 125, 0.6)' }}>4PM-9PM</span>
                 </li>
                 <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                   <span style={{ color: '#fff' }}>SATURDAY</span>
                   <span style={{ color: '#38ef7d', fontWeight: 'bold', textShadow: '0 0 5px rgba(56, 239, 125, 0.6)' }}>2PM-9PM</span>
                 </li>
                 <li style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem' }}>
                   <span style={{ color: '#fff' }}>SUNDAY</span>
                   <span style={{ color: '#38ef7d', fontWeight: 'bold', textShadow: '0 0 5px rgba(56, 239, 125, 0.6)' }}>2PM-7PM</span>
                 </li>
               </ul>
             </div>
             
             <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '2px solid #333', fontFamily: '"Courier New", Courier, monospace' }}>
               <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ff416c', textTransform: 'uppercase', letterSpacing: '1px' }}>
                 <MapPin color="#ff416c" size={20} /> COORDINATES
               </h3>
               <p style={{ color: '#fff', fontSize: '1.1rem' }}>PINBALL ON PERRY<br/><span style={{ color: '#aaa', fontSize: '1rem' }}>ATTICA, IN</span></p>
             </div>
          </aside>
          
        </div>
      </section>
    </div>
  );
}
