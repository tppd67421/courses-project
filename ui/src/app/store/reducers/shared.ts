import { ActionPayload } from './../../interfaces/ActionPayload';
import { SharedConstants } from './../constants/shared';

export type ISharedState = {
    isSideBarOpened: boolean;
};

const initialState: ISharedState = {
    isSideBarOpened: true,
};

export function sharedReducer(state = initialState, action: ActionPayload<any>): ISharedState {
    switch (action.type) {
        case SharedConstants.TOGGLE_SIDE_BAR:
            return {
                isSideBarOpened: !state.isSideBarOpened,
            };
        default:
            return {
                ...state,
            };
    }
}
