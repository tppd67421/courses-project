import { ActionPayload } from './../../interfaces/ActionPayload';

export type ISharedState = {
    stateSideBar: boolean;
};

const initialState: ISharedState = {
    stateSideBar: true,
};

export function sharedReducer(state = initialState, action: ActionPayload<any>): ISharedState {
    switch (action.type) {
        case 'test':
            return {
                stateSideBar: !state.stateSideBar,
            };
        default:
            return {
                ...state,
            };
    }
}
