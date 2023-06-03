import { Route, Routes } from 'react-router-dom';

export interface CalculatorRouterProps {
  firstStepComponent: React.ReactNode;
  secondStepComponent: React.ReactNode;
  secondStepPath: string;
}

export function CalculatorRouter(props: CalculatorRouterProps) {
  const { firstStepComponent, secondStepComponent, secondStepPath } = props;

  return (
    <Routes>
      <Route element={firstStepComponent} path="/" />
      <Route element={secondStepComponent} path={secondStepPath} />
    </Routes>
  );
}

export default CalculatorRouter;
