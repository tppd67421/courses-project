import * as React from 'react';
import './index.scss';
import { appSettings } from '../../../appSettings';

export interface SideBarProps {
}

export default class SideBar extends React.Component<SideBarProps> {
    render() {
        return (
            <div className='cc-sidebar-wrapper'>
                <div className='cc-sidebar'>
                    <div className='cc-sidebar__logo'>{appSettings.title}</div>
                    <ul className='cc-sidebar-navigation'>
                        <li className='cc-sidebar-navigation__item'>Мои заказы</li>
                        <li className='cc-sidebar-navigation__item'>Каталог курсов</li>
                    </ul>
                </div>
            </div>
        );
    }
}
