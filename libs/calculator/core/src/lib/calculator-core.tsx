import styles from './calculator-core.module.css';

/* eslint-disable-next-line */
export interface CalculatorCoreProps {}

export function CalculatorCore(props: CalculatorCoreProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CalculatorCore!</h1>
    </div>
  );
}

export default CalculatorCore;
