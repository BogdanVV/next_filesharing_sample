"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface IProps {
  options: string[];
}

export const DownloadLink = ({ options }: IProps) => {
  const [fileName, setFileName] = useState<string>("");

  useEffect(() => {
    if (options.length > 0) {
      setFileName(options[0]);
    } else {
      setFileName("invalid");
    }
  }, []);

  return (
    <div className="text-black flex gap-4">
      <select onChange={(e) => setFileName(e.target.value)} value={fileName}>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <Link
        href={`/download/${fileName}`}
        className="text-white"
        passHref
        target="_blank"
      >
        DOWNLOAD
      </Link>
    </div>
  );
};
