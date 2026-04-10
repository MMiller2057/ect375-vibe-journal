import { Joystick } from 'lucide-react';

export default function GamesPage() {
  const games = [
    { title: 'Medieval Madness', type: 'Pinball', desc: 'Defend the castle in this legendary 1997 classic.', color1: '#2a0845', color2: '#6441A5' },
    { title: 'Twilight Zone', type: 'Pinball', desc: 'Step into another dimension. Highest rated pinball.', color1: '#11998e', color2: '#38ef7d' },
    { title: 'Pac-Man Arcade', type: 'Arcade', desc: 'The arcade pioneer that started it all.', color1: '#ff416c', color2: '#ff4b2b' },
    { title: 'Street Fighter II', type: 'Arcade', desc: 'Classic fighting game.', color1: '#f12711', color2: '#f5af19' },
    { title: 'Addams Family', type: 'Pinball', desc: 'The best selling pinball machine of all time.', color1: '#141E30', color2: '#243B55' },
    { title: 'Mortal Kombat II', type: 'Arcade', desc: 'Fatality!', color1: '#cb2d3e', color2: '#ef473a' },
  ];

  return (
    <div className="container" style={{ margin: '4rem auto' }}>
      <h1 className="title-glow" style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center' }}>
        Our <span className="gradient-text">Machines</span>
      </h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
        {games.map((game, i) => (
          <div key={i} className="glass-panel glass-panel-hover" style={{ padding: '2rem' }}>
            <div style={{ height: '200px', background: `linear-gradient(135deg, ${game.color1} 0%, ${game.color2} 100%)`, borderRadius: '8px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Joystick size={48} color="rgba(255,255,255,0.5)" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <h2 style={{ fontSize: '1.5rem' }}>{game.title}</h2>
              <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>{game.type}</span>
            </div>
            <p style={{ color: 'var(--color-text-muted)' }}>{game.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
