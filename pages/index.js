import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Index = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* Admin Portal Card */}
      <div className="max-w-sm bg-white p-10 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-4">
        <div className="flex flex-col items-center pb-10">
          <div className="relative w-24 h-24 mb-3 rounded-full overflow-hidden">
            {/* <Image src="/docs/images/people/profile-picture-3.jpg" layout="fill" objectFit="cover" alt="Admin image" /> */}
          </div>
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Admin Portal</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">Manage Students</span>
          <div className="flex mt-4 md:mt-6">
            <Link href="/Admin/Index">
              <div className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Visit Admin Portal</div>
            </Link>
          </div>
        </div>
      </div>

      {/* Parents Portal Card */}
      <div className="max-w-sm p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-4">
        <div className="flex flex-col items-center pb-10">
          <div className="relative w-24 h-24 mb-3 rounded-full overflow-hidden">
            {/* <Image src="/docs/images/people/profile-picture-4.jpg" layout="fill" objectFit="cover" alt="Parent image" /> */}
          </div>
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Parents Portal</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">View Student Progress</span>
          <div className="flex mt-4 md:mt-6">
            <Link href="/Parents/Index">
              <div className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Visit Parents Portal</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
