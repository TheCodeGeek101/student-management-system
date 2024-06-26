import { dropIn } from '@/utils/motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import fcb from "../../public/images/fcb.jpg";

const ReferenceCode = ({ setShowReferenceCode, id }) => {
  // Function to handle click outside the modal
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.classList.contains('backdrop')) {
        setShowReferenceCode(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setShowReferenceCode]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="backdrop">
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={dropIn}
          className="max-h-[80vh] min-h-fit w-full max-w-3xl overflow-auto rounded-2xl bg-white p-20 pb-2 shadow-xl md:w-4/6"
        >
          <div className="flex justify-between">
            <div></div>
            <button
              onClick={() => {
                setShowReferenceCode(false);
              }}
              className="text-4xl text-primary"
            >
              &times;
            </button>
          </div>
          <div className="flex justify-center p-5">
            {/* Replace with your image component */}
            <Image
              src={fcb}
              className="ease-nav-brand flex text-center transition-all duration-200 dark:hidden "
              alt="main_logo"
              width={150}
              height={150}
            />
          </div>
          <h2 className="mb-4 flex justify-center text-xl font-bold font-semibold text-primary">
            Reference Code
          </h2>
          <div className="flex justify-center">
            <p className="text-3xl font-semibold text-gray-800">{id}</p>
          </div>
          <div className="container bottom-1 mb-4 mt-4 flex justify-center">
          <button
              onClick={() => {
                // setShowReferenceCode(false);
              }}
              className="border-slate-300 text-white w-28 cursor-pointer rounded-[5px] border-2 bg-primary p-1 py-2 font-semibold uppercase transition duration-200 ease-in-out hover:bg-opacity-50 hover:text-primary md:w-40"
            >
              save
            </button>
            <button
              onClick={() => {
                setShowReferenceCode(false);
              }}
              className="border-slate-300 text-slate-400 w-28 cursor-pointer rounded-[5px] border-2 bg-white p-1 py-2 font-semibold uppercase transition duration-200 ease-in-out hover:bg-opacity-50 hover:text-primary md:w-40"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ReferenceCode;
