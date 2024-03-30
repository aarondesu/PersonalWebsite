import React from 'react';
import Spinner from './spinner';

interface Props {
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<Props> = ({
  children,
  type = 'button',
  loading = false,
  disabled = false,
  className = '',
}) => {
  return (
    <>
      <button
        className={`flex p-4 px-8 bg-indigo-500 text-white justify-center ${className}`}
        type={type}
        disabled={loading || disabled}
      >
        {loading ? <Spinner /> : children}
      </button>
    </>
  );
};

export default Button;
