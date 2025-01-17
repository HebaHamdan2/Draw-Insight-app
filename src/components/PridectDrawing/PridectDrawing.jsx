import React, { useState, useEffect, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';
import usePredictDrawing from '../../hooks/usePredictDrawing.js';

const PredictDrawing = () => {
  const { childInfo } = useOutletContext();
  const { predict, SavePrediction } = usePredictDrawing();
  const [imagePreview, setImagePreview] = useState(null);
  const [image, setImage] = useState(null);
  const [anger, setAnger] = useState('');
  const [anxiety, setAnxiety] = useState('');
  const [happy, setHappy] = useState('');
  const [sad, setSad] = useState('');
  const [isResult, setIsResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const resultsRef = useRef(null);

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

  const handlePrediction = async () => {
    setIsLoading(true);
    const predictions = await predict(image);
    setAnger(predictions['Anger and aggression']);
    setAnxiety(predictions['Anxiety']);
    setHappy(predictions['Happy']);
    setSad(predictions['Sad']);
    setIsResult(true);
    setIsLoading(false);
  };

  const handleSave = async () => {
    await SavePrediction(childInfo._id, image, happy, anger, sad, anxiety);
    setImage(null);
    setImagePreview(null);
    setIsResult(false);
  };

  useEffect(() => {
    if (isResult && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isResult]);

  const emotionColors = {
    Happy: 'text-yellow-300',
    Sad: 'text-blue-400',
    Anger: 'text-red-500',
    Anxiety: 'text-purple-400',
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-6xl mx-auto mt-6">
      <div className="flex flex-col items-center gap-4">
        <div className="w-full">
          {imagePreview === null ? (
            <>
              <textarea
                name="drawing"
                onClick={handleImageClick}
                className="w-full text-center text-sm md:text-base font-normal text-mainColor resize-none cursor-pointer bg-transparent border border-[#4B5768] focus:outline-none rounded-md p-4 md:px-4 h-40"
                readOnly
                id="drawing"
                value="Upload Your Child's Drawing to Get Insightful Results"
              />
              <input
                id="fileInput"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </>
          ) : (
            <div className="w-full flex flex-col items-center">
              <img
                src={imagePreview}
                alt="drawing"
                className="w-[250px] max-h-80 object-contain block mb-4 cursor-pointer"
                onClick={handleImageClick}
              />
              {!isResult ? (
                <div className="flex gap-4 justify-center mt-3">
                  <button
                    className="text-white font-normal cursor-pointer text-xs md:text-sm rounded-lg px-7 py-2 bg-mainColor"
                    onClick={handlePrediction}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Predicting...' : 'Predict'}
                  </button>
                  <button
                    className="text-white font-normal cursor-pointer text-xs md:text-sm rounded-lg px-7 py-2 bg-mainText"
                    onClick={() => {
                      setImagePreview(null);
                      setImage(null);
                      setIsResult(false);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <>
                  <div className="mt-6 text-lg font-medium text-mainColor">
                    <p>Your results are ready! Here's how your child feels:</p>
                  </div>
                  <div
                    ref={resultsRef}
                    className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10"
                  >
                    {[
                      { label: 'Happy', value: happy },
                      { label: 'Sad', value: sad },
                      { label: 'Anger', value: anger },
                      { label: 'Anxiety', value: anxiety },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex flex-col items-center gap-2">
                        <div
                          className={`radial-progress bg-mainBg ${emotionColors[label]}`}
                          style={{
                            '--value': Math.round(parseFloat(value)),
                            '--size': '6rem',
                            '--thickness': '6px',
                          }}
                          role="progressbar"
                        >
                          {label}
                        </div>
                        <h3>{value}</h3>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-4 justify-center mt-4">
                    <button
                      className="text-white font-normal cursor-pointer text-xs md:text-sm rounded-lg px-7 py-2 bg-mainColor"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                    <button
                      className="text-white font-normal cursor-pointer text-xs md:text-sm rounded-lg px-7 py-2 bg-mainText"
                      onClick={() => {
                        setImagePreview(null);
                        setImage(null);
                        setIsResult(false);
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PredictDrawing;
