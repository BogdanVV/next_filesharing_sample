import { Download } from "@/components";
import { readFile } from "fs/promises";
import { extname } from "path";

async function getFileFromFs(fileName: string) {
  const res = await readFile(`./src/static-files/${fileName}`);
  console.log("res>>>", res);
  return res;
}

export default async function DownloadPage({
  params: { fileName },
}: {
  params: { fileName: string };
}) {
  const buffer = await getFileFromFs(fileName);

  return <Download bufferArray={Array.from(buffer)} ext={extname(fileName)} />;
}
