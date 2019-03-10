import { IAppState } from '../../store/reducers/index';
import Login from '../Login';
import App from '../App';
import * as React from 'react';
import { connect } from 'react-redux';
import Loader from '../Loader';

interface Props {
    children: React.ReactNode;
    isLoggedIn?: boolean;
    isLoading?: boolean;
    onLoad?: () => void;
}

const mapStateToProps = (state: IAppState, props: Props): Partial<Props> => {
    return {
        ...props,
        isLoading: state.user.isLoading,
        isLoggedIn: state.user.isLoggedIn,
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

class LayoutGuard extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.onLoad) {
            this.props.onLoad();
        }
    }

    render() {
        if (this.props.isLoading) {
            return <Loader />;
        }

        if (this.props.isLoggedIn) {
            return <App />;
        }

        return <Login />;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LayoutGuard);
