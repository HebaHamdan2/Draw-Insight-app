import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <motion.h1
          className="text-6xl font-extrabold text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          404
        </motion.h1>
        <p className="text-lg text-gray-600">Oops! Page not found.</p>
        <Link
          to="/"
          className="mt-6 inline-block px-4 py-2 bg-mainColor text-white rounded-lg hover:bg-mainColorDark"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};
export default PageNotFound;
