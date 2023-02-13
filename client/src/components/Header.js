import logo from './assets/logo.png'

export default function Header() {
  return (
    <nav className='navbar bg-light mb-4 p-0'>
        <div class="container">
            <a href="/" class="navbar-brand">
                <div class="d-flex">
                    <img src={logo} alt="logo" className='mr-2' />
                    <div>Project Managment</div>
                </div>
            </a>
        </div>
    </nav>
  )
}
