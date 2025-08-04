import { 
  FaShieldAlt, 
  FaHardHat, 
  FaTools, 
  FaExclamationTriangle, 
  FaHome, 
  FaUserShield 
} from 'react-icons/fa';

export default function Companies() {
  return (
    <div className="bg-blue-dark py-24 sm:py-32 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
          <div className="bg-white/5 p-8 sm:p-10 flex items-center justify-center gap-3">
            <FaShieldAlt className="text-white text-4xl sm:text-5xl" />
            <span className="text-white text-sm font-medium">Total Protection</span>
          </div>
          <div className="bg-white/5 p-6 sm:p-10 flex items-center justify-center gap-3">
            <FaHardHat className="text-white text-4xl sm:text-5xl" />
            <span className="text-white text-sm font-medium">Safe Construction</span>
          </div>
          <div className="bg-white/5 p-6 sm:p-10 flex items-center justify-center gap-3">
            <FaTools className="text-white text-4xl sm:text-5xl" />
            <span className="text-white text-sm font-medium">Professional Tools</span>
          </div>
          <div className="bg-white/5 p-6 sm:p-10 flex items-center justify-center gap-3">
            <FaExclamationTriangle className="text-white text-4xl sm:text-5xl" />
            <span className="text-white text-sm font-medium">Risk Prevention</span>
          </div>
          <div className="bg-white/5 p-6 sm:p-10 flex items-center justify-center gap-3">
            <FaHome className="text-white text-4xl sm:text-5xl" />
            <span className="text-white text-sm font-medium">Home Protection</span>
          </div>
          <div className="bg-white/5 p-6 sm:p-10 flex items-center justify-center gap-3">
            <FaUserShield className="text-white text-4xl sm:text-5xl" />
            <span className="text-white text-sm font-medium">Personal Safety</span>
          </div>
        </div>
      </div>
    </div>
  );
}
