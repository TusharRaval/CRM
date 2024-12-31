import React, { useState } from "react";
import { useFormData } from "./context/context";
import { useNavigate } from "react-router-dom";

const FormPage = () => {
    const { formData, updateFormData } = useFormData();
    const [paymentMethod, setPaymentMethod] = useState("");
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        updateFormData({ [name]: value });
    };

    const handlePayment = (method) => {
        setPaymentMethod(method);
        updateFormData({ payment: method });

        if (method === "free") {
            navigate("/well"); // Navigate to the welcome page
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (send data to API or save data)
        console.log("Form Data Submitted", formData);
        navigate("/well"); // Navigate to the welcome page on form submission
    };

    return (
        <div className="container" id="formpage">
            <div className="row">
                {/* Form Section */}
                <div className="col-md-6">
                    <h2 className="mb-4">Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="tel"
                                className="form-control"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="Phone Number"
                                required
                            />
                        </div>
                    </form>
                </div>

                {/* Payment Section */}
                <div className="col-md-6">
                    <h2 className="mb-4">Payment Details</h2>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Card Number</label>
                            <input
                                type="text"
                                className="form-control"
                                name="cardNumber"
                                placeholder="1234 5678 9012 3456"
                                onChange={handleInputChange}
                                required={paymentMethod === "pay"}
                                disabled={paymentMethod !== "pay"}
                            />
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Expiry Date</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="expiryDate"
                                    placeholder="MM/YY"
                                    onChange={handleInputChange}
                                    required={paymentMethod === "pay"}
                                    disabled={paymentMethod !== "pay"}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">CVV</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="cvv"
                                    placeholder="123"
                                    onChange={handleInputChange}
                                    required={paymentMethod === "pay"}
                                    disabled={paymentMethod !== "pay"}
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <button
                                type="button"
                                className={`btn btn-${paymentMethod === "free" ? "success" : "secondary"} w-100`}
                                onClick={() => handlePayment("free")}
                            >
                                Free Trial
                            </button>
                        </div>
                        <div className="mb-3">
                            <button
                                type="button"
                                className={`btn btn-${paymentMethod === "pay" ? "danger" : "secondary"} w-100`}
                                onClick={() => handlePayment("pay")}
                            >
                                Pay Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormPage;
