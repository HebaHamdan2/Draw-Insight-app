import moment from 'moment';
import React from 'react';
import { useOutletContext } from 'react-router-dom';
import useChildProfile from '../../hooks/useChildProfile.js';

const ChildProfileInfo = () => {
  const { childInfo } = useOutletContext();
  let {deleteleteDrawing}=useChildProfile()
  const calculateAge = (dateOfBirth) => {
    const birthDate = new Date(dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  };

  const age = childInfo.dateOfBirth ? calculateAge(childInfo.dateOfBirth) : 'N/A';

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-4xl mx-auto mt-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col md:w-1/2">
          <h3 className="text-lg md:text-2xl font-semibold text-gray-800 mb-2">Child's Name</h3>
          <p className="text-base md:text-lg text-mainColor font-medium">{childInfo.name}</p>
        </div>
        <div className="flex flex-col md:w-1/2">
          <h3 className="text-lg md:text-2xl font-semibold text-gray-800 mb-2">Child's Gender</h3>
          <p className="text-base md:text-lg text-mainColor font-medium">{childInfo.gender}</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <div className="flex flex-col md:w-1/2">
          <h3 className="text-lg md:text-2xl font-semibold text-gray-800 mb-2">Child's Age</h3>
          <p className="text-base md:text-lg text-mainColor font-medium">{age} years old</p>
        </div>
      </div>

      {/* Drawings Insights Section */}
      <div className="mt-8">
        <h3 className="text-lg md:text-2xl font-semibold text-gray-800 mb-4">Drawings Insights</h3>
        
        {childInfo.drawings && childInfo.drawings.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-2 px-4 text-left">Image</th>
                  <th className="py-2 px-4 text-left">Date</th>
                  <th className="py-2 px-4 text-left">Anger</th>
                  <th className="py-2 px-4 text-left">Anxiety</th>
                  <th className="py-2 px-4 text-left">Happy</th>
                  <th className="py-2 px-4 text-left">Sad</th>
                  <th className="py-2 px-4 text-left">Actions</th>

                </tr>
              </thead>
              <tbody>
                {childInfo.drawings.map((drawing, index) => (
                  <tr key={drawing._id} className="border-t border-gray-300">
                    <td className="py-2 px-4">
                      <img src={drawing.imageUrl?.secure_url} alt={`Drawing ${index + 1}`} className="w-20 h-20 object-cover rounded-md" />
                    </td>
                    <td className="py-2 px-4">{drawing.createdAt ? moment(drawing.createdAt).format('DD MMMM, YYYY') 
                        : 'Unknown'}</td>
                    <td className="py-2 px-4">{drawing.prediction?.["Anger and aggression"]}</td>
                    <td className="py-2 px-4">{drawing.prediction?.["Anxiety"]}</td>
                    <td className="py-2 px-4">{drawing.prediction?.["Happy"]}</td>
                    <td className="py-2 px-4">{drawing.prediction?.["Sad"]}</td>
                    <td className="py-2 px-4">
                      <button
                        onClick={() => deleteleteDrawing(childInfo._id,drawing._id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500">No drawings available.</p>
        )}
      </div>
    </div>
  )
}

export default ChildProfileInfo;
