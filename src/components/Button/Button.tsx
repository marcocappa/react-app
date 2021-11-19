import React from 'react';
import classnames from 'classnames';
import './style.scss';

interface Props {
  children: React.ReactNode;
  className?: string;
  title?: string;
  isDisabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

function Button({ className, children, onClick, isDisabled, ...props }: Props): JSX.Element {
  return (
    <button
      className={`react-app-button ${classnames(className)}`}
      data-testid="test-button"
      onClick={(e) => onClick(e)}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
