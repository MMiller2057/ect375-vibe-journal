'use client';

import { useState } from 'react';
import { Settings, PlusCircle, Bell, Users, MapPin } from 'lucide-react';

export default function StaffPortal() {
  const [activeTab, setActiveTab] = useState('events');

  return (
    <div className="container" style={{ margin: '4rem auto', display: 'flex', gap: '2rem' }}>
      
      {/* Sidebar */}
      <aside className="glass-panel" style={{ flex: '0 0 250px', padding: '1.5rem', height: 'fit-content' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <Settings color="var(--color-primary)" />
          <h2 style={{ fontSize: '1.2rem', margin: 0 }}>Staff Portal</h2>
        </div>
        
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>
            <button 
              onClick={() => setActiveTab('events')}
              style={{ width: '100%', textAlign: 'left', padding: '0.8rem 1rem', borderRadius: '4px', background: activeTab === 'events' ? 'rgba(0, 255, 255, 0.1)' : 'transparent', color: activeTab === 'events' ? 'var(--color-secondary)' : 'var(--color-text)', borderLeft: activeTab === 'events' ? '2px solid var(--color-secondary)' : '2px solid transparent', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <PlusCircle size={16} /> Manage Events
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveTab('registrations')}
              style={{ width: '100%', textAlign: 'left', padding: '0.8rem 1rem', borderRadius: '4px', background: activeTab === 'registrations' ? 'rgba(0, 255, 255, 0.1)' : 'transparent', color: activeTab === 'registrations' ? 'var(--color-secondary)' : 'var(--color-text)', borderLeft: activeTab === 'registrations' ? '2px solid var(--color-secondary)' : '2px solid transparent', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Users size={16} /> Registrations
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveTab('notifications')}
              style={{ width: '100%', textAlign: 'left', padding: '0.8rem 1rem', borderRadius: '4px', background: activeTab === 'notifications' ? 'rgba(0, 255, 255, 0.1)' : 'transparent', color: activeTab === 'notifications' ? 'var(--color-secondary)' : 'var(--color-text)', borderLeft: activeTab === 'notifications' ? '2px solid var(--color-secondary)' : '2px solid transparent', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Bell size={16} /> Notifications
            </button>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="glass-panel" style={{ flex: 1, padding: '2rem' }}>
        {activeTab === 'events' && (
          <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between' }}>
              Event Management
              <button className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>+ Create New Event</button>
            </h2>
            <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ fontSize: '1.1rem' }}>Pinball Monthly Championship</h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Apr 15, 2026 | 6PM - 10PM</p>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button className="btn-secondary" style={{ padding: '0.4rem 1rem' }}>Edit</button>
                <button className="btn-secondary" style={{ padding: '0.4rem 1rem', color: 'var(--color-accent)', borderColor: 'var(--color-accent)' }}>Delete</button>
              </div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ fontSize: '1.1rem' }}>Fighting Game Friday</h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Apr 17, 2026 | 8PM - 12AM</p>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button className="btn-secondary" style={{ padding: '0.4rem 1rem' }}>Edit</button>
                <button className="btn-secondary" style={{ padding: '0.4rem 1rem', color: 'var(--color-accent)', borderColor: 'var(--color-accent)' }}>Delete</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'registrations' && (
          <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Recent Registrations</h2>
            <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <th style={{ padding: '1rem 0' }}>Name</th>
                  <th style={{ padding: '1rem 0' }}>Event</th>
                  <th style={{ padding: '1rem 0' }}>Date Registered</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem 0' }}>Alex Johnson</td>
                  <td style={{ padding: '1rem 0' }}>Pinball Monthly Championship</td>
                  <td style={{ padding: '1rem 0', color: 'var(--color-text-muted)' }}>2 hours ago</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem 0' }}>Maria Garcia</td>
                  <td style={{ padding: '1rem 0' }}>Fighting Game Friday</td>
                  <td style={{ padding: '1rem 0', color: 'var(--color-text-muted)' }}>5 hours ago</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Send Bulk Notification</h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>Send an email or text alert to all users registered for a specific event regarding any changes or updates.</p>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '500px' }}>
              <div>
                <label>Select Event</label>
                <select>
                  <option>Pinball Monthly Championship (20 Registered)</option>
                  <option>Fighting Game Friday (16 Registered)</option>
                </select>
              </div>
              <div>
                <label>Message Content</label>
                <textarea rows={4} placeholder="Type your update here..."></textarea>
              </div>
              <button type="button" className="btn-primary" style={{ alignSelf: 'flex-start' }}>Send Notification</button>
            </form>
          </div>
        )}
      </main>

    </div>
  );
}
