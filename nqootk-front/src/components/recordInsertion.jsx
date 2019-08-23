import React, {Component} from 'react';
import resultRecord from './resultRecord';

	class recordInsertion extends Component{
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
			return(
				<table align="center" class="navdiv">
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
									<h9>العملة</h9>
						</td>

						<td align="center">		
									<input  onSubmit={this.updateState} onKeyDown={this.handleEnter.bind(this)} type="text" id="nqoot">
									</input>
						</td>
						<td align="center">
									<h9>النقوط</h9>
						</td>
						<td align="center">
									<input onSubmit={this.updateState} onKeyDown={this.handleEnter.bind(this)} type="text" id="name">			
									</input>
						</td>
						<td align="center">			
									<h9>الاسم</h9>
						</td>
					</tr>
					<tr>	
						<td colspan="8">											
									<table dir="rtl" className="tbl">
										{this.props.recordInsertion.map(x=>
										<tr align="center"><td key={x.id} className="m-4">
										<recordInsertion key={x.id} onDelete={this.props.onDelete} resultRecord={x} onIncrement={this.props.onIncrement} onUpdate={this.props.onUpdate}
										onEdit={this.props.onEdit}/>
										</td></tr>)}
									</table>
						</td>
					 </tr>
				</table>);
		}
		}
export default recordInsertion;
