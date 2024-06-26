import { userFieldConfig } from '@/utils/fields';
import React from 'react';

import { dropIn } from '@/utils/motion';
import { motion } from 'framer-motion';

import { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Select from 'react-select';
import { createInitialFormState, validateForm } from '@/utils/FormConfig';


const AddUser = ({ setAddUserModal }) => {
    const [isSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState(
        createInitialFormState(userFieldConfig),
    );
    const [loading, setLoading] = useState(false);

    const handleChange = (e, name) => {
        setUserData({ ...userData, [name]: e.target.value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: null });
        }
    };

 
    const onSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(userData, userFieldConfig);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        // Handle form submission
    };

    return (
        <div>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25 p-10 backdrop-blur-lg">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    drag={false}
                    variants={dropIn}
                    className="py-30 relative mt-20 max-h-[80vh] min-h-fit w-full max-w-xl overflow-auto rounded-2xl rounded-lg bg-white p-6 pb-2 shadow-xl md:w-4/6"
                >
                    <div className="flex justify-between">
                        <div>.</div>
                        <button
                            onClick={() => {
                                setAddUserModal(false);
                            }}
                            className="text-4xl text-primary"
                        >
                            &times;
                        </button>
                    </div>
                    <div className="relative flex flex-col">
                        <div className="mb-7 mt-0 w-full text-center font-bold capitalize text-primary md:mt-7 md:text-2xl">
                            Add User
                        </div>
                        <form onSubmit={onSubmit}>
                            {userFieldConfig.map(
                                ({ label, name, placeholder, options, type }) => (
                                    <div key={name} className="mx-2 w-full flex-1">
                                        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                                            {label}
                                        </div>
                                        {options ? (
                                            <select
                                                onChange={(e) => handleChange(e, name)}
                                                value={userData[name] || ''}
                                                name={name}
                                                required
                                                className="my-2 w-full appearance-none rounded border border-gray-200 bg-white p-1 px-2 text-sm text-gray-800 outline-none"
                                            >
                                                <option value="">{placeholder}</option>
                                                {options.map((option) => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </select>
                                        ) :  (
                                            <input
                                                className="my-2 w-full appearance-none rounded border border-gray-200 bg-white p-1 px-2 text-sm text-gray-800 outline-none"
                                                type={type || 'text'}
                                                onChange={(e) => handleChange(e, name)}
                                                value={userData[name] || ''}
                                                name={name}
                                                required
                                                placeholder={placeholder}
                                            />
                                        )}
                                        {errors[name] && (
                                            <div className="text-xs italic text-red-500">
                                                {errors[name]}
                                            </div>
                                        )}
                                    </div>
                                ),
                            )}
                            <div className="container bottom-1 mb-4 mt-4 flex justify-around">
                                <button
                                    onClick={() => {
                                        setAddUserModal(false);
                                    }}
                                    className={`border-slate-300 text-slate-400 cursor-pointer rounded-[5px] border-2 bg-white p-1 py-2 font-semibold uppercase transition duration-200 ease-in-out hover:bg-opacity-50 hover:text-primary md:w-28 md:w-40`}
                                >
                                    Close
                                </button>
                                <button
                                    type="submit"
                                    disabled={
                                        Object.keys(errors).length > 0 || isSubmitting || loading
                                    }
                                    className={`w-28 py-2 font-semibold uppercase transition ${
                                        loading
                                            ? 'cursor-not-allowed bg-primary text-white opacity-70'
                                            : 'bg-primary text-white hover:border-2 hover:bg-white hover:text-primary'
                                    } md:w-40`}
                                >
                                    {loading ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div>
                <Toaster position="top-center" />
            </div>
        </div>
    );
}

export default AddUser;
