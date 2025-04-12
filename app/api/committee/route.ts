export async function GET() {
    const members = ["Chairperson: Alex Tan", "Treasurer: Maya Lee", "Secretary: Jordan Smith"];
    return new Response(JSON.stringify(members), {
      headers: { "Content-Type": "application/json" }
    });
  }
  