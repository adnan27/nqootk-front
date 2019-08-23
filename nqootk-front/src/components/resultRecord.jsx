import React, {Component} from 'react';

class resultRecord extends Component{
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
		const resultRecord=this.props.resultRecord;
		this.props.onUpdate(resultRecord);
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
		this.props.resultRecord.nqoot=event.target.value;
	}

	updateName(event){
		this.props.resultRecord.name=event.target.value;
	}

	updateCurrency(event){
		this.props.resultRecord.currency=event.target.value;
	}
	
	render(){			
		return(
			<table className="badge badge-primary m-2">
				<tr>
					{/* this.getBadgeClasses() */}
					<td colspan="4" align="center">
						<span className="">{this.props.resultRecord.name}</span>
						<span className="">{this.props.resultRecord.nqoot}</span>
						<span className="">{this.props.resultRecord.currency}</span>
					</td>
				</tr>
				<tr>	
					<td>
						<input onChange={this.updateName.bind(this)} style={{ backgroundColor: this.state.color }} 
						onClick={this.wrapperFunction} type="text" id="name"
						defaultValue={this.props.resultRecord.name}>
						</input>
					</td>
					<td>
						<input onChange={this.updateNqoot.bind(this)} style={{ backgroundColor: this.state.color }} 
						onClick={this.wrapperFunction} type="text" id="nqoot"
						defaultValue={this.props.resultRecord.nqoot}>
						</input>
					</td>
					<td>
						<select onChange={this.updateCurrency.bind(this)}
						id="currency"
						style={{ backgroundColor: this.state.color }} 
						onClick={this.wrapperFunction}>
						<option defaultValue={this.props.resultRecord.currency}>{this.props.resultRecord.currency}</option>
						<option value="dollar">دولار</option>
						<option value="shekel">شيكل</option>
						<option value="euro">يورو</option>
						</select>
					</td>	
						
					{this.state.update ? <button onClick={this.onUpdateClick} className="btn btn-secondary btn-sm m-2">تعديل</button> :null} 
					{this.state.update ? <button onClick={()=>this.props.onDelete(this.props.resultRecord.id)} className="btn btn-secondary btn-sm m-2">حذف</button> :null}

					{/* <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">
					Delete
					</button> */}
				</tr>
			</table>
			
			);
			
		}
		getBadgeClasses(){
			let classColors = "badge m-2 badge-";
			classColors += this.props.resultRecord.value === 0 ? "warning" : "primary";
			return classColors;
		}
		}

	export default resultRecord;