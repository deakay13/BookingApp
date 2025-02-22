import { useNavigate } from "react-router-dom"; 
import { signOut } from "firebase/auth"; 
import { auth } from "../../firebase-config";

export default function HeaderAdmin() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/Home/SignIn");
    } catch (error) {
      console.error("Error during logout:", error); // In lỗi nếu có
    }
  };

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-semibold">Admin Dashboard</div>
        <div>
          <button className="px-4 py-2 bg-gray-800 rounded-md" onClick={handleLogout}>Logout</button>
        </div>
      </div>
      
    </header>

  );
}

