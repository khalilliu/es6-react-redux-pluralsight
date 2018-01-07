import React,{Component} from 'react';
import CourseListView from './CourseListView';

const CourseList = ({courses}) => {
	return(
		<table className='table'>
			<thead>
				<tr>
					<th>&nbsp;</th>
					<th>Title</th>
					<th>Author</th>
					<th>Category</th>
					<th>Length</th>
				</tr>
			</thead>
			<tbody>
				{courses.map(course=>(<CourseListView key={course.id} course={course} />))}
			</tbody>
		</table>
	)
} 

export default CourseList;