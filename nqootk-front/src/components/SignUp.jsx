import React, {Component} from 'react';

	class About extends Component
    {	
	render(){
		return(
			<section className="page-section bg-signup" id="register">
				<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
				<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
				<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
				<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"></link>

				<div className="container" dir="rtl"> 
				<div className="row justify-content-center">
				<div className="col-md-6">
				<div className="card">
				<header className="card-header">
					<h4 className="card-title mt-2 float-right">تسجيل الدخول</h4>
					<a href="" className="float-left btn btn-outline-primary mt-1">دخول</a>
				</header>
				<article className="card-body">
					<form align="right">
						<div className="form-row">
							<div className="col form-group">
								<label>الاسم </label>   
								<input type="text" className="form-control" placeholder=""></input>
							</div> 
							<div className="col form-group">
								<label>العائلة</label>
								<input type="text" className="form-control" placeholder=" "></input>
							</div> 
						</div> 
						<div className="form-group">
							<label>البريد الالكتروني</label>
							<input type="email" className="form-control" placeholder=""></input>
							<small className="form-text text-muted">لن يتم مشاركة الايميل الخاص بك ولا بأي حال من الاحوال.</small>
						</div> 
						<div className="form-group">
								<label className="form-check form-check-inline">
							<input className="form-check-input" type="radio" name="gender" value="option1"></input>
							<span className="form-check-label"> ذكر </span>
							</label>
							<label className="form-check form-check-inline">
							<input className="form-check-input" type="radio" name="gender" value="option2"></input>
							<span className="form-check-label"> انثى</span>
							</label>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
							<label>المدينة</label>
							<input type="text" className="form-control"></input>
							</div>
							<div className="form-group col-md-6">
							<label>الدولة</label>
							<select id="inputState" className="form-control">
								<option> اختار...</option>
								<option>Uzbekistan</option>
								<option>Russia</option>
								<option defaultValue>United States</option>
								<option>India</option>
								<option>Afganistan</option>
							</select>
							</div>
						</div>
						<div className="form-group">
							<label>كلمة المرور</label>
							<input className="form-control" type="password"></input>
						</div>   
						<div className="form-group">
							<button type="submit" className="btn btn-primary btn-block">  تسجيل </button>
						</div> 
						<small className="text-muted">بالنقر فوق الزر "تسجيل" ، فإنك تؤكد أنك تقبل شروط  الاستخدام وسياسة الخصوصية الخاصة بنا.</small>                                          
					</form>
				</article> 
				<div className="border-top card-body text-center">هل عندك حساب؟ <a href="">دخول</a></div>
				</div> 
				</div> 
				</div> 
				</div> 
			</section>
  			);
		}
	}

export default About;