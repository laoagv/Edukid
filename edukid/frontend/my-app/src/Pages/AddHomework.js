import React, {Component} from "react";
import Header from "../Components/Header";
import { checkAuth, fetchWithAuth, getUserClass, getUserData, getUserSubjects } from "../api";
import styles from "./AddHomework.module.css"
export default class AddHomework extends Component{
    constructor(props) {
        super(props);
        this.state = {
        
		  formvalues: {
            text:"",
            deadline:"",
            subject:"",
            name:"",
            class_id:"",
          },
          
            mysubjects:[],
            myclasses:[],
            subject_id:""
          
        };
		this.changeInputRegister = this.changeInputRegister.bind(this);
        this.submitChackin = this.submitChackin.bind(this)
        this.loadOptions = this.loadOptions.bind(this)
        // this.getClassId = this.getClassId.bind(this)
        this.getSubjectId = this.getSubjectId.bind(this)

    }
    componentDidMount() {
    getUserClass()
    getUserSubjects().then(()=>{
        this.loadOptions()
    })
    }
    loadOptions(){
        const subjects = JSON.parse(localStorage.userSubjects) 
        const kosil1 = []
        subjects.forEach(element => {
            kosil1.push(<option value={element.title}></option>)
            this.setState({mysubjects:[...kosil1]})

        });
        const classes = JSON.parse(localStorage.userClasses) 
        const kosil2 = []
        classes.forEach(element2 => {
            kosil2.push(<option value={element2.class_name}></option>)
            this.setState({myclasses:[...kosil2]})


        });
       
        console.log(this.state.mysubjects)
        console.log(this.state.myclasses)
        // this.setState({mysubjects : [...kosil1], 
        // myclasses : JSON.parse(localStorage.userClasses)
        // })

    }
    // getClassId(some){
    //     const classes = JSON.parse(localStorage.userClasses) 

    //     subjects.forEach(element => {
    //         if(element.name == some){
    //             return element.id
    //         }
    //     });
    // }
    getSubjectId(){
        const subjects = JSON.parse(localStorage.userSubjects) 
        subjects.forEach(element => {
            if(element.title == this.state.formvalues.subject && element.class_id.class_name==this.state.formvalues.class_id){
                this.setState({subject_id:element.id}) 
                return
            }
        });
    }
    changeInputRegister (event){
        event.persist()

        this.setState({formvalues:{...this.state.formvalues, [event.target.name]: event.target.value}}, (()=>{
            this.getSubjectId()
        }))
        
        }
    submitChackin =event =>{
        console.log(this.state.subject_id)
        event.preventDefault()
        fetchWithAuth("api/v1/Homework/Create/",{
            method:"POST",
            credentials:"include",
            body: JSON.stringify({
                name: this.state.formvalues.name,
                text: this.state.formvalues.text,
                deadline: this.state.formvalues.deadline,
                subject_id: this.state.subject_id,
            }),
            headers:{
                "Accept": "application/json",
                "Content-Type": "application/json",}
        })
    }
        

    render(){
        return( 
        <div>
            <Header></Header>
            <section>
                <div className={styles.container}>
                <h1>Добавить задание</h1>

                    <div className={styles.app_container_back}>
                        <div className={[styles.app_container]}>
                                <div id="registration-form" class=""  className={[styles.flex_column]}  >
                                    <div className={[styles.flex_row]}>
                                        <div className={[styles.flex ]}>
                                            <input  value={this.state.formvalues.name} name="name"onChange={this.changeInputRegister} type="text" placeholder="Название" className={[styles.input_name, styles.flex_grow]}/>
                                        </div>
                                        <div>
                                            <button onClick={this.submitChackin}>добавить</button>
                                        </div>
                                        <div>
                                            <button>отменить</button>
                                        </div>
                                    </div>
                                    <div className={[styles.flex_row]}>
                                        <div className={styles.input_title}>
                                            <span>Задание</span>
                                        </div>
                                        <textarea value={this.state.formvalues.text} name="text"onChange={this.changeInputRegister} cols="53" rows="9" maxlength="300" title="Введите задание"></textarea>
                                    </div>
                                    <div className={[styles.flex_row]}>
                                        <div className={styles.input_title}>
                                            <span>Дата выполнения</span>
                                        </div>
                                        <input value={this.state.formvalues.deadline} name="deadline"onChange={this.changeInputRegister} class="date" type="date"/>
                                    </div>
                                    <div className={[styles.flex_row]}>
                                        <div className={styles.input_title}>
                                            <span>Предмет</span>
                                        </div>
                                        <input value={this.state.formvalues.subject} name="subject"onChange={this.changeInputRegister}  list="discipline3" id="disciplinetwo" placeholder="Введите дисциплину">
                                        
                                        </input>
                                        
                                        <datalist id="discipline3">
                                            {this.state.mysubjects}
                                            {/* {this.state.options.mysubjects.map(subject =>{
                                                    return(<option value={subject.title}></option>)
                                                })} */}
                                        </datalist>
                                    </div>
                                    <div className={[styles.flex_row]}>
                                        <div className={styles.input_title}>
                                            <span>Кому задать?</span>
                                        </div>
                                        <input value={this.state.formvalues.class_id} name="class_id"onChange={this.changeInputRegister} list="disciplinethree" id="disciplinex" placeholder="Выберите класс">
                                        </input>
                                            <datalist id="disciplinethree">
                                                {this.state.myclasses}
                                            </datalist>
                                    </div>
                                    
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        )
    }
}