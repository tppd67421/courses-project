import { IAppState } from '../../store/reducers/index';
import * as React from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';

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

class Login extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
    }

    public componentDidMount(): void {
    }

    public render(): React.ReactElement {
        return (
            <Modal>
                <div className='cc-login-wrapper'>
                    <form>

                    </form>
                </div>
            </Modal>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);
