import React, {Component} from 'react';

	class About extends Component
    {	
	render(){
		return(
			<section class="page-section bg-signup" id="register">
				<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
				<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
				<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
				<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"></link>

				<div class="container" dir="rtl"> 
				<div class="row justify-content-center">
				<div class="col-md-6">
				<div class="card">
				<header class="card-header">
					<h4 class="card-title mt-2 float-right">تسجيل الدخول</h4>
					<a href="" class="float-left btn btn-outline-primary mt-1">دخول</a>
				</header>
				<article class="card-body">
					<form align="right">
						<div class="form-row">
							<div class="col form-group">
								<label>الاسم </label>   
								<input type="text" class="form-control" placeholder=""></input>
							</div> 
							<div class="col form-group">
								<label>العائلة</label>
								<input type="text" class="form-control" placeholder=" "></input>
							</div> 
						</div> 
						<div class="form-group">
							<label>البريد الالكتروني</label>
							<input type="email" class="form-control" placeholder=""></input>
							<small class="form-text text-muted">لن يتم مشاركة الايميل الخاص بك ولا بأي حال من الاحوال.</small>
						</div> 
						<div class="form-group">
								<label class="form-check form-check-inline">
							<input class="form-check-input" type="radio" name="gender" value="option1"></input>
							<span class="form-check-label"> ذكر </span>
							</label>
							<label class="form-check form-check-inline">
							<input class="form-check-input" type="radio" name="gender" value="option2"></input>
							<span class="form-check-label"> انثى</span>
							</label>
						</div>
						<div class="form-row">
							<div class="form-group col-md-6">
							<label>المدينة</label>
							<input type="text" class="form-control"></input>
							</div>
							<div class="form-group col-md-6">
							<label>الدولة</label>
							<select id="inputState" class="form-control">
								<option> اختار...</option>
								<option>Uzbekistan</option>
								<option>Russia</option>
								<option selected="">United States</option>
								<option>India</option>
								<option>Afganistan</option>
							</select>
							</div>
						</div>
						<div class="form-group">
							<label>كلمة المرور</label>
							<input class="form-control" type="password"></input>
						</div>   
						<div class="form-group">
							<button type="submit" class="btn btn-primary btn-block">  تسجيل </button>
						</div> 
						<small class="text-muted">بالنقر فوق الزر "تسجيل" ، فإنك تؤكد أنك تقبل شروط  الاستخدام وسياسة الخصوصية الخاصة بنا.</small>                                          
					</form>
				</article> 
				<div class="border-top card-body text-center">هل عندك حساب؟ <a href="">دخول</a></div>
				</div> 
				</div> 
				</div> 
				</div> 
			</section>
  			);
		}
	}

export default About;