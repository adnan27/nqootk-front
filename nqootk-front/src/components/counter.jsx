import React, {Component} from 'react';

class Counter extends Component{
    state = {
	    color: 'blue',
		update:false,
		name:"",
		nqoot:"",
		curr:"shekel"
	}
		
	onEnter = () => {
		this.setState({ color: 'white' });
	}

	onLeave = () => {
		this.setState({ color: 'blue' });
	}

	onUpdateName=()=>{
		this.setState({ update:true});
	}

	onUpdateClick=()=>{
		this.setState({ update:false});
		this.onLeave();
		const counter=this.props.counter;
		this.props.onUpdate(counter);
	}

	wrapperFunction = () => {
		this.onEnter();
	    this.onUpdateName();
	}

	updateNqoot(event){
		this.props.counter.nqoot=event.target.value;
	}

	updateName(event){
		this.props.counter.name=event.target.value;
	}

	updateCurrency(event){
		this.props.counter.currency=event.target.value;
	}

		
	render(){
			
		return(<div  className="badge badge-primary m-2" >
			<span className={this.getBadgeClasses()}>{this.formatCount()}</span>

			<span className={this.getBadgeClasses()}>{this.props.counter.name}</span>
				
			<select onChange={this.updateCurrency.bind(this)}
			id="currency"
			style={{ backgroundColor: this.state.color }} 
			onClick={this.wrapperFunction}>
			<option defaultValue={this.props.counter.currency}>{this.props.counter.currency}</option>
			<option value="dollar">dollar</option>
			<option value="shekel">shekel</option>
			<option value="euro">euro</option>
			</select>

			<input 
			onChange={this.updateNqoot.bind(this)}
			style={{ backgroundColor: this.state.color }} 
			onClick={this.wrapperFunction}
			type="text"
			id="nqoot"
			defaultValue={this.props.counter.nqoot}
			>
			</input>

			<input 
			onChange={this.updateName.bind(this)}
			style={{ backgroundColor: this.state.color }} 
			onClick={this.wrapperFunction}
			type="text"
			id="name"
			defaultValue={this.props.counter.name}
			>
			</input>
				
				
			{this.state.update ? <button
			onClick={this.onUpdateClick}
			className="btn btn-secondary btn-sm m-2">
			Update</button> :null} 
				
			<button
			onClick={()=>this.props.onIncrement(this.props.counter)} 
			className="btn btn-secondary btn-sm">
			increment
			</button> 

			<button 
			onClick={()=>this.props.onDelete(this.props.counter.id)}
			className="btn btn-danger btn-sm m-2">
			Delete
			</button>
			</div>);
		}

		formatCount(){
			const {value}=this.props.counter;
			return value==0 ? "Zero" : value;

		}
		getBadgeClasses(){
			let classColors = "badge m-2 badge-";
			classColors += this.props.counter.value == 0 ? "warning" : "primary";
			return classColors;
		}
		}

	export default Counter;