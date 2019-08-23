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
				if (event.keyCode === 13 && event.target.id ==="name" ) {
					document.getElementById("nqoot").focus();
				}else if(event.keyCode === 13 && event.target.id ==="nqoot"){
					document.getElementById("currency").focus();
				}else if(event.keyCode === 13 && event.target.id ==="currency"){
					document.getElementById("update").focus();
			}
		};

		render(){
			// const divStyle = {
			// color: 'blue',
			// background: '#ADD8E6',
			// };

			// const textBoxStyle = {
			// direction:'RTL',
			// background: '#ADD8E6',
			// };

			return(
				<table align="center" className="navdiv">
				<tbody>
					<tr align="center">
						{/* <div class="navdiv"> */}
						<td align="center">
									<button onClick={this.props.onReset} className="btn btn-primary bt-sm m-2">
									مسح
									</button>
						</td>
						<td align="center">
									<button id="update" onClick={this.updateState} className="btn btn-primary bt-sm m-2">
									اضافة
									</button>
						</td>
						
						<td align="center">
									<select id="currency" onKeyDown={this.handleEnter.bind(this)}>
										<option defaultValue="shekel">شيكل</option>
										<option value="dollar">دولار</option>
										<option value="euro">يورو</option>
									</select>
						</td>
						<td align="center">
									<font color="white">العملة</font>
						</td>

						<td align="center">		
									<input  onSubmit={this.updateState} onKeyDown={this.handleEnter.bind(this)} type="text" id="nqoot">
									</input>
						</td>
						<td align="center">
									<font color="white">النقوط</font>
						</td>
						<td align="center">
									<input onSubmit={this.updateState} onKeyDown={this.handleEnter.bind(this)} type="text" id="name">			
									</input>
						</td>
						<td align="center">			
									<font color="white">الاسم</font>
						</td>
					</tr>
					<tr>	
						<td colSpan="8">											
									<table dir="rtl" className="tbl">
									<tbody>
										{this.props.counters.map(x=>
										<tr align="center" key={x.id}><td className="m-4">
										<Counter key={x.id} onDelete={this.props.onDelete} counter={x} onIncrement={this.props.onIncrement} onUpdate={this.props.onUpdate}
										onEdit={this.props.onEdit}/>
										</td></tr>)}
									</tbody>
									</table>
						</td>
					 </tr>
					 </tbody>
				</table>);
		}
		}

export default Counters;