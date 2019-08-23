import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import Masthead from '../components/Masthead';
import SignUp from '../components/SignUp';
import Services from '../components/Services';
import Events from '../components/Events';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

	class HomePage extends Component{
		render(){
			return(
				<React.Fragment>
					<Navbar/>
					<Masthead/>	
					<SignUp/>
					{/* <Services/>
					<Events/>
					<Contact/>
					<Footer/> */}
				</React.Fragment>
			);
		}
	}
export default HomePage;