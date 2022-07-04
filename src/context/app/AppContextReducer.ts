import { IAppState, TAppAction } from './AppContextType';

export const initialState: IAppState = {
  sidebarShow: false,
};

export const appReducer = (state: IAppState, action: TAppAction): IAppState => {
  switch(action.type) {
  case 'SIDEBAR_SHOW':
    return state = {
      ...state,
      sidebarShow: action.payload,
    };
  default:
    return state;
  }
};