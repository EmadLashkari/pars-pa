"use client";
import React, { useRef, useState } from "react";

const TimingInput = ({ numberOfDigits }: { numberOfDigits: number }) => {
  const [otp, setOtp] = useState(new Array(numberOfDigits).fill(""));
  const [otpError, setOtpError] = useState(null);
  const otpBoxReference = useRef<[]>();

  //   function handleChange(value: string, index: number) {
  //     let newArr = [...otp];
  //     newArr[index] = value;
  //     setOtp(newArr);

  //     if (value && index < numberOfDigits - 1) {
  //       otpBoxReference.current[index + 1].focus();
  //     }
  //   }

  //   function handleBackspaceAndEnter(e, index) {
  //     if (e.key === "Backspace" && !e.target.value && index > 0) {
  //       otpBoxReference.current[index - 1].focus();
  //     }
  //     if (e.key === "Enter" && e.target.value && index < numberOfDigits - 1) {
  //       otpBoxReference.current[index + 1].focus();
  //     }
  //   }

  return (
    <div>
      <div className="relative border border-primary300 p-3 rounded-lg">
        <div>
          {otp.map((digit, index) => (
            <input
              key={index}
              //   value={digit}
              maxLength={1}
              type="text"
              //   onChange={(e) => handleChange(e.target.value, index)}
              //   onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
              //   ref={(reference) => (otpBoxReference.current[index] = reference)}
              className={`w-10 h-auto text-black px-4 outline-none border-b-2 border-primary300 m-1`}
            />
          ))}
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-3 text-bg-sec-color">
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimingInput;
