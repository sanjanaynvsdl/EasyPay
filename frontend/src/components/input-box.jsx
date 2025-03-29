export default function InputBox({ placeholder, type, label, value, size, onChange,name,ref }) {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={label} className="font-medium">
        {label}
      </label>
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className={`text-black border-1 border-gray-400  focus:outline-none focus:ring-1 focus:ring-gray-800 font-medium 
            rounded-lg text-sm p-2 py-2.5 mb-2
            ${size == "small" ? "sm:me-3" : "me-0"}`}
            required
      />
    </div>
  );
}
