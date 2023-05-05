import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

export default class Navbar extends Component {
  handlerToggleMenu() {
    if (document.getElementById('toggle-menu').className == 'theme-green')
      document.getElementById('toggle-menu').className = 'theme-green ls-toggle-menu';
    else
      document.getElementById('toggle-menu').className = 'theme-green';
  }
  render() {
    return (
      <>
        {/* <!-- Top Bar --> */}
        <nav className="navbar" style={{ zIndex: 1000 }}>
          <div className="col-12">

            <div className="navbar-header">
              <a href="javascript:void(0);" className="bars"></a>
              <Link className="navbar-brand" to='/'>WEBGIS :: Geoserver</Link>
            </div>

            <ul className="nav navbar-nav navbar-left">
              <li className="">
                <a href='javascript:void(0);'
                  onClick={() => this.handlerToggleMenu()}
                  className="ls-toggle-btn"
                  data-close="true">
                  <i className="zmdi zmdi-swap"></i>
                </a>
              </li>
              <li><Link to="/" className=""><i className="zmdi zmdi-home">
                <span className="spanSmall"> HOME</span></i> </Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li class="dropdown"><a href="javascript:void(0);" class="dropdown-toggle xs-hide" style={{ textDecoration: 'none' }} data-toggle="dropdown" role="button"><i class="zmdi zmdi-info-outline"></i> <span className='spanSmall'>INFORMATIONS</span>
                <div class="notify"><span class="heartbit"></span><span class="point"></span></div>
              </a>
                <ul class="dropdown-menu slideDown">
                  <li class="header text-muted">INFO</li>
                  <li class="body">
                    <ul class="menu list-unstyled">
                      <li><a href="https://executar.net" target={'_blank'}>
                        <div class="icon-circle l-green"> <i class="zmdi zmdi-phone-in-talk"></i></div>
                        <div class="menu-info">
                          <h4>Talk to us</h4>
                          <p> contact </p>
                        </div>
                      </a></li>
                      <li><a href="https://executar.net" target={'_blank'}>
                        <div class="icon-circle l-turquoise"> <i class="zmdi zmdi-shield-check"></i> </div>
                        <div class="menu-info">
                          <h4>Privacity</h4>
                          <p>  Our Polices </p>
                        </div>
                      </a></li>
                      <li>
                        <Link to={'/staff'}>
                          <div class="icon-circle l-amber"> <i class="zmdi zmdi-help"></i> </div>
                          <div class="menu-info">
                            <h4>About</h4>
                            <p>  About WebGIS </p>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li class="footer"><a href="javascript:void(0);"></a></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </>
    )
  }
}
