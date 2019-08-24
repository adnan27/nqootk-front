import React, {Component} from 'react';

class Counter extends Component{
    state = {
	    color: 'purple',
		update:false,
		name:"",
		nqoot:"",
		curr:"شيكل"
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

	// onDeleteClick=()=>{
	// 	this.setState({ update:false});
	// 	this.onLeave();
	// 	const counter=this.props.counter;
	// 	this.props.onUpdate(counter);
	// }

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
		return(
			<table className="navdiv2 m-2">
			<tbody>
				<tr>
					{/* this.getBadgeClasses() */}
					<td className="" colSpan="4" align="center">
						<div className="nqootBar">{this.props.counter.name}&nbsp; 
						{this.props.counter.nqoot}&nbsp; 
						{this.props.counter.currency}</div>
					</td>
				</tr>
				<tr>	
					<td>
						<input onChange={this.updateName.bind(this)}  
						className="inputText"
						onClick={this.wrapperFunction} type="text" id="name"
						defaultValue={this.props.counter.name}>
						</input>
					</td>
					<td>
						<input onChange={this.updateNqoot.bind(this)} 
						className="inputText"
						onClick={this.wrapperFunction} type="text" id="nqoot"
						defaultValue={this.props.counter.nqoot}>
						</input>
					</td>
					<td>
						<select onChange={this.updateCurrency.bind(this)}
						id="currency"
						className="inputText"
						onClick={this.wrapperFunction}>
						<option defaultValue={this.props.counter.currency}>{this.props.counter.currency}</option>
						<option value="dollar">دولار</option>
						<option value="shekel">شيكل</option>
						<option value="euro">يورو</option>
						</select>
					</td>	
						
					{this.state.update ? <button onClick={this.onUpdateClick} className="btn btn-secondary btn-sm m-2">تعديل</button> :null} 
					{this.state.update ? <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-secondary btn-sm m-2">حذف</button> :null}

					{/* <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">
					Delete
					</button> */}
				</tr>
			</tbody>
			</table>
			
			);
			
		}
		getBadgeClasses(){
			let classColors = "badge m-2 badge-";
			classColors += this.props.counter.value === 0 ? "warning" : "primary";
			return classColors;
		}
		
		}

	export default Counter;