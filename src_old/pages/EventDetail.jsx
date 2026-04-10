import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Users, ArrowLeft, CheckCircle2 } from 'lucide-react';

const EVENT_DB = {
  1: { id: 1, title: 'Pinball Monthly Championship', date: 'Oct 25, 2026', time: '6:00 PM - 10:00 PM', slotsTotal: 32, slotsTaken: 20, desc: 'Compete for the ultimate title on our vintage machines.', req: 'All skill levels welcome. Bring your A-game.' },
  2: { id: 2, title: 'Fighting Game Friday', date: 'Oct 27, 2026', time: '8:00 PM - 12:00 AM', slotsTotal: 16, slotsTaken: 16, desc: 'Street Fighter II and Mortal Kombat tournament.', req: 'BYO Controller allowed but arcade sticks provided.' },
  3: { id: 3, title: 'Beginner Pinball Workshop', date: 'Nov 02, 2026', time: '2:00 PM - 4:00 PM', slotsTotal: 10, slotsTaken: 2, desc: 'Learn the flipper basics with our pros.', req: 'No experience necessary.' }
};

const EventDetail = () => {
  const { id } = useParams();
  const [registered, setRegistered] = useState(false);
  const ev = EVENT_DB[id] || EVENT_DB[1];
  
  const isFull = ev.slotsTaken >= ev.slotsTotal;

  const handleRegister = () => {
    if (!isFull) {
      setRegistered(true);
    }
  };

  return (
    <div className="container" style={{ margin: '4rem auto', maxWidth: '800px' }}>
      <Link to="/events" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
        <ArrowLeft size={16} /> Back to Events
      </Link>
      
      <div className="glass-panel" style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'var(--color-primary-glow)', filter: 'blur(100px)', zIndex: 0 }}></div>
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="title-glow" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{ev.title}</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>{ev.desc}</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem', background: 'rgba(0,0,0,0.4)', padding: '1.5rem', borderRadius: '8px' }}>
            <div>
              <div style={{ color: 'var(--color-secondary)', fontSize: '0.9rem', marginBottom: '0.3rem', textTransform: 'uppercase', fontWeight: 'bold' }}>Date & Time</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Calendar size={18} /> {ev.date} • {ev.time}</div>
            </div>
            <div>
              <div style={{ color: 'var(--color-secondary)', fontSize: '0.9rem', marginBottom: '0.3rem', textTransform: 'uppercase', fontWeight: 'bold' }}>Capacity</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Users size={18} /> {ev.slotsTaken} / {ev.slotsTotal} spots filled
              </div>
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
               <div style={{ color: 'var(--color-secondary)', fontSize: '0.9rem', marginBottom: '0.3rem', textTransform: 'uppercase', fontWeight: 'bold' }}>Requirements</div>
               <div>{ev.req}</div>
            </div>
          </div>
          
          {registered ? (
            <div style={{ padding: '2rem', background: 'rgba(0,255,0,0.1)', border: '1px solid #0f0', borderRadius: '8px', textAlign: 'center', animation: 'float 3s ease-in-out infinite' }}>
              <CheckCircle2 color="#0f0" size={48} style={{ margin: '0 auto 1rem' }} />
              <h2 style={{ color: '#0f0', marginBottom: '0.5rem' }}>Registration Successful!</h2>
              <p>Your spot is reserved. We will send you notifications for any updates.</p>
            </div>
          ) : (
            <div style={{ textAlign: 'center' }}>
              {isFull ? (
                <button className="btn-secondary" disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>Event Full</button>
              ) : (
                <button id="register-btn" onClick={handleRegister} className="btn-primary" style={{ width: '100%', maxWidth: '300px' }}>Register Now</button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
