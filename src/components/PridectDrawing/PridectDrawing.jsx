import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import usePredictDrawing from '../../hooks/usePredictDrawing.js';

const PridectDrawing = () => {
  const { childInfo } = useOutletContext();
  let {predict}=usePredictDrawing()
    const [imagePreview, setImagePreview] = useState(null);
    const [image, setImage] = useState(null);
    const [anger, setAnger] = useState('');
    const [anxiety, setAnxiety] = useState('');
    const [happy, setHappy] = useState('');
    const [sad, setSad] = useState('');

    const handleImageClick = () => {
      document.getElementById('fileInput').click();
    };
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setImage(file); 
        setImagePreview(URL.createObjectURL(file)); 
      }
    };
    const handlePrediction=async()=>{
let predictions=await predict(image);
setAnger(predictions['Anger and aggression']);
setAnxiety(predictions['Anxiety']);
setHappy(predictions['Happy']);
setSad(predictions['Sad']);

    }
  return (
<div className="p-6 bg-white rounded-lg shadow-md w-full max-w-xl mx-auto mt-6">
  <div className="flex flex-col items-center gap-4">
    <div className="w-full">
      {imagePreview === null ? (
        <textarea
          name="drawing"
          onClick={handleImageClick}
          className="w-full text-center text-sm md:text-base font-normal text-mainColor resize-none cursor-pointer bg-transparent border border-[#4B5768] focus:outline-none rounded-md p-4 md:px-4 h-40"
          readOnly
          id="drawing"
          value="Upload Your Child's Drawing to Get Insightful Results"
        />
      ) : (
        <div className="w-full flex flex-col items-center">
          <img
            src={imagePreview}
            alt="profile-pic"
            className="w-full max-h-80 object-contain block cursor-pointer"
            onClick={handleImageClick}
          />
          <div className="flex flex-row mt-3  gap-2 justify-center">
            <input
              type="button"
              className="text-white font-normal cursor-pointer text-xs md:text-sm rounded-lg px-7 py-2 bg-mainColor"
              value="Predict"
              onClick={handlePrediction}
            />
            <input
              type="button"
              value="Cancel"
              className="text-white font-normal cursor-pointer text-xs md:text-sm rounded-lg px-7 py-2 bg-mainText"
              onClick={() => {
                setImagePreview(null);
                setImage(null);
              }}
            />
          </div>
        </div>
      )}
      <input
        id="fileInput"
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  </div>
</div>

  )
}

export default PridectDrawing