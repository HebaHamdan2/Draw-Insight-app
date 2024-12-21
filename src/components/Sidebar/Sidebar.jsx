import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({onMenuClick}) => {
  return (
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <Link to="./" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-5 d-none d-sm-inline">Menu</span>
        </Link>
        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
          <li className="nav-item">
            <button  className="btn btn-link nav-link align-middle px-0 text-white" onClick={() => onMenuClick('drawings')}>
            <i class="fa-solid fa-clock-rotate-left"></i> <span className="ms-1 d-none d-sm-inline">History</span>
            </button>
          </li>
          <li className="nav-item">
            <button  className="btn btn-link nav-link align-middle px-0 text-white" onClick={() => onMenuClick('allChildren')}>
            <i class="fa-solid fa-children"></i> <span className="ms-1 d-none d-sm-inline">Children Profiles</span>
            </button>
          </li>
          <li className="nav-item">
            <button  className="btn btn-link nav-link align-middle px-0 text-white" onClick={() => onMenuClick('addChild')}>
            <i class="fa-solid fa-person-circle-plus"></i> <span className="ms-1 d-none d-sm-inline">Create Child Profile</span>
            </button>
          </li>
        </ul>
        <hr />
        <div className="dropdown pb-4">
          <Link href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="./null.jpg" alt="profile" width={30} height={30} className="rounded-circle" />
            <span className="d-none d-sm-inline mx-1">username</span>
          </Link>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li><Link className="dropdown-item" href="#">Settings</Link></li>
            <li><Link className="dropdown-item" href="#">Profile</Link></li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li><Link className="dropdown-item" href="#">Sign out</Link></li>
          </ul>
        </div>
      </div>
    </div>



  )
}

export default Sidebar