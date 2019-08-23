import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';

	function handleAlertClick() {

		ReactDOM.render(<App />,document.getElementById('root'));
	}

	class NavBar extends Component{
	render(){
		return(
				<nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
					<div class="container">
						<a class="navbar-brand js-scroll-trigger" href="#page-top">نقوطك.كوم</a>
						<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
					<div class="collapse navbar-collapse" id="navbarResponsive">
						<ul class="navbar-nav ml-auto my-2 my-lg-0">
						<li class="nav-item">
							<a class="nav-link js-scroll-trigger" href="#nqootk"  onClick={handleAlertClick}>نقوطك</a>
						</li>
						<li class="nav-item">
							<a class="nav-link js-scroll-trigger" href="#about">عن الموقع</a>
						</li>
						<li class="nav-item">
							<a class="nav-link js-scroll-trigger" href="#services">خدمات</a>
						</li>
						<li class="nav-item">
							<a class="nav-link js-scroll-trigger" href="#portfolio">مناسبات</a>
						</li>
						<li class="nav-item">
							<a class="nav-link js-scroll-trigger" href="#contact">اتصل بنا</a>
						</li>
						</ul>
					</div>
					</div>
				</nav>
			);
	}

	}

export default NavBar;

