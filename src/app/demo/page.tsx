'use client'
import React, { useState } from 'react'
import InputNumber from '@/components/atoms/inputnumber'
import InputText from '@/components/atoms/inputtext'
type Props = {

}
const Page = (props: Props) => {
    const [Age, setAge] = useState<number>(0);
    const [isValidatedAge, setIsValidatedAge] = useState<boolean | null>(null);

    const handleInputChangeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseFloat(event.target.value);
        setAge(newValue);

        // ตัวอย่างการตรวจสอบค่าตัวเลข
        if (newValue >= 1 && newValue <= 10) {
            setIsValidatedAge(true);
        } else {
            setIsValidatedAge(false);
        }
    };

    const [inputValue, setInputValue] = useState('');
    const [isValidated, setIsValidated] = useState<boolean | null>(null);

    const handleInputChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setInputValue(newValue);

        // ตัวอย่างการตรวจสอบความยาว
        if (newValue.length >= 5 && newValue.length <= 15) {
            setIsValidated(true);
        } else {
            setIsValidated(false);
        }
    };
    return (
        <div className='container'>
            <div className='border-2 shadow-sm m-5'>
                <div className='row bg-primary flex rounded'>
                    <h4 className='text-light m-2 '>Title</h4>
                </div>
                <div className='row bg-light rounded p-2'>
                    <div className='col'>
                        <InputText
                            label="Username"
                            value={inputValue}
                            onChange={handleInputChangeUsername}
                            required={true}
                            validated={isValidated}
                            maxLength={15}
                            minLength={5}
                        />
                    </div>
                    <div className='col'>
                        <InputNumber
                            label="Age"
                            value={Age}
                            onChange={handleInputChangeAge}
                            required={true}
                            validated={isValidated}
                            maxValue={10}
                            minValue={1}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Page