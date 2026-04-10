import { Info } from 'lucide-react';

const GAMES = [
  { id: 1, name: 'Medieval Madness', type: 'Pinball', year: '1997', desc: 'Defend the castle in this legendary classic.', fact: 'Features voice acting by Tina Fey!' },
  { id: 2, name: 'Twilight Zone', type: 'Pinball', year: '1993', desc: 'Step into another dimension. A classic from Bally.', fact: 'Uses a ceramic powerball that plays faster.' },
  { id: 3, name: 'Pac-Man Battle Royale', type: 'Arcade', year: '2011', desc: '4-player competitive Pac-Man madness.', fact: 'The first multiplayer Pac-Man arcade game.' },
  { id: 4, name: 'Addams Family', type: 'Pinball', year: '1992', desc: 'The best selling pinball machine of all time.', fact: 'Over 20,000 units were produced.' },
  { id: 5, name: 'Street Fighter II', type: 'Arcade', year: '1991', desc: 'The fighting game that started it all.', fact: 'Introduced the combo system by accident!' }
];

const Games = () => {
  return (
    <div className="container" style={{ margin: '4rem auto' }}>
      <h1 className="title-glow" style={{ fontSize: '3rem', marginBottom: '2rem' }}>
        Game <span className="gradient-text">Catalog</span>
      </h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
        {GAMES.map(game => (
          <div key={game.id} className="glass-panel glass-panel-hover" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <h3>{game.name}</h3>
              <span style={{ fontSize: '0.8rem', background: 'rgba(255, 0, 255, 0.2)', color: 'var(--color-primary)', padding: '0.2rem 0.6rem', borderRadius: '12px' }}>
                {game.type}
              </span>
            </div>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem', minHeight: '40px' }}>{game.desc}</p>
            
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid var(--color-secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--color-secondary)' }}>
                <Info size={16} /> <span style={{ fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Fun Fact</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text)' }}>{game.fact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;
