import React, { useRef, useState } from 'react';
import { Upload, Button, Spin } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Image } from 'antd';

const ImageComponent = ({ image, setImage }) => {
  const [imageLoading, setImageLoading] = useState(false);
  const fileInputRef: any = useRef();

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };
  const handleImageChange = event => {
    const file = event.target.files[0];
    setImageLoading(true);

    // FileReader is already available in the browser; no need to typecast as any
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Call setImage with the reader's result, which contains the base64 encoded image
        console.log('asdasdasdasd');
        setImage(reader.result);
        setImageLoading(false);
      };
      reader.onerror = error => {
        // Handle errors
        console.log('Error occurred reading file:', error);

        setImageLoading(false);
      };
      // Read the file from info.file as a Data URL (base64)
      reader.readAsDataURL(file);
      console.log('12312412');
    } else {
      setImageLoading(false);
    }
    // Return false to prevent automatic upload since we're handling it manually
    return false;
  };

  return (
    <div>
      <label className="file-input-label">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageChange}
          style={{ display: 'none' }}
          accept="image/*" // Accept only images
        />
        <Button icon={<UploadOutlined />} onClick={triggerFileInput}>
          Click to Upload
        </Button>
      </label>
      {imageLoading ? (
        <Spin />
      ) : image ? (
        <Image
          src={image} // The image prop already contains the correct format, no need to prepend data URI schema
          alt="preview"
          style={{ width: 200, marginTop: '5px' }}
        />
      ) : null}
    </div>
  );
};

export default ImageComponent;
