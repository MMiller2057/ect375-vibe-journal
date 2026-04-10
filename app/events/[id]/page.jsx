'use client';

import { useState, useEffect } from 'react';
import { supabase } from '../../../lib/supabaseClient';
import Link from 'next/link';
import { Calendar, Users, ArrowLeft } from 'lucide-react';
import { useParams } from 'next/navigation';

export default function EventDetail() {
  const params = useParams();
  const eventId = params.id;
  
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [registerStatus, setRegisterStatus] = useState('idle'); // idle, registering, success, error

  useEffect(() => {
    async function fetchEvent() {
      // First try Supabase
      const { data, error } = await supabase.from('events').select('*').eq('id', eventId).single();
      
      if (data) {
        setEvent(data);
      } else {
        // Fallback to Mock Data mapping based on the mock IDs
        const mockMap = {
          "1": { id: 1, title: 'Pinball Monthly Championship', date: '2026-04-15', time: '6PM - 10PM', slots_total: 32, slots_taken: 20, desc: 'Compete for the ultimate title on our vintage machines. Bring your A game. Grand prize is $500 in arcade tokens and a special trophy!' },
          "2": { id: 2, title: 'Fighting Game Friday', date: '2026-04-17', time: '8PM - 12AM', slots_total: 16, slots_taken: 16, desc: 'Street Fighter II and Mortal Kombat tournament. Double elimination bracket. Pizza and drinks provided.' },
          "3": { id: 3, title: 'Beginner Workshop', date: '2026-04-04', time: '2PM - 4PM', slots_total: 10, slots_taken: 2, desc: 'Learn the flipper basics with our pros. Great for true beginners and kids.' }
        };
        setEvent(mockMap[eventId]);
      }
      setLoading(false);
    }
    fetchEvent();
  }, [eventId]);

  const handleRegister = async (e) => {
    e.preventDefault();
    setRegisterStatus('registering');
    
    // Attempt Supabase insert if tables exist, but since this is a UI demo for the final design:
    // we simply simulate a successful registration after 1 second.
    setTimeout(() => {
      setRegisterStatus('success');
      // Optimistically update the UI count
      if(event) setEvent({ ...event, slots_taken: event.slots_taken + 1 });
    }, 1000);
  };

  if (loading) return <div className="container" style={{ margin: '4rem auto', textAlign: 'center' }}>Loading...</div>;
  if (!event) return <div className="container" style={{ margin: '4rem auto', textAlign: 'center' }}>Event not found.</div>;

  const isFull = event.slots_taken >= event.slots_total;

  return (
    <div className="container" style={{ margin: '4rem auto', maxWidth: '800px' }}>
      <Link href="/events" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', marginBottom: '2rem' }}>
        <ArrowLeft size={16} /> Back to Calendar
      </Link>
      
      <div className="glass-panel" style={{ padding: '3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ flex: '1 1 400px' }}>
            <h1 className="title-glow" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{event.title}</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
              {event.desc || 'Join us for an amazing arcade experience!'}
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'rgba(0, 255, 255, 0.1)', padding: '0.8rem', borderRadius: '50%' }}>
                  <Calendar color="var(--color-secondary)" />
                </div>
                <div>
                  <div style={{ fontWeight: 'bold' }}>{event.date}</div>
                  <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{event.time}</div>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'rgba(255, 0, 85, 0.1)', padding: '0.8rem', borderRadius: '50%' }}>
                  <Users color="var(--color-accent)" />
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', color: isFull ? 'var(--color-accent)' : 'inherit' }}>
                    {event.slots_taken} / {event.slots_total} Registered
                  </div>
                  <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                    {isFull ? 'This event is currently full.' : 'Spots are still available!'}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ flex: '1 1 300px', background: 'rgba(0,0,0,0.3)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Secure Your Spot</h3>
            {registerStatus === 'success' ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ color: 'var(--color-secondary)', fontSize: '4rem', marginBottom: '1rem' }}>✓</div>
                <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Registration Successful!</h4>
                <p style={{ color: 'var(--color-text-muted)' }}>You will receive an email confirmation shortly.</p>
              </div>
            ) : isFull ? (
              <div style={{ textAlign: 'center', color: 'var(--color-accent)', padding: '2rem 0' }}>
                Event is full. Registration closed.
              </div>
            ) : (
              <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label>Full Name</label>
                  <input type="text" required placeholder="John Doe" />
                </div>
                <div>
                  <label>Email Address</label>
                  <input type="email" required placeholder="john@example.com" />
                </div>
                <button 
                  type="submit" 
                  className="btn-primary" 
                  style={{ marginTop: '1rem', width: '100%' }}
                  disabled={registerStatus === 'registering'}
                >
                  {registerStatus === 'registering' ? 'Processing...' : 'Register Now'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
