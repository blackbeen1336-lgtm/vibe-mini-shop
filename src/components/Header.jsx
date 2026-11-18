import { Link, NavLink } from 'react-router-dom'
import '../styles/Header.css'

const menus = [
  { label: 'HOME', to: '/' },
  { label: 'MOOD', to: '/mood' },
  { label: 'STYLE', to: '/style' },
  { label: 'SHOP', to: '/shop' },
]

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        {/* 좌측: 로고 */}
        <Link to="/" className="header-logo">
          Mood Wear
        </Link>

        {/* 중앙: 메뉴 */}
        <nav className="header-nav">
          {menus.map((menu) => (
            <NavLink key={menu.label} to={menu.to} end className="header-link">
              {menu.label}
            </NavLink>
          ))}
        </nav>

        {/* 우측: 검색, 위시리스트 아이콘 */}
        <div className="header-icons">
          <button type="button" className="header-icon" aria-label="검색">
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="21" y2="21" />
            </svg>
          </button>
          <button type="button" className="header-icon" aria-label="Wishlist">
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path d="M12 20.5s-7.5-4.6-9.3-9.2C1.4 8 3.4 4.5 7 4.5c2 0 3.4 1.1 5 3 1.6-1.9 3-3 5-3 3.6 0 5.6 3.5 4.3 6.8-1.8 4.6-9.3 9.2-9.3 9.2z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
