"use client";

import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import Swal from 'sweetalert2'

export default function temp() {
  const [temp, setTemp] = useState("");

  const handleTemp = (e) => setTemp(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api-pi-seven-52.vercel.app/logs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify JSON content type
        },
        body: JSON.stringify({
          drone_id: 65010362,
          drone_name: "Techin Eurjipongpun",
          country: "Iceland",
          celsius: temp,
        }),
      });
      
      if (response.ok) {
        console.log("Temperature logged successfully");
      } else {
        console.error("Failed to log temperature");
      }
    } catch (error) {
      console.error("Error:", error);
    }finally{
      Swal.fire({
        icon: "success",
        title: "Your temperature saved",
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  return (
    <form
      className="flex justify-center pt-20 font-von "
      onSubmit={handleSubmit}
    >
      <div className="w-96  bg-cream p-8 rounded-xl shadow-2xl">
        <div className="flex pb-4 text-3xl font-semibold justify-center">
          Temperature
        </div>
        <input
          type="number"
          className="block w-full h-12 rounded-xl border-0 py-1 pl-7 pr-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-kaki "
          onChange={handleTemp}
        />
        <div>{/* Message : {state.message} */}</div>
        <div className="flex justify-center pt-4">
          <button
            type="submit"
            className="text-xl bg-kaki w-24 h-12 rounded-xl transition transform hover:scale-110 hover:duration-300 hover:ease-in-out"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
