import { IAppState } from '../../store/reducers/index';
import Login from '../Login';
import App from '../App';
import * as React from 'react';
import { connect } from 'react-redux';
import Loader from '../Loader';
import { AuthApi } from '../../api/authApi';
import { AuthService } from '../../services/authService';

interface Props {
    children: React.ReactNode;
    isLoggedIn?: boolean;
    isLoading?: boolean;
    fetchUserData?: (token: string) => void;
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
        fetchUserData: (token: string) => {
            dispatch(AuthService.fetchUserData(token));
        },
    };
};

class LayoutGuard extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        if (AuthService.checkToken()) {
            this.props.fetchUserData(AuthService.getToken());
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
