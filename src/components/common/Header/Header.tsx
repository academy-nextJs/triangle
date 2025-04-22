// src/app/components/Header.tsx
export default function Header() {
    return (
      <header style={{ backgroundColor: '#333', padding: '10px 0', color: 'white' }}>
        <nav style={{ display: 'flex', justifyContent: 'space-around' }}>
          <ul style={{ listStyleType: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
            <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
            <li><a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
            <li><a href="/courses" style={{ color: 'white', textDecoration: 'none' }}>Courses</a></li>
          </ul>
        </nav>
      </header>
    );
  }