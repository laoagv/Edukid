import React, {Component} from "react";
import Header from "../Components/Header";
import { checkAuth, fetchWithAuth, getUserData } from "../api";
import "./Stufentbox.css"
import styles from "../Pages/Homeworks.module.css"
export default class Homework extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
        };
		
    }
    render(){
        return( 
            <li>
                <a href={"Homewo/"+this.props.homework.id}>{this.props.homework.name}</a>
            </li>
        )
    }
}
// className={styles['dropdown-menu']}