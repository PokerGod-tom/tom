export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Welcome to Strata Management Portal</h1>
      <p>Use this site to:</p>
      <ul>
        <li><a href="/levies">View Levies</a></li>
        <li><a href="/documents">View Documents</a></li>
        <li><a href="/committee">Committee Members</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </main>
  );
}
