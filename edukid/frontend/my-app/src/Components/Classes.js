import React, {Component, useState} from "react";
import Header from "../Components/Header";
import { checkAuth, fetchWithAuth, getUserData } from "../api";
import Stufentbox from "./Stufentbox";

export default class Classes extends Component{
    constructor(props) {
        super(props);
        this.state = {
          newStudent: "",
          students: this.props.students,
          students_components: []
        };
        this.createNewStudent = this.createNewStudent.bind(this);
        this.loadingStudents = this.loadingStudents.bind(this)
    }
    componentDidMount() {
		this.loadingStudents()
        
	  }
    async createNewStudent(e){
        // fetchWithAuth("api/v1/Classes/Create/", {method:"POST", body:{"class_name":this.newClass}})
        e.preventDefault()
        fetchWithAuth("api/v1/Classes/"+this.props.class_id+"/", {
		method:"PATCH", 
		credentials: "include",
		body: JSON.stringify({
			student_id: this.state.newStudent,
		}), 
		headers:{
            "Accept": "application/json",
            "Content-Type": "application/json",}})
			.then((response)=>{
				if (response.status ==201){
                    return response.json()

				}
                
            }
			).then((data)=>{
                
                this.setState({students:[...data.students]}, ()=>{
                    this.loadingStudents()
                })
            })
            
            
            
            
			
			
		}
    loadingStudents(){
            const newList = []
            console.log(this.state.students)
			const my_students = [...this.state.students]
			for (let i =0;i<my_students.length;i++){
				newList.push(<Stufentbox name={my_students[i].name} surname={my_students[i].surname}/>)
				this.setState({students_components: [...newList]})
			}
    }
    
    render(){
        function onButton (e){
            let box = e.target
            let x = box.parentNode
            x.classList.toggle("active")
        }
        return( 
                <div class="class-box" id={this.props.btnid}>
					<button class="btn-in-profile" onClick={onButton} id="class-btn">Класс {this.props.class_name}<img src="{% static 'my_classes/images/svg/arrow.svg' %}"/></button>
					<div class="profile-box">
						{this.state.students_components}
					</div>
                   <form class="student-add">
         		    	<button onClick={e=>this.createNewStudent(e)} class="btn-in-profile" id="class-btn"><img src="/images/svg/plus.svg"/>Добавить ученика:</button>
                         <input 
                            type="text" 
                            value = {this.newStudent} 
                            onChange={e => this.setState({newStudent:e.target.value})} 
                            name="" 
                            title="id ученика"
                        />
          			</form>	
	    	    		
				</div>   
        )
    }
}