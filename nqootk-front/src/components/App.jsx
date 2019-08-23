import React, {Component} from 'react';
import Counters from './Counters';
import NavBar from './Navbar';

	class App extends Component{
		state={
			counters:[
				{id:1,value:5,name:"عدنان جابر",nqoot:0,currency:"دولار"},
				{id:2,value:0,name:"محمد جابر",nqoot:0,currency:"شيكل"},
				{id:3,value:0,name:"محمد علي",nqoot:0,currency:"يورو"},
				{id:4,value:0,name:"بهلول النجار",nqoot:0,currency:"شيكل"}
			],
			maxElements:4
		};

		handleDelete= countId=>{
			const counters=this.state.counters.filter(c=>c.id!==countId);
			this.setState({counters});
		};

		handleEdit=counter=>{
            const counters=[...this.state.counters];
		    const index=counters.indexOf(counter);
		    counters[index]={...counter};
		    counters[index].name=counter.name;
		    this.setState({counters});
		};

		handleReset=()=>{
			
			// this.props.name ="";
			// this.props.nqoot="";
		    // const counters= this.state.counters.map(c=>{c.value=0;return c;});
		    // this.setState({counters});
		};

		handleAdd=namei=>{
			const maxElements=this.state.maxElements+1;
			var counters=[{id:maxElements,value:0,name:namei[0],nqoot:namei[2],currency:namei[1]}];
		    counters=counters.concat(...this.state.counters);
			this.setState({counters,maxElements});
		};

		handleIncrement=counter=>{
		    const counters=[...this.state.counters];
		    const index=counters.indexOf(counter);
		    counters[index]={...counter};
		    counters[index].value++;
		    this.setState({counters});
		};

		handleUpdate=counter=>{
		    const counters=[...this.state.counters];
		    const index=counters.indexOf(counter);
		    counters[index]={...counter};
		    this.setState({counters});
		};

		render(){
				return(
					<React.Fragment>
						<NavBar />						
						<header class="mastheadz">
							<div class="container h-100">
								<main className="container">
									<Counters onUpdate={this.handleUpdate}
									onAdd={this.handleAdd} counters={this.state.counters}
									onReset={this.handleReset}  onDelete={this.handleDelete}
									onIncrement={this.handleIncrement}
										onEdit={this.handleEdit}/>
								</main>		
							</div>
						</header>	
						
					</React.Fragment>
				);
		}
	}
export default App;