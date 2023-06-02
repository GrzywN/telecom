import { ChangeEvent } from 'react';
import styles from './radio-dropdown.module.css';

export interface RadioDropdownProps {
  text: string;
  inputName: string;
  options?: string[];
  optionChangeHandler: (event: ChangeEvent, option: string) => void;
  isLoading: boolean;
}

export function RadioDropdown(props: RadioDropdownProps) {
  const { text, inputName, options, optionChangeHandler, isLoading } = props;

  return (
    <details role="list">
      <summary aria-haspopup="listbox" aria-busy={isLoading}>
        {text}
      </summary>
      <ul className={styles['dropdown-list']} role="listbox">
        {options?.map((option) => (
          <li key={option}>
            <input
              type="radio"
              name={inputName}
              value={option}
              onChange={(e) => optionChangeHandler(e, option)}
            />
            {option}
          </li>
        ))}
      </ul>
    </details>
  );
}

export default RadioDropdown;
