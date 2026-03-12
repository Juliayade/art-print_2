export async function GET(req) {

  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  if (!token) {
    return new Response("Unauthorized", { status: 401 });
  }

  const file = process.env.R2_DOWNLOAD_URL;

  return Response.redirect(file);

}
