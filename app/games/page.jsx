'use client';

import { useState } from 'react';
import { Joystick, X, ChevronRight } from 'lucide-react';

export default function GamesPage() {
  const games = [
    { title: 'Medieval Madness', type: 'Pinball', desc: 'Defend the castle in this legendary 1997 classic featuring multiple interactive toys and a completely destructible castle. Widely considered one of the greatest pinball machines ever made.', color1: '#2a0845', color2: '#6441A5' },
    { title: 'Twilight Zone', type: 'Pinball', desc: 'Step into another dimension. The highest rated pinball machine of all time, created by Pat Lawlor. Features an incredible array of toys including a working gumball machine and a ceramic powerball.', color1: '#11998e', color2: '#38ef7d' },
    { title: 'Pac-Man Arcade', type: 'Arcade', desc: 'The arcade pioneer that started it all. Navigate the maze, eat all the dots, and avoid the colorful ghosts Inky, Blinky, Pinky, and Clyde in this timeless classic.', color1: '#ff416c', color2: '#ff4b2b' },
    { title: 'Street Fighter II', type: 'Arcade', desc: 'The classic fighting game that defined the genre. Master complex combos, special moves, and compete against a friend in intense head-to-head combat.', color1: '#f12711', color2: '#f5af19' },
    { title: 'Addams Family', type: 'Pinball', desc: 'The best selling pinball machine of all time. Explore the creepy and kooky mansion and let Thing take your ball for multi-ball madness.', color1: '#141E30', color2: '#243B55' },
    { title: 'Mortal Kombat II', type: 'Arcade', desc: 'Test your might in this visceral and competitive fighting game sequel. Discover expanded rosters, improved mechanics, and the iconic, brutal finishing moves.', color1: '#cb2d3e', color2: '#ef473a' },
  ];

  const [selectedGame, setSelectedGame] = useState(null);

  // Sort games alphabetically by name
  const sortedGames = [...games].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="container" style={{ margin: '4rem auto', minHeight: '70vh' }}>
      <h1 className="title-glow" style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>
        Our <span className="gradient-text">Machines</span>
      </h1>
      <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBottom: '3rem' }}>
        Select a game to view cabinet details
      </p>
      
      {/* List by Name View */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '700px', margin: '0 auto' }}>
        {sortedGames.map((game, i) => (
          <div 
            key={i} 
            className="glass-panel glass-panel-hover" 
            style={{ 
              padding: '1.5rem 2rem', 
              cursor: 'pointer', 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              transition: 'all 0.3s ease'
            }}
            onClick={() => setSelectedGame(game)}
          >
             <h2 style={{ fontSize: '1.5rem', margin: 0 }}>{game.title}</h2>
             <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
               <span style={{ 
                 fontSize: '0.8rem', 
                 padding: '0.2rem 0.6rem', 
                 background: 'rgba(255,255,255,0.05)', 
                 borderRadius: '4px',
                 color: 'var(--color-text-muted)'
               }}>
                 {game.type}
               </span>
               <ChevronRight size={20} color="var(--color-primary)" />
             </div>
          </div>
        ))}
      </div>

      {/* Modal Overlay Display */}
      {selectedGame && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          padding: '2rem',
          animation: 'fadeIn 0.2s ease-out'
        }}
        onClick={() => setSelectedGame(null)}
        >
          <div className="glass-panel" style={{ 
            maxWidth: '550px', 
            width: '100%', 
            padding: '0', 
            overflow: 'hidden', 
            position: 'relative',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            transform: 'scale(1)',
            animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          onClick={(e) => e.stopPropagation()}
          >
             <button 
                onClick={() => setSelectedGame(null)}
                style={{
                  position: 'absolute', top: '1rem', right: '1rem',
                  background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)', color: 'white',
                  borderRadius: '50%', width: '36px', height: '36px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', zIndex: 10,
                  transition: 'background 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,0,85,0.8)'}
                onMouseOut={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.4)'}
             >
                <X size={20} />
             </button>
             
             {/* Dynamic Cabinet Header */}
             <div style={{ 
                height: '220px', 
                background: `linear-gradient(135deg, ${selectedGame.color1} 0%, ${selectedGame.color2} 100%)`, 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative'
             }}>
               {/* Pattern overlay for texture */}
               <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
               <Joystick size={90} color="rgba(255,255,255,0.85)" style={{ filter: 'drop-shadow(0px 10px 15px rgba(0,0,0,0.4))' }} />
             </div>
             
             {/* Cabinet Information Body */}
             <div style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <h2 style={{ fontSize: '2.2rem', margin: 0, lineHeight: 1.1 }} className="title-glow">{selectedGame.title}</h2>
                  <span style={{ 
                    fontSize: '0.9rem', 
                    padding: '0.4rem 1rem', 
                    background: 'rgba(0, 255, 255, 0.1)', 
                    color: 'var(--color-secondary)',
                    borderRadius: '20px', 
                    border: '1px solid rgba(0, 255, 255, 0.2)',
                    fontWeight: 'bold',
                    marginLeft: '1rem',
                    flexShrink: 0
                  }}>
                    {selectedGame.type}
                  </span>
                </div>
                
                <h3 style={{ fontSize: '1.1rem', color: 'white', marginBottom: '0.5rem' }}>Cabinet Info</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>
                  {selectedGame.desc}
                </p>
             </div>
          </div>
        </div>
      )}
      
      {/* Simple inline styles for animations to ensure they work without global CSS updates */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}} />
    </div>
  );
}
