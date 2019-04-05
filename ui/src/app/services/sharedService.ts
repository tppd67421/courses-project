import { SharedConstants } from './../store/constants/shared';

export class SharedService {

    public static toggleSideBar() {
        return {
            type: SharedConstants.TOGGLE_SIDE_BAR,
        }
    }

    constructor() {}
}