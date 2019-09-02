import React, {Component} from 'react';
class NqootRecord extends Component{
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
		const record=this.props.record;
		this.props.onUpdate(record);
	}

	wrapperFunction = () => {
		this.onEnter();
	    this.onUpdateName();
	}

	updateNqoot(event){
		this.props.record.payerquantity=event.target.value;
	}

	updateName(event){
		this.props.record.payerName=event.target.value;
	}

	updateCurrency(event){
		this.props.record.currency=event.target.value;
	}
	
	render(){			
		return(
				<table className="navdiv2 m-2">
				<tbody>
					<tr>
						<td className="" colSpan="4" align="center">
							<div className="nqootBar">{this.props.record.payerName}&nbsp; 
							{this.props.record.payerquantity}&nbsp; 
							{this.props.record.currency}</div>
						</td>
					</tr>
					<tr>	
						<td>
							<input onChange={this.updateName.bind(this)}  
							className="inputText"
							onClick={this.wrapperFunction} type="text" id="name"
							defaultValue={this.props.record.payerName}>
							</input>
						</td>
						<td>
							<input onChange={this.updateNqoot.bind(this)} 
							className="inputText"
							onClick={this.wrapperFunction} type="text" id="nqoot"
							defaultValue={this.props.record.payerquantity}>
							</input>
						</td>
						<td>
							<select onChange={this.updateCurrency.bind(this)}
							id="currency"
							className="inputText"
							onClick={this.wrapperFunction}>
							<option defaultValue={this.props.record.currency}>{this.props.record.currency}</option>
							<option value="dollar">دولار</option>
							<option value="shekel">شيكل</option>
							<option value="euro">يورو</option>
							</select>
						</td>	
						<td>
					<h4>
						{this.state.update ? <button onClick={this.onUpdateClick} className="btn btn-warning btn-lg m-2 badge badge-primary">تعديل</button> :null} 
						{this.state.update ? <button onClick={()=>this.props.onDelete(this.props.record.payerNum)} className="badge badge-primary btn btn-danger btn-lg m-2">حذف</button> :null}
					</h4>
					</td>
					</tr>	
					
				</tbody>
				</table>
			);	
		}
		}

	export default NqootRecord;