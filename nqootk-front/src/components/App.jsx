import React, {Component} from 'react';
import Counters from './Counters';
import NavBar from './Navbar';
import Axios from 'axios';

	class App extends Component{
		state={
			counters:[
				{id:1,value:77,name:"adnan jaber",nqoot:100,currency:"shekels"},
				{id:2,value:0,name:"mohhamad jaber",nqoot:900,currency:"shekels"},
				{id:3,value:0,name:"abd dozan",nqoot:200,currency:"boosat"},
				{id:4,value:0,name:"fafe",nqoot:33,currency:"euro"}
			],
			maxElements:4,
			serverData:[]
		};

        componentDidMount(){
		 Axios.get('http://localhost:8080/nqoot').then(res=>{
			 console.log(res);
			 this.setState({serverData:res})});
        }

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