import { useCallback } from 'react';

import styles from './checkbox-dropdown.module.css';

export interface CheckboxDropdownProps {
  text: string;
  inputName: string;
  options?: string[];
  checkedOptions?: string[];
  optionChangeHandler: (event: React.ChangeEvent, option: string) => void;
  isLoading: boolean;
}

export function CheckboxDropdown(props: CheckboxDropdownProps) {
  const { text, inputName, options = [], checkedOptions = [], optionChangeHandler, isLoading } = props;

  const checkIfOptionIsChecked = useCallback((option: string) => checkedOptions.includes(option), [checkedOptions]);

  return (
    <details role="list">
      <summary aria-haspopup="listbox" aria-busy={isLoading}>
        {text}
      </summary>
      <ul className={styles['dropdown-list']} role="listbox">
        {options?.map((option) => (
          <li key={option}>
            <label>
              <input
                type="checkbox"
                name={inputName}
                value={option}
                checked={checkIfOptionIsChecked(option)}
                onChange={(e) => optionChangeHandler(e, option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </details>
  );
}

export default CheckboxDropdown;
