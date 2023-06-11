import React, {Component} from "react";
import Header from "../Components/Header";
import Subjects from "../Components/Subjects";
import { checkAuth, fetchWithAuth, getUserClass, getUserData, getUserSubjects } from "../api";
import styles from "./Homeworks.module.css"
import {nanoid} from 'nanoid';
import { json } from "react-router";
export default class Homeworks extends Component{
    constructor(props) {
        super(props);
        this.state = {
            mysubjects:[],
            myclasses:[],
            currentClass:"",
            classes:[],
            subjectsComp:[],
            buttons:[<div className={styles['subjec-flex-btn']}>
                        <a className={styles['btn-in-profile-1']} href="/addHomework" id="class-btn">Добавить задание<img src="{% static 'my_classes/images/svg/arrow.svg' %}"/></a>
                        {/* <a className={styles['btn-in-profile-1']} id="class-btn">Добавить предмет<img src="{% static 'my_classes/images/svg/arrow.svg' %}"/></a> */}
                    </div>]

        };
		this.getSubjectsByClass = this.getSubjectsByClass.bind(this);
		this.classesToOptions = this.classesToOptions.bind(this);
        this.selectClass = this.selectClass.bind(this);
        this.kostil = this.kostil.bind(this);
        this.renderSubjects = this.renderSubjects.bind(this);
        this.chechRole = this.chechRole.bind(this)
    }
    componentDidMount() {
    getUserSubjects()
    getUserClass().then(()=>{
        this.classesToOptions()
    })
    this.chechRole()
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.currentClass!==this.state.currentClass){
            this.getSubjectsByClass()
        }
        if (prevState.mysubjects!==this.state.mysubjects){
            this.renderSubjects()
        }
    }
    
    chechRole(){
        const a = JSON.parse(localStorage.userData)
        const x = a[0].type_of_user
       
        if (x!=="teacher"){
            this.setState({buttons:<div></div>}
            )}
        
    }
    selectClass(event){
        this.setState({currentClass:event.target.value})
        
    }
    kostil(){
        
    }
    getSubjectsByClass(){
        const subjects = JSON.parse(localStorage.userSubjects)
        const newList = []
        this.setState({mysubjects:[]})
        subjects.forEach(element => {
            if (element.class_id.id==this.state.currentClass){
                newList.push(element)
                this.setState({mysubjects:newList})
                
            }
        })
    }
    classesToOptions(){
        this.setState({classes:JSON.parse(localStorage.userClasses)})
        this.setState({currentClass: JSON.parse(localStorage.userClasses)[0].id.toString()})
        const newList = []
        
        this.state.classes.forEach(element => {
            newList.push(<option value={element.id}>{element.class_name}</option>)
            this.setState({myclasses:[...newList]})
        });
           
    }
    renderSubjects(){
        const newList = []
        console.log(this.state.mysubjects)
        if(this.state.mysubjects.length==0){
            this.setState({subjectsComp:[...newList]})
            return
        }
        this.state.mysubjects.forEach(element => {
            newList.push(<Subjects subject={element} homeworks={element.homeworks} btnid={nanoid()} listid={nanoid()}/>)
            this.setState({subjectsComp: [...newList]})
        });
    }
    render(){
        return( 
            <div>
                <Header/>
                    <div className={[styles["app-container"]]}>
                        <h1>Задания</h1>
                        <div className={styles['class-box']}>
                            <div class="okno">
                                <select value={this.state.currentClass} onChange={this.selectClass}>
                                    {this.state.myclasses}                            
                                </select>
                            </div>
                                {/* <button className={styles['btn-in-profile']} id="class-btn">Класс 4В<img src="{% static 'my_classes/images/svg/arrow.svg' %}"/></button> */}
                        </div>
                        <div>
                            {this.state.subjectsComp}
                        </div>
                        {this.state.buttons}
                    </div>
            </div>
        )
    }
}