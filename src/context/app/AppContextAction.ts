import { TAppAction } from './AppContextType';

export const showSidebar = (payload: boolean):TAppAction => {
  return {
    type: 'SIDEBAR_SHOW',
    payload,
  };
};