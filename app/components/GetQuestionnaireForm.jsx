"use client";
import "react-phone-number-input/style.css";
import flags from "react-phone-number-input/flags";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
const GetQuestionnaireForm = () => {
  const [phone, setPhone] = useState();

  return (
    <>
      <form className="grid gap-6 mb-6 md:grid-cols-2 mt-6 gdspForm">
        <div>
          <label for="full_name" className="block mb-2 text-base font-medium">
            Full name *
          </label>
          <input
            type="text"
            id="full_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg  block w-full p-2.5"
            placeholder="Enter full name"
            required
          />
        </div>
        <div>
          <label
            for="email_address"
            className="block mb-2 text-base font-medium"
          >
            Email address *
          </label>
          <input
            type="text"
            id="email_address"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg  block w-full p-2.5"
            placeholder="Enter email address"
            required
          />
        </div>
        <div>
          <label for="full_name" className="block mb-2 text-base font-medium">
            Phone number *
          </label>
          {/* <input
                        type="text"
                        id="full_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg  block w-full p-2.5"
                        placeholder="Enter full name"
                        required
                      /> */}
          <PhoneInput
            international
            style={{
              borderRadius: "0.5rem",
              border: "1px solid #E0E0E0",
              background: "#FAFAFA",
              padding: "10px",
              fontSize: "1rem",
            }}
            onChange={setPhone}
            placeholder="Enter phone number"
            flags={flags}
          />
        </div>
        <div>
          <label
            for="email_address"
            className="block mb-2 text-base font-medium"
          >
            Organisation *
          </label>
          <input
            type="text"
            id="email_address"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg  block w-full p-2.5"
            placeholder="Enter organisation name"
            required
          />
        </div>
        <button
          className="mt-4 col-span-2 btn transition-all ease-in-out duration-300 font-normal text-black rounded"
          href="/tbraprime-upgrade"
          target="_blank"
        >
          Get Questionnaire
        </button>
      </form>
    </>
  );
};
export default GetQuestionnaireForm;
