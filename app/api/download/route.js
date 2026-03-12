const downloads = {
  "4f8a2d9e": {
    expires: Date.now() + 24 * 60 * 60 * 1000,
    count: 0
  }
};


export async function GET(request) {

  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

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

 if (!file) {
    return new NextResponse("File not configured", { status: 500 });
  }

  return NextResponse.redirect(file);
}
