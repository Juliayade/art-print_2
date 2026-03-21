export async function GET(request) {

  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  if (!token) {
    return new Response("Unauthorized", { status: 401 });
  }

  let data;

  try {
    data = JSON.parse(Buffer.from(token, "base64").toString());
  } catch {
    return new Response("Invalid token", { status: 403 });
  }

  // ⏱ expiration
  if (Date.now() > data.exp) {
    return new Response("Link expired", { status: 403 });
  }

  // 🔢 limite download
  if (data.count >= 3) {
    return new Response("Download limit reached", { status: 403 });
  }

  // incrément
  data.count++;

  // ⚠️ re-encode token mis à jour
  const newToken = Buffer.from(JSON.stringify(data)).toString("base64");

  const file = process.env.R2_DOWNLOAD_URL;

  return Response.redirect(file);
}
