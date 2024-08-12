// components/InputNumber.tsx

import React from "react";

type InputNumberProps = {
  label: string;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  validated?: boolean | null; // null สำหรับไม่มีสถานะการตรวจสอบ
  maxValue?: number;
  minValue?: number;
  className?: string;
};

const InputNumber: React.FC<InputNumberProps> = ({
  label,
  value,
  onChange,
  required = false,
  validated = null,
  maxValue,
  minValue,
  className,
}) => {
  // กำหนดคลาส CSS สำหรับแสดงสถานะการตรวจสอบ
  const inputClass = validated === null ? "" : validated ? "valid" : "invalid";

  return (
    <div className="input-container">
      <label className="col-auto" htmlFor={label}>
        {label}
        {required ? <span className="text-danger">*</span> : <></>}
      </label>
      <input
        id={label}
        type="number"
        value={value}
        onChange={onChange}
        required={required}
        max={maxValue}
        min={minValue}
        className={"rounded-4 form-control " + inputClass + className}
        aria-invalid={validated === false}
      />
      <style jsx>{`
        .input-container {
          display: flex;
          flex-direction: column;
          margin-bottom: 16px;
        }

        label {
          font-weight: bold;
          margin-bottom: 8px;
        }

        input {
          padding: 8px;
          font-size: 16px;
          border-radius: 4px;
          border: 2px solid #ccc;
          transition: border-color 0.3s ease;
        }

        input:focus {
          border-color: #0070f3;
        }

        input.valid {
          border-color: #28a745; /* สีเขียว */
        }

        input.invalid {
          border-color: #dc3545; /* สีแดง */
        }
      `}</style>
    </div>
  );
};

export default InputNumber;
