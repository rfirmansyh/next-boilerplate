
export interface IAppState {
  sidebarShow: boolean;
}

export type TAppAction = 
  { type: 'SIDEBAR_SHOW'; payload: boolean }