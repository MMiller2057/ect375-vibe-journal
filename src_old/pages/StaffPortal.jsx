import { Bell, Edit } from 'lucide-react';

const StaffPortal = () => {
  return (
    <div className="container" style={{ margin: '4rem auto' }}>
      <h1 className="title-glow" style={{ fontSize: '3rem', marginBottom: '2rem' }}>
        Staff <span className="gradient-text">Portal</span>
      </h1>
      
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem' }}>
        Manage upcoming event details and send notifications to registered users.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Edit color="var(--color-secondary)" /> Manage Events
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Pinball Monthly Championship</span>
              <button className="btn-secondary" style={{ padding: '0.4rem 1rem', fontSize: '0.9rem' }}>Edit</button>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Fighting Game Friday</span>
              <button className="btn-secondary" style={{ padding: '0.4rem 1rem', fontSize: '0.9rem' }}>Edit</button>
            </div>
            <button className="btn-primary" style={{ marginTop: '1rem' }}>+ Create Event</button>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Bell color="var(--color-primary)" /> Send Notifications
          </h2>
          
          <form onSubmit={e => { e.preventDefault(); alert("Notification Sent!"); }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label>Target Audience</label>
              <select>
                <option>All Players</option>
                <option>Registered for: Pinball Monthly</option>
                <option>Registered for: Fighting Game Friday</option>
              </select>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label>Message</label>
              <textarea rows="4" placeholder="Type notification update..."></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send Update</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default StaffPortal;
