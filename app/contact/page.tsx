export default function ContactPage() {
    return (
      <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
        <h1>Contact Us</h1>
        <form action="/api/contact" method="POST">
          <label>
            Your Name: <input type="text" name="name" required />
          </label><br /><br />
          <label>
            Message: <textarea name="message" required></textarea>
          </label><br /><br />
          <button type="submit">Send Message</button>
        </form>
      </main>
    );
  }
  