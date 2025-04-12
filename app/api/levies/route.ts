export async function GET() {
    const amount = 1500;
    return new Response(`Current levy per unit: $${amount}`);
  }
  