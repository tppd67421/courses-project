import { IAppState } from '../../store/reducers/index';
import * as React from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';
import './index.scss';

interface Props {
    children: React.ReactNode;
    isLoggedIn?: boolean;
    isLoading?: boolean;
    onLoad?: () => void;
}

interface State {
    login: string;
    password: string;
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
    public state: State;
    public loginPlaceholder: string = 'Введите email или login';
    public passwordPlaceholder: string = 'Введите пароль';

    constructor(props: Props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        };
    }

    public componentDidMount(): void {
    }

    public onChange = (event: React.SyntheticEvent): void => {
        console.log(event);
    }

    public onSubmit = (event: React.SyntheticEvent): void => {
        console.log(event);
    }


    public render(): React.ReactElement {
        return (
            <Modal>
                <div className='cc-login'>
                    <div className='cc-text cc-text__h1 cc-login__title'>Авторизация</div>
                    <form className='cc-form' onSubmit={this.onSubmit}>
                        <div className='cc-form__control'>
                            <label className='cc-form__label' htmlFor='login'>Логин</label>
                            <input
                                onChange={this.onChange}
                                className='cc-form__input'
                                name='login'
                                placeholder={this.loginPlaceholder}
                                id='login' />
                        </div>
                        <div className='cc-form__control'>
                            <label className='cc-form__label' htmlFor='password'>Пароль</label>
                            <input
                                onChange={this.onChange}
                                name='password' className='cc-form__input'
                                placeholder={this.passwordPlaceholder}
                                id='password' />
                        </div>
                        <div className='cc-login__buttons'>
                            <button className='cc-btn cc-login__button_with-margin cc-btn_red-outline'>Регистрация</button>
                            <button className='cc-btn cc-login__button cc-btn_red'>Авторизация</button>
                        </div>
                    </form>
                </div>
            </Modal>
        );
    }
}

export default connect(
    mapStateToProps
)(Login);
