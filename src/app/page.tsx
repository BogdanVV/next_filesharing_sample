import { DownloadLink } from "@/components";
import { readdir } from "fs/promises";

async function getOptions() {
  return readdir("./src/static-files");
}

export default async function Home() {
  const options = await getOptions();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DownloadLink options={options} />
    </main>
  );
}
