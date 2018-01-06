import React,{Component} from 'react';

class CoursesPage extends Component{
	constructor(props,context){
		super(props,context)
		this.state = {
			course: {title:""}
		}
	}

	onTitleChange(ev){
		const course = this.state.course;
		course.title = ev.target.value;
		this.setState({course})
	}

	onClickSave(ev){
		alert('save ')
	}

	render(){
		return(
			<div>
				<h1>Course</h1>
				<h2>Add Course</h2>
				<input type='text'
					onChange={this.onTitleChange.bind(this)}
					value={this.state.course.title} />
				<input 
					type='submit'
					value='Save'
					onClick={this.onClickSave} />
			</div>
		)
	}
}

export default CoursesPage;