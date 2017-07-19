import React, {PropTypes} from 'react';

class App extends React.component{
	render(){
		<div className="container-fluid">
			<h3>Header will come here </h3>
			{this.props.children}
		</div>
	}
};

export default App;