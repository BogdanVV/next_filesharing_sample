"use client";

import { useEffect } from "react";

interface IProps {
  bufferArray: number[];
  ext: string;
}

export const Download = ({ bufferArray = [], ext }: IProps) => {
  const blob = new Blob([new Uint8Array(bufferArray)], {
    type: ext.split(".")[1],
  });

  useEffect(() => {
    const downloadUrl = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = `file${ext}`;
    link.click();
    link.remove();
  }, []);

  return <div>123</div>;
};
