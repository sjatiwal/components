import React, { useRef, useEffect, useState } from "react";
import Title from "../component/title";

const Images = () => {
  const fileInputRef = useRef(null);
  const [fileInput, setFileInput] = useState("");
  const [fileName, setFileName] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [image, setImage] = useState([]);

  const getFileName = () => {
    setFileInput(fileInputRef.current);
    if (fileInput.files && fileInput.files.length > 0) {
      setFileName(fileInput.files[0].name.split(".")[0]);
    }
  };

  const uploadImage = (data) => {
    setImage([...image, data]);
  };

  useEffect(() => {
    getFileName();
  }, [selectedFile]);
  return (
    <>
      <Title title="Uploading/Downloading Images" />
      <div className="p-4">
        <div className="text-2xl">Uploading/Downloading Image</div>
        <div className="mt-8">
          <div className="flex flex-col  md:grid md:grid-cols-3">
            <div>
              <div>Select File :</div>
              <div className="border-2 border-slate-200 overflow-scroll">
                <input
                  type="file"
                  className="p-2 "
                  ref={fileInputRef}
                  value={selectedFile}
                  onChange={(e) => setSelectedFile(e.target.value)}
                  readOnly
                />
              </div>
            </div>
            <div className="mt-4 md:mt-0 md:ml-4">
              <div>File Name :</div>
              <div className="overflow-scroll">
                <input
                  type="text"
                  className="border-2 border-slate-200 h-12 w-60 text-center"
                  value={fileName}
                  readOnly
                />
              </div>
            </div>
            <div className="w-full flex  mt-4 md:mt-0 md:justify-center md:items-center">
              <input
                type="button"
                value="Upload"
                className="bg-green-400 px-2 py-1"
                onClick={() => uploadImage(fileInput.files[0])}
              />
            </div>
          </div>
          <div className="mt-10">
            <div>List of Image :</div>
            <div className="mt-2">
              {image.map((item) => {
                return <div key={item.name}>{item.name}</div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Images;
