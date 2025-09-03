import React, { useState } from 'react'

export default function Exersice1() {
    const [value, setValue] = useState('');

    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder="Nhập chuỗi..."
            />
            {value.length > 5 && (
                <p>Chuỗi nhập vào dài hơn 5 ký tự!</p>
            )}
        </div>
    );
}
 