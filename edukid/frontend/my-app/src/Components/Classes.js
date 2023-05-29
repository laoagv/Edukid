import React, {Component} from "react";
import Header from "../Components/Header";
import { checkAuth, fetchWithAuth, getUserData } from "../api";

export default class Classes extends Component{
    render(){
        return( 
                <div class="class-box">
					<button class="btn-in-profile" id="class-btn">Класс 4В<img src="{% static 'my_classes/images/svg/arrow.svg' %}"/></button>
					<div class="profile-box">
						<div class="student-box">
							<div class="student-img">
								<img src="{% static 'my_classes/images/jpg/profile-img-ex.jpg' %}"/>
							</div>
							<div class="student-name">Петрова Александра</div>
							<div class="student-delete">
								<img src="{% static 'my_classes/images/svg/delete.svg' %}"/>
							</div>
						</div>
						<div class="student-box">
							<div class="student-img">
								<img src="{% static 'my_classes/images/jpg/profile-img-ex.jpg' %}"/>
							</div>
							<div class="student-name">Петрова Александра</div>
							<div class="student-delete">
								<img src="{% static 'my_classes/images/svg/delete.svg' %}"/>
							</div>
						</div>
						<div class="student-box">
							<div class="student-img">
								<img src="{% static 'my_classes/images/jpg/profile-img-ex.jpg' %}"/>
							</div>
							<div class="student-name">Петрова Александра</div>
							<div class="student-delete">
								<img src="{% static 'my_classes/images/svg/delete.svg' %}"/>
							</div>
						</div>
						<div class="student-add">
							<span>Добавить ученика:</span>
							<input type="text" name="" title="Введите код ребенка"/>
							<button class="btn-in-profile"><img class="plus-img" src="{% static 'my_classes/images/svg/plus.svg' %}"/>Добавить</button>
						</div>
					</div>
				</div>   
        )
    }
}