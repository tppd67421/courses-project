import { ActionPayload } from './../../interfaces/ActionPayload';

export type ISharedState = {
    test: boolean;
};

const initialState: ISharedState = {
    test: true,
};

export function sharedReducer(state = initialState, action: ActionPayload<any>): ISharedState {
    switch (action.type) {
        case 'test':
            return {
                test: !state.test,
            };
        default:
            return {
                ...state,
            };
    }
}
