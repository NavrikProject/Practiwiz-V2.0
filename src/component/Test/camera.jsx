import React, { useState } from "react";
import Webcam from "react-webcam";

const UploadPhotoField = () => {
  const [photo, setPhoto] = useState(null);

  // Function to handle camera capture
  const handleCameraCapture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setPhoto(imageSrc);
  };

  // Function to handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPhoto(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Function to handle upload button click
  const handleUpload = () => {
    // If a photo is available, set it as the file input value
    if (photo) {
      const fileInput = document.getElementById("fileInput");
      const file = dataURItoBlob(photo);
      const blobUrl = URL.createObjectURL(file);
      fileInput.value = null;
      fileInput.files = [
        new File([file], "uploaded_image.jpg", { type: "image/jpeg" }),
      ];
      setPhoto(blobUrl);
    }
  };

  // Convert data URI to Blob
  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(",")[1]);
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };

  const webcamRef = React.useRef(null);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {/* Camera capture */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          style={{ marginBottom: "10px" }}
        />
        <button onClick={handleCameraCapture} style={{ marginBottom: "10px" }}>
          Capture Photo
        </button>
      </div>

      {/* File input */}
      <label htmlFor="fileInput" style={{ marginBottom: "10px" }}>
        Choose Photo:
      </label>
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ marginBottom: "10px" }}
      />

      {/* Display the captured/selected photo */}
      {photo && (
        <div>
          <h2>Preview:</h2>
          <img src={photo} alt="Uploaded" style={{ marginBottom: "10px" }} />
          <button onClick={handleUpload}>Upload</button>
        </div>
      )}
    </div>
  );
};

export default UploadPhotoField;
