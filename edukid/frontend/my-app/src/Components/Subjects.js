import React, {Component} from "react";
import Header from "../Components/Header";
import { checkAuth, fetchWithAuth, getUserData } from "../api";
import "./Stufentbox.css"
import styles from "../Pages/Homeworks.module.css"
import Homework from "./Homework"
export default class Subjects extends Component{

    constructor(props) {
        super(props);
        this.state = {
            homeworks:[]
        };
        this.renderHomeworks = this.renderHomeworks.bind(this)
		// this.onClicBtn = this.onClicBtn.bind(this)
    }
    
    componentDidMount() {
        this.renderHomeworks();
    }
    renderHomeworks(){
        const newList = []
        this.props.homeworks.forEach(element => {
            newList.push(<Homework homework={element} subject_id={this.props.subject.id}></Homework>)
            this.setState({homeworks:[...newList]})
        });
        console.log(this.state.homeworks)
    }
    
    onClicBtn = () =>{
        var btn = document.getElementById(this.props.btnid);
        var btn1 = document.getElementById(this.props.listid)
        
        btn1.classList.toggle('show')
            
        
    }
    render(){
        return( 
            <div className={styles['subjec-flex']}>
                {/* <div className={styles['styles.subjec']}> */}
                    <div className={styles['sub-items']}>
                        <div className={styles['profile-box']}>
                            <div className={styles['title-sub']}>
                                {this.props.subject.title}
                                {/* <button id={this.props.btnid} className={styles['dropdown-toggle']} onClick={this.onClicBtn} data-easy-toggle="#dropdown" data-easy-class="show" data-easy-rcoe>к</button> */}
                            </div>
                            <div id={this.props.listid} className={styles['dropdown-menu']}>
                                {this.state.homeworks}
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        )
    }
}
// className={styles['dropdown-menu']}