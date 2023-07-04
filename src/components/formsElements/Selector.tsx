// import { ReactChildren, useState } from "react";

// interface SelectProps {
//   label?: string;
//   children: React.ReactNode;
//   onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
//   defaultOption?: number;
//   setSelected: (value: string) => void;
// }

// const Select: React.FC<SelectProps> = ({
//   label, onChange, defaultOption = 0, setSelected, children: options
// }) => {

//   // if(defaultOption > options.length) throw new Error("Selected index is out of range")
//   // const [selected, setSelected] = useState(options[defaultOption]);

//   // const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
//   //   setSelected(e.target.value);
//   //   onChange(e)
//   // }
//   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelected(e.target.value);
//     onChange(e);
//   }

//   return (
//     <>
//       { label && <label htmlFor="select">{label}</label>}
//       <select onChange={onChange}>
//         {/* {options.map((key, option) => (
//           <option {key === defaultOption && selected}>{option}</option>
//         ))} */}
//       </select>
//     </>
//   );
// }

// export default Select;


interface SelectorProps {
  label?: string;
  children: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  setSelected?: (value: string) => void;
}

const Selector: React.FC<SelectorProps> = ({
  label, children, onChange = () => { return }, setSelected = () => { return }
}) => {

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("Selected item : ", e.target.value);
    setSelected(e.target.value);
    onChange(e);
  }

  return (
    <>
      { label && <label htmlFor="select">{label}</label>}
      <select onChange={handleChange}>
        {children}
      </select>
    </>
  );
}

export default Selector;