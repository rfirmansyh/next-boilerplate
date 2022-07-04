import { ReactNode } from 'react';
import AppProvider from './app/AppContext';

interface AppContextWrapperProps {
  children?: ReactNode
}
const AppContextWrapper = (props: AppContextWrapperProps) => {
  const { children } = props;

  return (
    <AppProvider>
      {children}
    </AppProvider>
  );
};

export default AppContextWrapper;