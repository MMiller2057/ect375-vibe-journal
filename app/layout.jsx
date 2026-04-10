import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Pinball on Perry',
  description: 'The ultimate retro and modern gaming destination in Attica, Indiana.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-layout">
          <nav className="navbar">
            <div className="container navbar-container">
              <Link href="/" className="navbar-logo">
                Pinball on Perry
              </Link>
              <div className="navbar-links">
                <Link href="/" className="nav-link">Home</Link>
                <Link href="/games" className="nav-link">Games</Link>
                <Link href="/events" className="nav-link">Events</Link>
                <Link href="/staff" className="nav-link">Staff</Link>
              </div>
            </div>
          </nav>
          <main className="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
