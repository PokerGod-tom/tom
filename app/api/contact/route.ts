export async function POST(request: Request) {
    const formData = await request.formData();
    const name = formData.get("name");
    const message = formData.get("message");
  
    console.log("Message received:", name, message);
  
    return new Response("Thanks for your message!", {
      status: 200,
      headers: { "Content-Type": "text/plain" }
    });
  }
  