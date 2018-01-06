import React,{Component, PropTypes} from 'react';
import Header from './common/Header';

class App extends Component{
	render(){
		return(
			<div className='container-fluid'>
				<Header/>
				{this.props.children}
			</div>
		)
	}
}

App.propsTypes = {
	children: PropTypes.object.isRequired
}

export default App;