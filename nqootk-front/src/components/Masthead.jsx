import React, {Component} from 'react';

	class Masthead extends Component
    {	
	render(){
		return(
			<header className="masthead">
				<div className="container h-100">
					<div className="row h-100 align-items-center justify-content-center text-center">
						<div className="col-lg-10 align-self-end">
							<h1 className="text-uppercase text-white font-weight-bold">Nqootk.com</h1>
							<hr className="divider my-4"></hr>
						</div>
						<div className="col-lg-8 align-self-baseline">
							<p className="text-white-75 font-weight-light mb-5">اهلا وسهلا بكم في موقع نقوطك, الذي بدوره يسهل على المستخدمين تخزين اسماء المناسبات او الاعراس التي قاموا بحضورها بالاضافة الى تسجيل مبلغ النقوط لكل مناسبة.</p>
							<a className="btn btn-primary btn-xl js-scroll-trigger" href="#about"> تسدجيل الدخول </a>
						</div>
					</div>
				</div>
			</header>	
  			);
		}
	}

export default Masthead;
