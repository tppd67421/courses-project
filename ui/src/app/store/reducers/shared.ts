import { ActionPayload } from './users';

export type ISharedState = {
};

const initialState: ISharedState = {
};

export function sharedReducer(state = initialState, action: ActionPayload<any>): ISharedState {
    switch (action.type) {
        default:
            return {
                ...state,
            };
    }
}
