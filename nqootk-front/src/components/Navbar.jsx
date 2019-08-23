import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';

	function handleAlertClick() {

		ReactDOM.render(<App />,document.getElementById('root'));
	}

	class NavBar extends Component{
	render(){
		return(
				<nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
					<div className="container">
						<a className="navbar-brand js-scroll-trigger" href="#page-top">نقوطك.كوم</a>
						<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
					<div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className="navbar-nav ml-auto my-2 my-lg-0">
						<li className="nav-item">
							<a className="nav-link js-scroll-trigger" href="#nqootk"  onClick={handleAlertClick}>نقوطك</a>
						</li>
						<li className="nav-item">
							<a className="nav-link js-scroll-trigger" href="#about">عن الموقع</a>
						</li>
						<li className="nav-item">
							<a className="nav-link js-scroll-trigger" href="#services">خدمات</a>
						</li>
						<li className="nav-item">
							<a className="nav-link js-scroll-trigger" href="#portfolio">مناسبات</a>
						</li>
						<li className="nav-item">
							<a className="nav-link js-scroll-trigger" href="#contact">اتصل بنا</a>
						</li>
						</ul>
					</div>
					</div>
				</nav>
			);
	}

	}

export default NavBar;

