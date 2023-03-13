import React, { useState, Component } from 'react';
class ClassButton extends React.Component{
    constructor(props){
        super(props);
        this.expandClass = this.expandClass.bind(this)
        this.state = {
            classId : this.props.btn.classId 
        }
    }
    expandClass() {
        const classId = this.props.btn.classId
        document.getElementById(classId).classList.toggle("active")
        };
    render() {
        return(
            <div className="class-box" id={this.props.btn.classId}>
                <button onClick={this.expandClass} className="btn-in-profile">{this.props.btn.nameOfClass}<img class="arrow-img" src="images/svg/arrow.svg"/></button>
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
							<button class="btn-in-profile"><img class="plus-img" src="/images/svg/plus.svg"/>Добавить</button>
						</div>
				</div>
            </div>
        )
    }
} 
export default ClassButton;