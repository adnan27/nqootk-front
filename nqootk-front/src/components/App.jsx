import React, {Component} from 'react';
import NqootList from './NqootList';
import NavBar from './Navbar';
import Axios from 'axios';

	class App extends Component{
		state={
			maxElements:4,
			serverData:[]
		};

        componentDidMount(){
		 Axios.get('http://localhost:8080/nqoot').then(res=>{
			 console.log("length  "+res.length);
			 this.setState({maxElements:res.data.length,serverData:res.data})
			 console.log("saved!!!! "+this.state.serverData)});
        }
		

		handleDelete= payerNum=>{
			Axios.delete('http://localhost:8080/nqoot/1/'+payerNum)
             .then(function (response) {
               console.log(response);
              })
              .catch(function (error) {
               console.log(error);
              });
			const serverData=this.state.serverData.filter(c=>c.payerNum!==payerNum);
			this.setState({serverData});
			console.log("del "+serverData.length);
		};

		handleAdd=namei=>{
			const maxElements=this.state.maxElements+1;
			Axios.post('http://localhost:8080/nqoot',{userId:1,payerNum:maxElements,payerName:namei[0],payerquantity:namei[2],currency:namei[1]})
             .then(function (response) {
               console.log(response);
              })
              .catch(function (error) {
               console.log(error);
              });
			var serverData=[{payerNum:maxElements,payerName:namei[0],payerquantity:namei[2],currency:namei[1]}];
			serverData=serverData.concat(...this.state.serverData);
			console.log(serverData.length+"xxxx");
			this.setState({maxElements,serverData});
		};

		handleUpdate=data=>{

			Axios.post('http://localhost:8080/nqoot',{userId:1,payerNum:data.payerNum,payerName:data.payerName,payerquantity:data.payerquantity,currency:data.currency})
             .then(function (response) {
               console.log(response);
              })
              .catch(function (error) {
               console.log(error);
              });
            const serverData=[...this.state.serverData];
		    const index=serverData.indexOf(data);
		    serverData[index]={...data};
			this.setState({serverData});
			console.log("update ");
		};

		render(){
				 this.state.serverData.map(item => console.log(item.payerName+" "+item.payerquantity+" "+item.currency ));
				return(
					<React.Fragment>
						<NavBar />						
						<header className="mastheadz">
							<div className="container h-100">
								<main className="container">
									<NqootList onUpdate={this.handleUpdate}
									onAdd={this.handleAdd} counters={this.state.counters}
									onReset={this.handleReset}  onDelete={this.handleDelete}
									data={this.state.serverData}
									count={this.state.maxElements}/>
								</main>		
							</div>
						</header>	
					</React.Fragment>
				);
		}
	}
export default App;