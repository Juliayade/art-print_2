
export async function GET(req) {

  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  const downloads = {
  "4f8a2d9e": {
    expires: Date.now() + 24 * 60 * 60 * 1000,
    count: 0
  }
}


  const data = downloads[token];

  if (!data) {
    return new Response("Invalid link", { status: 403 });
  }

  if (Date.now() > data.expires) {
    return new Response("Link expired", { status: 403 });
  }

  if (data.count >= 3) {
    return new Response("Download limit reached", { status: 403 });
  }

  data.count++;

  const file = process.env.R2_DOWNLOAD_URL;

  return Response.redirect(file);
}
