"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

interface IProps {
  options: string[];
}

// TODO: proper naming
export const DownloadLink = ({ options }: IProps) => {
  const [fileName, setFileName] = useState<string>("");

  const handleDownloadFromAPI = async () => {
    try {
      const { data } = await axios.get("/api/download", {
        params: { fileName },
        responseType: "blob",
      });
      const downloadUrl = window.URL.createObjectURL(data);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = fileName;
      link.click();
      link.remove();
    } catch (err) {
      console.error("it's fucked up, err: ", err);
    }
  };

  useEffect(() => {
    if (options.length > 0) {
      setFileName(options[0]);
    } else {
      setFileName("invalid");
    }
  }, []);

  return (
    <div className="text-black flex gap-4 flex-col">
      <select onChange={(e) => setFileName(e.target.value)} value={fileName}>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <Link
        href={`/download/${fileName}`}
        className="text-white hover:underline"
        passHref
        target="_blank"
      >
        DOWNLOAD BY MOVING TO ANOTHER PAGE (POOR IMPLEMENTATION)
      </Link>
      <button
        className="text-white rounded border border-white p-2 cursor-pointer hover:bg-white hover:text-black"
        onClick={handleDownloadFromAPI}
      >
        DOWNLOAD FROM NEXT API DIRECTLY
      </button>
    </div>
  );
};
