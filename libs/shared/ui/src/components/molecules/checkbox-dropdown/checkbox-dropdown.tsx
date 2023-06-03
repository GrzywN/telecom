import styles from './checkbox-dropdown.module.css';

export interface CheckboxDropdownProps {
  text: string;
  inputName: string;
  options?: string[];
  optionChangeHandler: (event: React.ChangeEvent, option: string) => void;
  isLoading: boolean;
}

export function CheckboxDropdown(props: CheckboxDropdownProps) {
  const { text, inputName, options, optionChangeHandler, isLoading } = props;

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
