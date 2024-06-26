import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DataTable from 'react-data-table-component';
import { FaEdit, FaEye, FaFileCsv, FaPlus, FaUsers } from 'react-icons/fa';
import { studentData } from '@/data/students';

export function AdminIndex() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState([]);
  const [id, setId] = useState(0);

  const columns = [
    {
      name: 'Student ID',
      selector: (row) => row.student_id,
    },
    {
      name: 'Student Name',
      selector: (row) => row.student_name,
    },
    {
      name: 'Term',
      selector: (row) => row.term,
    },
    {
      name: 'Paid Fees(K)',
      selector: (row) => row.paidFees,
    },
    {
      name: 'Fee Balance(K)',
      selector: (row) => row.feeBalance,
    },
    {
      name: 'Action',
      grow: 2,
      cell: (row) => (
        <div className="flex justify-around">
          <button
            onClick={() => {
              setId(row.id);
              console.log('client id:' + row.id);
            //   setShowClientModal(true); // Assuming setShowClientModal is defined somewhere
            }}
            className="mr-4 transform rounded-sm bg-primary px-2 py-2 font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-opacity-50 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            <FaEye className="mr-2 inline-block" /> view
          </button>
          <button
            onClick={() => {
              setId(row.id);
            //   setUpdateClientModal(true); // Assuming setUpdateClientModal is defined somewhere
            }}
            className="mr-4 transform rounded-sm bg-primary px-2 py-2 font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-opacity-50 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            <FaEdit className="mr-2 inline-block" /> Update
          </button>
        </div>
      ),
    },
  ];

  const tableHeaderstyle = {
    headCells: {
      style: {
        fontWeight: 'bold',
        fontSize: '14px',
        backgroundColor: '#f3f4f6',
        color: 'black',
      },
    },
  };

  const handleClick = () => {
    setAddClientModal(true); // Assuming setAddClientModal is defined somewhere
  };

  useEffect(() => {
    const result = studentData.filter((item) => {
      return item.student_name.toLowerCase().includes(search.toLowerCase());
    });
    setFilter(result);
  }, [search]);

//   const downloadCsv = () => {
//     const data = Object.keys(clients).map((key) => clients[key]); // Assuming clients is defined somewhere
//     console.log('Array data is: ' + data);
//     const csvData = downloadExcel(data, 'clients'); // Assuming downloadExcel is defined somewhere
//     return csvData;
//   };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.6 }}
        className="mb-8 mt-20 flex flex-col gap-12"
      >
        <div className="shadow-lg rounded-xl bg-white dark:bg-gray-800 p-4">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <FaUsers className="text-3xl text-primary mr-2" />
              <h2 className="text-2xl font-bold text-primary">Students</h2>
            </div>
            <div>
              <button
                onClick={handleClick}
                className="mr-4 transform rounded-sm bg-primary px-2 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-opacity-50 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
              >
                <FaPlus className=" mr-2 inline-block " /> Add Student
              </button>
              {/* <button
                onClick={() => downloadCsv()}
                className="transform rounded-sm bg-secondary px-2 py-2 font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-opacity-50 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
              >
                <div className="flex items-center justify-center text-sm text-white">
                  <FaFileCsv className="mr-2" />
                  Export CSV
                </div>
              </button> */}
            </div>
          </div>
          <div className="overflow-x-scroll">
            <DataTable
              customStyles={tableHeaderstyle}
              columns={columns}
              data={filter}
              pagination
              selectableRows
              selectableRowsHighlight
              fixedHeader
              highlightOnHover
              subHeader
              subHeaderComponent={
                <input
                  type="text"
                  className="w-25 rounded-md border bg-white py-3 pl-10 pr-4 text-gray-900 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-800 dark:focus:border-blue-300"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              }
              subHeaderAlign="left"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default AdminIndex;
