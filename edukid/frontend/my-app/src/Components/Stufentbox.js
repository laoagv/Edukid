import React, {Component} from "react";
import Header from "../Components/Header";
import { checkAuth, fetchWithAuth, getUserData } from "../api";

export default class Stufentbox extends Component{
    render(){
        return( 
            <div class="student-box">
				<div class="student-img">
					<img src="{% static 'my_classes/images/jpg/profile-img-ex.jpg' %}"/>
				</div>
				<div class="student-name">Петрова Александра</div>
				<div class="student-delete">
					<img src="{% static 'my_classes/images/svg/delete.svg' %}"/>
				</div>
			</div>
        )
    }
}