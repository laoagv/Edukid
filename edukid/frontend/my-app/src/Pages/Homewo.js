import React, {Component} from "react";
import Header from "../Components/Header";
import { checkAuth, fetchWithAuth, getUserClass, getUserData, getUserHomeworks, getUserSubjects } from "../api";
import styles from "./Homeworks.module.css"
import {nanoid} from 'nanoid';
import { useParams } from "react-router-dom";

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}
class Homewo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            homework_id:"",
            currentHome:"",
            buttons:[<button className={styles['addAnswer']} id="class-btn">Добавить решение<img src="{% static 'my_classes/images/svg/arrow.svg' %}"/></button>]
        };
        this.setCurentHome = this.setCurentHome.bind(this)
        this.chechRole = this.chechRole.bind(this)
		
    }
    componentDidMount() {
    this.chechRole()
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
    chechRole(){
        const a = JSON.parse(localStorage.userData)
        const x = a[0].type_of_user
       
        if (x!=="pupil"){
            this.setState({buttons:<div></div>}
            )}
        
    }
    
    
    setCurentHome = ()=>{
        const homeworks = JSON.parse(localStorage.userHomeworks)
        homeworks.forEach(element => {
            if (element.id.toString()==this.state.homework_id){
                this.setState({currentHome: element})
            }
        });
    }
    
    
    render(){
        return( 
            <div>
                <Header/>
                <div className={[styles["app-container"]]}>
                        <h1>Задание </h1>
                        <div className={styles['class-box']}>
                            <div className={styles.homework_container}>
                                <h2>{this.state.currentHome.name}</h2>
                                {this.state.currentHome.text}
                                
                            </div>
                            <div>
                                {this.state.buttons}
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
            </div>
        )
    }
}
export default withParams(Homewo)