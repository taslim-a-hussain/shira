import React from 'react';
import style from '../scss/button/index.module.scss';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'Small' | 'Medium' | 'Large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({primary = false, size = 'Medium', backgroundColor, label, ...props}: ButtonProps) => {
  const mode = primary ? style['storybookButtonPrimary'] : style['storybookButtonSecondary'];
  return (
    <button
      type="button"
      className={`${style['storybookButton']} ${style[`storybookButton${size}`]} ${mode}`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
