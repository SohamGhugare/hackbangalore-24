"use client"
const FormInput = ({ type, placeholder, value, onChange }) => {
  return (
    <div>
      <input
        className="border border-black p-1 rounded-lg"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
