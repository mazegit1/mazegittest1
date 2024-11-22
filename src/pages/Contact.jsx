import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: '',
        budget: 1000,
        reasons: {
            webDesign: false,
            collaboration: false,
            mobileApp: false,
            others: false,
        },
    });

    const [submittedMessage, setSubmittedMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prev) => ({
                ...prev,
                reasons: { ...prev.reasons, [name]: checked },
            }));
        } else if (name === 'budget') {
            setFormData((prev) => ({ ...prev, [name]: Number(value) }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setSubmittedMessage(formData);
        setFormData({
            fullName: '',
            email: '',
            message: '',
            budget: 1000,
            reasons: {
                webDesign: false,
                collaboration: false,
                mobileApp: false,
                others: false,
            },
        });
    };

    return (
        <div className="bg-black text-white min-h-screen py-56 flex flex-col items-center">
            {/* Contact Info */}
            <div className="flex space-x-6 mb-8">
                <motion.div
                    className="flex items-center space-x-2 bg-gray-300 p-3 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                >
                    <FaEnvelope className="text-black" />
                    <span className="text-black">mazegitt@gmail.com</span>
                </motion.div>
                <motion.div
                    className="flex items-center space-x-2 bg-gray-300 p-3 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                >
                    <FaPhoneAlt className="text-black" />
                    <span className="text-black">+994 55 688 15 00 </span>
                </motion.div>
                <motion.div
                    className="flex items-center space-x-2 bg-gray-300 p-3 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                >
                    <FaMapMarkerAlt className="text-black" />
                    <span className="text-black">Baku, Azerbaijan</span>
                </motion.div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg w-full max-w-xl space-y-4">
                <div className="flex space-x-4">
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="w-1/2 p-3 bg-white text-black rounded-lg focus:outline-none placeholder:text-gray-500"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-1/2 p-3 bg-white text-black rounded-lg focus:outline-none placeholder:text-gray-500"
                    />
                </div>

                <div className="space-y-2">
                    <p className="text-gray-700">Why are you contacting us?</p>
                    <div className="grid grid-cols-2 gap-4">
                        <label className="flex items-center space-x-2 text-black">
                            <input
                                type="checkbox"
                                name="webDesign"
                                checked={formData.reasons.webDesign}
                                onChange={handleChange}
                                className="form-checkbox"
                            />
                            <span>Web Design</span>
                        </label>
                        <label className="flex items-center space-x-2 text-black">
                            <input
                                type="checkbox"
                                name="collaboration"
                                checked={formData.reasons.collaboration}
                                onChange={handleChange}
                                className="form-checkbox"
                            />
                            <span>Collaboration</span>
                        </label>
                        <label className="flex items-center space-x-2 text-black">
                            <input
                                type="checkbox"
                                name="mobileApp"
                                checked={formData.reasons.mobileApp}
                                onChange={handleChange}
                                className="form-checkbox"
                            />
                            <span>Mobile App Design</span>
                        </label>
                        <label className="flex items-center space-x-2 text-black">
                            <input
                                type="checkbox"
                                name="others"
                                checked={formData.reasons.others}
                                onChange={handleChange}
                                className="form-checkbox"
                            />
                            <span>Others</span>
                        </label>
                    </div>
                </div>

                <div className="space-y-2">
                    <p className="text-gray-700">Your Budget: ${formData.budget}</p>
                    <input
                        type="range"
                        name="budget"
                        min="1000"
                        max="5000"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                        <span>$1000</span>
                        <span>$5000</span>
                    </div>
                </div>

                <div>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        className="w-full p-3 bg-white text-black rounded-lg focus:outline-none placeholder:text-gray-500"
                    />
                </div>

                <motion.button
                    type="submit"
                    className="bg-black text-white px-6 py-2 rounded-lg mt-4 hover:bg-gray-900 transition duration-200"
                    whileHover={{ scale: 1.05 }}
                >
                    Submit
                </motion.button>
            </form>

            {/* Submitted Message */}
            {submittedMessage && (
                <div className="mt-6 text-black bg-gray-200 p-4 rounded-lg w-full max-w-xl">
                    <h3 className="text-black">Submitted Information:</h3>
                    <p><strong>Name:</strong> {submittedMessage.fullName}</p>
                    <p><strong>Email:</strong> {submittedMessage.email}</p>
                    <p><strong>Message:</strong> {submittedMessage.message}</p>
                    <p><strong>Budget:</strong> ${submittedMessage.budget}</p>
                    <p><strong>Reasons:</strong> {Object.keys(submittedMessage.reasons).filter(key => submittedMessage.reasons[key]).join(', ') || 'None'}</p>
                </div>
            )}

            {/* Footer */}
            <div className="flex justify-between w-full max-w-xl mt-8 text-sm text-gray-500">
                <div>
                    <p className="text-gray-700">Operating Days</p>
                    <p>Monday to Friday</p>
                </div>
                <div className="flex space-x-4">
                    <p className="text-gray-700">Stay Connected</p>
                    <FaFacebookF className="cursor-pointer text-black hover:text-gray-500 transition duration-200" />
                    <FaTwitter className="cursor-pointer text-black hover:text-gray-500 transition duration-200" />
                    <FaLinkedinIn className="cursor-pointer text-black hover:text-gray-500 transition duration-200" />
                </div>
            </div>
        </div>
    );
};

export default Contact;