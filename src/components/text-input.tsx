import { useId } from 'react';

interface Props {
  label?: string;
}

export default function TextInput(props: Props) {
  const uuid = useId();

  return (
    <div className="flex bg-gray-100">
      <label className="p-2" htmlFor={uuid} hidden={props.label === undefined}>
        {props.label}
      </label>
      <input className="grow outline-none p-2 bg-gray-100" id={uuid} />
    </div>
  );
}
