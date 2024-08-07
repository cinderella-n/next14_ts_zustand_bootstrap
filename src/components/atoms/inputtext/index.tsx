// components/InputText.tsx

import React from "react";

type InputTextProps = {
  label: string,
  value: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  required?: boolean,
  validated?: boolean | null, // null สำหรับไม่มีสถานะการตรวจสอบ
  maxLength?: number,
  minLength?: number,
  placeholder?: string
  className?: string
};

const InputText: React.FC<InputTextProps> = ({
  label,
  value,
  onChange,
  required = false,
  validated = null,
  maxLength,
  minLength,
  placeholder,
  className
}) => {
  // กำหนดคลาส CSS สำหรับแสดงสถานะการตรวจสอบ
  const inputClass = validated === null ? "" : validated ? "valid" : "invalid";

  return (
    <div className="input-container">
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        type="text"
        value={value}
        onChange={onChange}
        required={required}
        maxLength={maxLength}
        minLength={minLength}
        className={'rounded-4 form-control ' + inputClass + className}
        aria-invalid={validated === false}
        placeholder={placeholder}
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

export default InputText;
