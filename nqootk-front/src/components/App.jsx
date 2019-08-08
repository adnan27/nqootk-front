import React, {Component} from 'react';
import Navbar from './NavBar'
import Counters from './Counters';
	class App extends Component{
	
		state={
			counters:[
				{id:1,value:5,name:"adnan jaber",nqoot:0,currency:"dollar"},
				{id:2,value:0,name:"muhamed jaber",nqoot:0,currency:"dollar"},
				{id:3,value:0,name:"boss boss",nqoot:0,currency:"dollar"},
				{id:4,value:0,name:"muhammed ali",nqoot:0,currency:"dollar"}
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
		    const counters= this.state.counters.map(c=>{c.value=0;return c;});
		    this.setState({counters});
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

        <Navbar totalCounters={this.state.counters.filter(c=>c.value>0).length}/>

		<main className="container">
		<Counters onUpdate={this.handleUpdate} onAdd={this.handleAdd} counters={this.state.counters} onReset={this.handleReset}  onDelete={this.handleDelete} onIncrement={this.handleIncrement} onDelete={this.handleDelete} onEdit={this.handleEdit}/>
		</main>
		
	    </React.Fragment>
		);
	}

	}

export default App;