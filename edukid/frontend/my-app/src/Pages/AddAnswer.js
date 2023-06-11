import React, {Component} from "react";
import Header from "../Components/Header";
import { getUserHomeworks, fetchWithAuth, getUserClass, getUserData, getUserSubjects } from "../api";
import styles from "./AddHomework.module.css"
import { useParams } from "react-router-dom";
import { server } from "../server";

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}
class AddAnswer extends Component{
    constructor(props) {
        super(props);
        this.state = {
        
		  formvalues: {
            text:"",
            
          },
        homework_id:"",
        currentHome:"",
          
        };
		this.changeInputRegister = this.changeInputRegister.bind(this);
        this.submitChackin = this.submitChackin.bind(this)
        this.setCurentHome = this.setCurentHome.bind(this)


    }
    componentDidMount() {
        getUserHomeworks()
        getUserSubjects()
        let { id } = this.props.params;
        this.setState({homework_id: id})
        }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.homework_id!==this.state.homework_id){
            this.setCurentHome()
        }
    }
    setCurentHome = ()=>{
        const homeworks = JSON.parse(localStorage.userHomeworks)
        homeworks.forEach(element => {
            if (element.id.toString()==this.state.homework_id){
                this.setState({currentHome: element})
            }
        });
    }
    changeInputRegister (event){
        event.persist()

        this.setState({formvalues:{...this.state.formvalues, [event.target.name]: event.target.value}})
        
        }
    submitChackin =event =>{
        console.log(this.state.subject_id)
        event.preventDefault()
        fetchWithAuth("api/v1/Answer/Create/",{
            method:"POST",
            credentials:"include",
            body: JSON.stringify({
                text: this.state.formvalues.text,
                homework: this.state.currentHome.id,
            }),
            headers:{
                "Accept": "application/json",
                "Content-Type": "application/json",}.then(res => {
                    console.log(res)
                    if (res.statusText === 'Created') {
                        window.location.href = server+"/homeworks"
                    } })

        })
    }
        

    render(){
        return( 
        <div>
            <Header></Header>
            <section>
                <div className={styles.container}>
                <h1>{this.state.currentHome.name}</h1>

                    <div className={styles.app_container_back}>
                        <div className={[styles.app_container]}>
                                <div id="registration-form"  className={[styles.flex_column]}  >
                                    
                                    <div className={[styles.flex_row]}>
                                        <div className={styles.input_title}>
                                            <span>Задание</span>
                                        </div>
                                        <textarea value={this.state.formvalues.text} name="text"onChange={this.changeInputRegister} cols="53" rows="9" maxlength="300" title="Введите задание"></textarea>
                                        <div className={[styles.flex_row]}>
                                            <div>
                                                <button className={styles.button} onClick={this.submitChackin}>добавить</button>
                                            </div>  
                                            <div>
                                                <button className={styles.button}>отменить</button>
                                            </div>
                                        </div>
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
export default withParams(AddAnswer)