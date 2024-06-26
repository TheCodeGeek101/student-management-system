import { motion } from 'framer-motion';
import { useState } from 'react';

import Student from './Student';

const Index = () => {
  const [addStudentModal, setAddStudentModal] = useState(false);

  const cardDetails = [
    {
      title: 'Students Tab',
      description: 'Click the button to fill in the relevant details',
      name: 'student',
    },
    // Add more card details if needed
  ];

  const handleClick = async (name) => {
    if (name === 'student') {
      setAddStudentModal(true);
    }
  };

  return (
    <>
      <section className="m-4 grid gap-8 p-8 md:grid-cols-3">
        {cardDetails.map((detail) => (
          <motion.div
            whileHover={{
              scale: 1.1,
              textShadow: '0px 0px 8px rgb(255,255,255)',
              boxShadow: '0px 0px 8px rgb(255,255,255)',
            }}
            key={detail.name}
            className="card text-primary-content mx-auto block rounded-lg border bg-white p-10 transition duration-200 hover:bg-white/30"
          >
            <div className="card-body">
              <h2 className="flex items-center font-bold text-primary capitalize">
                {detail.title}
              </h2>
              <p className="mt-4 text-secondary">{detail.description}</p>
              <div className="card-actions mt-5 justify-end">
                <button
                  id={detail.name}
                  onClick={() => handleClick(detail.name)}
                  className="mr-4 transform rounded-sm bg-primary px-2 py-2 font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-opacity-50 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                >
                  View
                </button>
              </div>
            </div>
          </motion.div>
        ))}
        {addStudentModal && <Student setAddStudentModal={setAddStudentModal} />}
      </section>
    </>
  );
}

export default Index;
