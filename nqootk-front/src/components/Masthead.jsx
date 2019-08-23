import React, {Component} from 'react';

	class Masthead extends Component
    {	
	render(){
		return(
			<header class="masthead">
				<div class="container h-100">
					<div class="row h-100 align-items-center justify-content-center text-center">
						<div class="col-lg-10 align-self-end">
							<h1 class="text-uppercase text-white font-weight-bold">Nqootk.com</h1>
							<hr class="divider my-4"></hr>
						</div>
						<div class="col-lg-8 align-self-baseline">
							<p class="text-white-75 font-weight-light mb-5">اهلا وسهلا بكم في موقع نقوطك, الذي بدوره يسهل على المستخدمين تخزين اسماء المناسبات او الاعراس التي قاموا بحضورها بالاضافة الى تسجيل مبلغ النقوط لكل مناسبة.</p>
							<a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">تسدجيل الدخول</a>
						</div>
					</div>
				</div>
			</header>	
  			);
		}
	}

export default Masthead;
