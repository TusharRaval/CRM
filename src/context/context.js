import React, { createContext, useContext, useState } from "react";

// Create context for form data
const FormDataContext = createContext();

// Custom hook to use the form context
export const useFormData = () => {
    return useContext(FormDataContext);
};

// Provider component to wrap around the app
export const FormDataProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        payment: ""
    });

    const updateFormData = (newData) => {
        setFormData((prevData) => ({ ...prevData, ...newData }));
    };

    return (
        <FormDataContext.Provider value={{ formData, updateFormData }}>
            {children}
        </FormDataContext.Provider>
    );
};
