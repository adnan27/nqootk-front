import React, {Component} from 'react';
import Counter from './counter';

		class Counters extends Component{
		state={
		name:"",
		currency:"",
		nqoot:0
		}

		updateState=()=>{
		const name=document.getElementById("name").value;
		const currency=document.getElementById("currency").value;
		const nqoot=document.getElementById("nqoot").value;
		this.props.onAdd([name,currency,nqoot]);
		document.getElementById("name").focus();
		};

		handleEnter(event){
		if (event.keyCode === 13 && event.target.id=="name" ) {
			document.getElementById("nqoot").focus();
		}else if(event.keyCode === 13 && event.target.id=="nqoot"){
			document.getElementById("currency").focus();
		}else if(event.keyCode === 13 && event.target.id=="currency"){
			document.getElementById("update").focus();
		}
		};

		render(){

			const divStyle = {
			color: 'blue',
			background: '#ADD8E6',
			};

			const textBoxStyle = {
			direction:'RTL',
			background: '#ADD8E6',
			};

			return(
				<div align="center">

				<button 
				onClick={this.props.onReset} 
				className="btn btn-primary bt-sm m-2">
				Reset
				</button>

				<button 
				id="update"
				onClick={
					this.updateState
				} 
				className="btn btn-primary bt-sm m-2">
				Add
				</button>

				<select id="currency" onKeyDown={this.handleEnter.bind(this)}>
				<option defaultValue="shekel">shekel</option>
				<option value="dollar">dollar</option>
				<option value="euro">euro</option>
				</select>
                
				<input 
				style={textBoxStyle}
				onSubmit={this.updateState} 
				onKeyDown={this.handleEnter.bind(this)}
				type="text" 
				id="nqoot">
				</input>
				
				<h9>  :الاسم:   </h9>
				<input 
				style={textBoxStyle}
				onSubmit={this.updateState} 
				onKeyDown={this.handleEnter.bind(this)}
				type="text" 
				id="name">
				
				</input>
                <h9>   نقوط   </h9>
				{this.props.counters.map(x=>
				<li style={divStyle} key={x.id} className="m-1">
				<Counter key={x.id}
				onDelete={this.props.onDelete} 
				counter={x} 
				onIncrement={this.props.onIncrement}
				onUpdate={this.props.onUpdate}
				onEdit={this.props.onEdit}/>
				</li>)}
				</div>);
		}
		}

export default Counters;