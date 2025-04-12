export default function LeviesPage() {
    return (
      <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
        <h1>Levies</h1>
        <p>Here you can view and download levy notices.</p>
  
        <ul>
          <li><a href="/levy_notice.pdf" target="_blank">Download Levy Notice (PDF)</a></li>
          <li>Current levy per unit: $1,500</li>
        </ul>
      </main>
    );
  }
  