import { defineStore } from 'pinia';
import * as navigationActions from './actions';
import { navigationState } from './state';
import type { BottomNavItem } from './interfaces';
// import type { CommsDebugItem } from "./interfaces";
// import { ISocketIoConnectionOptions, IZmqConnectionOptions } from "local-types";

export const useNavigationStore = defineStore({
  id: 'navigation',
  state: () => navigationState,
  getters: {},
  actions: {
    setBottomNavigationItem: (name: string) => void navigationActions.setBottomNavigationItem(name),
    setShowBottomNavigation: (show: boolean) =>
      void navigationActions.setShowBottomNavigation(show),
    getWorkHistories: () => void navigationActions.getWorkHistories()
    // togglePause: (connectionId: string) =>
    //   void commsDebugActions.togglePause(connectionId),
    // clearTable: (connectionId: string) =>
    //   void commsDebugActions.clearTable(connectionId),
    // sendMessage: (e: CommsDebugItem) => commsDebugActions.sendMessage(e),
    // // startProxy: () => commsDebugActions.startProxy(),
    // // setC2CommUrl: (url: string) => c2CommsDebugActions.setC2CommUrl(url),

    // addSioConnection: (body: ISocketIoConnectionOptions) =>
    //   commsDebugActions.addSioConnection(body),
    // addZmqConnection: (body: IZmqConnectionOptions) =>
    //   commsDebugActions.addZmqConnection(body),
    // closeConnection: (connectionId: string) =>
    //   commsDebugActions.closeConnection(connectionId),
  }
  // persist: [
  //   {
  //     paths: ["commServerUrl"],
  //     storage: localStorage,
  //   },
  // ],
});
