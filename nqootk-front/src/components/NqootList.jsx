import React, {Component} from 'react';
import NqootRecord from './NqootRecord';

		class NqootList extends Component{
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
				<table align="center" className="navdiv">
				<tbody>
					<tr align="center">
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
                                       	{this.props.data.map(x=>
										<tr align="center" key={x.payerNum}><td className="m-4">
										<NqootRecord key={x.payerName} onDelete={this.props.onDelete} record={x} onUpdate={this.props.onUpdate}/>
										</td></tr>)}
									</tbody>
									</table>
						</td>
					 </tr>
					 </tbody>
				</table>);
		}
		}

export default NqootList;