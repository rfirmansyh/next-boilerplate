import {
  createContext, Dispatch, ReactNode, useContext, useMemo, useReducer, 
} from 'react';
import { appReducer, initialState } from './AppContextReducer';
import { IAppState, TAppAction } from './AppContextType';

const AppContext = createContext<{ state: IAppState, dispatch: Dispatch<TAppAction> }>({
  state: initialState,
  dispatch: () => null,
});

interface AppProviderProps {
  children?: ReactNode,
}
const AppProvider = (props: AppProviderProps) => {
  const { children } = props;

  /* hooks */
  const [state, dispatch] = useReducer(appReducer, initialState);

  /* renderer */
  const renderValue = useMemo(() => ({state, dispatch}), [state, dispatch]);

  return (
    <AppContext.Provider value={renderValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppState = () => useContext(AppContext)?.state;
export const useAppDispatch = () => useContext(AppContext)?.dispatch;

export default AppProvider;