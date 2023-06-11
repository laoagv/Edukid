import React, {Component} from "react";
import Header from "../Components/Header";
import { checkAuth, fetchWithAuth, getUserClass, getUserData } from "../api";
import Classes from "../Components/Classes";
import "./MyClasses.css"
import {nanoid} from 'nanoid';


export default class MyClasses extends Component{
	constructor(props) {
        super(props);
        this.state = {
          newClass: "",
		  class_list: [],
        };
        this.createNewClass = this.createNewClass.bind(this);
		this.loadingUserClass = this.loadingUserClass.bind(this);
    }
	componentDidMount() {
		this.loadingUserClass()
	  }
    
	loadingUserClass(){
		getUserClass().then(()=>{
			// const newList = [...this.state.class_list]
			const newList = []
			const my_classes = JSON.parse(localStorage.userClasses)
			for (let i =0;i<my_classes.length;i++){
				newList.push(<Classes btnid = {nanoid()} class_name={my_classes[i].class_name} students={my_classes[i].students} class_id={my_classes[i].id}/>)
				this.setState({class_list: [...newList]})
			}
		});
	}
	createNewClass (e){
		e.preventDefault()
        fetchWithAuth("api/v1/Classes/Create/", {
		method:"POST", 
		credentials: "include",
		body: JSON.stringify({
			class_name: this.state.newClass,
		}), 
		headers:{
            "Accept": "application/json",
            "Content-Type": "application/json",}})
			.then((response)=>{
				if (response.status ==201){
					this.loadingUserClass()
					this.setState({newClass: " "})
				}
			})
			
			
		}	
	
    render(){
		
		// async function renderClasses(){
		// 	getUserClass()
		// 	// var my_classes = JSON.parse(localStorage.userClasses)
			
		// 	return res
		// }
        return(  
		<div>
			<Header/>   
			<section>
				<div class="app-container container">
					<h1>Мои классы</h1>
					{this.state.class_list}
					{/* <For each="classs" in my_classes>
						<Classes class_name={classs.class_name} students={classs.students}/>
					</For> */}
					{/* {my_classes.map(classs =>{
						return(<Classes class_name={classs.class_name} students={classs.students}/>)
					})} */}
					<div class="class-box">
						<form class="student-add">
							<button onClick={e=>this.createNewClass(e)} class="btn-in-profile" id="class-btn"><img src="/images/svg/plus.svg"/>Добавить класс</button>
							<input 
								value={this.newClass}
								onChange={e => this.setState({newClass: e.target.value})}
								type="text" 
								placeholder="Название класса"
							/>
						</form>				
					</div>
				</div>
			</section>
		</div>
        )
    }
}