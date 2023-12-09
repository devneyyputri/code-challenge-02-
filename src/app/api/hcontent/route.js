export const dynamic = "force-dynamic"; // defaults to force-static

export async function GET() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/4dzwulfzvlla/environments/master/entries?access_token=oHZkqlejIrSGoX-mGUa_jrbJ3kj2FwbceNTvWs8Ct7w&content_type=homePage`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const home = await res.json();

  return Response.json({ home });
}