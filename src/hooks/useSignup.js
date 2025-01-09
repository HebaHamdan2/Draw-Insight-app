import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const useSignup = () => {
  let navigate = useNavigate();

  async function signup(values) {
    try {
      const response = await axios.post("http://localhost:3000/auth/signup", values);
      const { data } = response;

      if (data?.message === "success") {
        toast.success("Signup successful!");
        navigate("./login");
      } else {
        toast.error(data?.validationArray[0] || "Signup failed.");
      }
    } catch (err) {
      const errorMessage = err?.response?.data?.message || "An error occurred during signup.";
      toast.error(errorMessage);
    }
  }

  return signup;
}

export default useSignup;
