import { IAppState } from '../../store/reducers/index';
import * as React from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';
import './index.scss';
import { AuthService } from '../../services/authService';
import { SessionModel } from '../../models/Auth/SessionModel';

interface Props {
    children: React.ReactNode;
    isLoggedIn?: boolean;
    isLoading?: boolean;
    auth?: (model: SessionModel) => void;
}

interface State {
    login: string;
    password: string;
    isDisabled: boolean;
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
        auth: (model: SessionModel) => {
            dispatch(AuthService.fetchSession(model));
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
            password: '',
            isDisabled: true,
        };
    }

    public componentDidMount(): void {
    }

    public onChange = (event: React.SyntheticEvent<HTMLInputElement>): void => {
        console.log(event.target);
        const target: HTMLInputElement = event.target as HTMLInputElement;
        this.setState({[target.name]: target.value});
        this.validation();
    }

    public onSubmit = (): void => {
        const model: SessionModel = new SessionModel();
        model.login = this.state.login;
        model.password = this.state.password;

        this.props.auth(model);
    }

    public validation(): void {
        this.setState({isDisabled: !(!!this.state.login && !!this.state.password)});
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
                                type='password'
                                onChange={this.onChange}
                                name='password' className='cc-form__input'
                                placeholder={this.passwordPlaceholder}
                                id='password' />
                        </div>
                        <div className='cc-login__buttons'>
                            <button type='button' className='cc-btn cc-login__button_with-margin cc-btn_red-outline'>Регистрация</button>
                            <button type='button' disabled={this.state.isDisabled} className='cc-btn cc-login__button cc-btn_red' onClick={this.onSubmit}>Авторизация</button>
                        </div>
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
