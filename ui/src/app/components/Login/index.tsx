import { IAppState } from '../../store/reducers/index';
import * as React from 'react';
import { connect } from 'react-redux';

interface Props {
    children: React.ReactNode;
    isLoggedIn?: boolean;
    isLoading?: boolean;
    onLoad?: () => void;
}

const mapStateToProps = (state: IAppState, props: Props): Partial<Props> => {
    return {
        ...props,
        // isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch: any, props: Props): Partial<Props> => {
    return {
        ...props,
        onLoad: () => {
            // dispatch(fetchSession());
        },
    };
};

class Layout extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
    }

    public componentDidMount(): void {
    }

    public render(): React.ReactElement {
        return (
            <div>Lol</div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Layout);
