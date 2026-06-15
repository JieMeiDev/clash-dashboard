import classnames from 'classnames'
import { NavLink, useLocation } from 'react-router-dom'

import logo from '@assets/logo.png'
import { type LocalizedType } from '@i18n'
import { useI18n, useVersion, useClashXData } from '@stores'
import './style.scss'

interface SidebarProps {
    routes: Array<{
        path: string
        name: string
        noMobile?: boolean
        footerOnly?: boolean
    }>
}

export default function Sidebar (props: SidebarProps) {
    const { routes } = props
    const { translation } = useI18n()
    const { version, premium } = useVersion()
    const { data } = useClashXData()
    const { t } = translation('SideBar')
    const location = useLocation()

    const navlinks = routes
        .filter(route => !route.footerOnly)
        .map(({ path, name, noMobile }) => (
            <li className={classnames('item', { 'no-mobile': noMobile })} key={name}>
                <NavLink to={{ pathname: path, search: location.search }} className={({ isActive }) => classnames({ active: isActive })}>
                    { t(name as keyof LocalizedType['SideBar']) }
                </NavLink>
            </li>
        ))

    return (
        <div className="sidebar">
            <img src={logo} alt="logo" className="sidebar-logo" />
            <ul className="sidebar-menu">
                { navlinks }
            </ul>
            <div className="sidebar-version">
                <span className="sidebar-version-label">Clash{ data?.isClashX && 'X' } { t('Version') }</span>
                <span className="sidebar-version-text">{ version }</span>
                { premium && <span className="sidebar-version-label">Premium</span> }
            </div>
            <div className="sidebar-footer">
                <NavLink
                    to={{ pathname: '/about', search: location.search }}
                    className={({ isActive }) => classnames('sidebar-about', { active: isActive })}
                    title={t('About')}
                >
                    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
                        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                        <path fill="currentColor" d="M11 10h2v7h-2zm0-3h2v2h-2z" />
                    </svg>
                </NavLink>
            </div>
        </div>
    )
}
