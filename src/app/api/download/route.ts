import { NextRequest } from "next/server";
import { readFile } from "fs/promises";

export async function GET(req: NextRequest) {
  // TODO: validate query params with req.nextUrl.searchParams.has("fileName")
  const fileName = req.nextUrl.searchParams.get("fileName");
  // TODO: try-catch
  const file = await readFile(`src/static-files/${fileName}`);

  // "content-type": "image/webp" somehow allows to send even .txt correctly. WTF?
  return new Response(file, { headers: { "content-type": "image/webp" } });
}
