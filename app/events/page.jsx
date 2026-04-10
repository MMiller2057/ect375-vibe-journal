'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';

const MOCK_EVENTS = [
  { id: 1, title: 'Pinball Monthly Championship', date: '2026-04-15', time: '6PM - 10PM', slots_total: 32, slots_taken: 20 },
  { id: 2, title: 'Fighting Game Friday', date: '2026-04-17', time: '8PM - 12AM', slots_total: 16, slots_taken: 16 },
  { id: 3, title: 'Beginner Workshop', date: '2026-04-04', time: '2PM - 4PM', slots_total: 10, slots_taken: 2 },
];

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Calendar logic (hardcoded to April 2026 for UI demo based on mock dates, or dynamic)
  const currentMonth = new Date(2026, 3); // April 2026
  
  useEffect(() => {
    async function fetchEvents() {
      // Try to fetch from Supabase
      const { data, error } = await supabase.from('events').select('*');
      if (error || !data || data.length === 0) {
        console.log('Using mock events due to missing or empty Supabase table');
        setEvents(MOCK_EVENTS);
      } else {
        setEvents(data);
      }
      setLoading(false);
    }
    fetchEvents();
  }, []);

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  
  // Create grid cells
  const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => null);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const totalSlots = [...blanks, ...days];

  return (
    <div className="container" style={{ margin: '4rem auto', maxWidth: '900px' }}>
      <h1 className="title-glow" style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center' }}>
        Upcoming <span className="gradient-text">Events</span>
      </h1>
      
      <div className="glass-panel" style={{ padding: '2rem' }}>
        
        {/* Calendar Header matching Design #1 */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
          <button className="btn-secondary" style={{ padding: '0.5rem', display: 'flex' }}><ChevronLeft /></button>
          <h2 style={{ fontSize: '2rem', margin: '0' }}>April 2026</h2>
          <button className="btn-secondary" style={{ padding: '0.5rem', display: 'flex' }}><ChevronRight /></button>
        </div>

        {/* Days of week */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--color-text-muted)' }}>
          <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
        </div>

        {/* Calendar Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.5rem', autoRows: 'minmax(100px, auto)' }}>
          {totalSlots.map((day, idx) => {
            if (!day) return <div key={`blank-${idx}`} style={{ border: '1px solid rgba(255,255,255,0.05)', borderRadius: '4px', background: 'rgba(0,0,0,0.2)' }}></div>;
            
            // Format day to check against events
            const dayStr = day.toString().padStart(2, '0');
            const targetDateStr = `2026-04-${dayStr}`;
            const dayEvents = events.filter(e => e.date === targetDateStr);
            
            return (
              <div key={day} style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', padding: '0.5rem', background: 'rgba(255,255,255,0.02)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontWeight: 'bold', marginBottom: '0.5rem', alignSelf: 'flex-end', opacity: 0.7 }}>{day}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', flex: 1 }}>
                  {dayEvents.map(ev => {
                    const isFull = ev.slots_taken >= ev.slots_total;
                    return (
                      <Link key={ev.id} href={`/events/${ev.id}`} style={{ 
                        fontSize: '0.75rem', 
                        background: isFull ? 'rgba(255, 0, 85, 0.2)' : 'rgba(0, 255, 255, 0.2)',
                        borderLeft: isFull ? '2px solid var(--color-accent)' : '2px solid var(--color-secondary)',
                        padding: '0.3rem',
                        borderRadius: '0 4px 4px 0',
                        color: 'var(--color-text)',
                        display: 'block',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {ev.time}<br/>
                        <b>{ev.title}</b>
                      </Link>
                    )
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
