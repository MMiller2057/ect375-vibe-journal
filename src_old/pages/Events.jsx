import { Link } from 'react-router-dom';
import { Calendar, Users } from 'lucide-react';

const EVENTS = [
  { id: 1, title: 'Pinball Monthly Championship', date: 'Oct 25', time: '6PM - 10PM', slotsTotal: 32, slotsTaken: 20, desc: 'Compete for the ultimate title on our vintage machines.' },
  { id: 2, title: 'Fighting Game Friday', date: 'Oct 27', time: '8PM - 12AM', slotsTotal: 16, slotsTaken: 16, desc: 'Street Fighter II and Mortal Kombat tournament.' },
  { id: 3, title: 'Beginner Pinball Workshop', date: 'Nov 02', time: '2PM - 4PM', slotsTotal: 10, slotsTaken: 2, desc: 'Learn the flipper basics with our pros.' }
];

const Events = () => {
  return (
    <div className="container" style={{ margin: '4rem auto' }}>
      <h1 className="title-glow" style={{ fontSize: '3rem', marginBottom: '2rem' }}>
        Upcoming <span className="gradient-text">Events</span>
      </h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {EVENTS.map(ev => {
          const isFull = ev.slotsTaken >= ev.slotsTotal;
          return (
            <div key={ev.id} className="glass-panel glass-panel-hover" style={{ display: 'flex', padding: '1.5rem', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              
              <div style={{ padding: '1rem', background: 'rgba(0, 0, 0, 0.4)', borderRadius: '12px', textAlign: 'center', minWidth: '100px' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--color-primary)' }}>{ev.date.split(' ')[1]}</div>
                <div style={{ fontSize: '1rem', color: 'var(--color-text-muted)' }}>{ev.date.split(' ')[0]}</div>
              </div>
              
              <div style={{ flex: 1, minWidth: '250px' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{ev.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>{ev.desc}</p>
                <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', color: 'var(--color-secondary)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Calendar size={16} /> {ev.time}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: isFull ? 'var(--color-accent)' : 'inherit' }}>
                    <Users size={16} /> {ev.slotsTaken} / {ev.slotsTotal} Slots
                  </span>
                </div>
              </div>

              <div>
                <Link to={`/events/${ev.id}`} className="btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '1rem', display: 'inline-block' }}>
                  Details & Register
                </Link>
              </div>

            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Events;
