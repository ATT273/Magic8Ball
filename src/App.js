import React, {Component} from 'react';
import Ball from './components/Ball';
import QuestionForm from './components/QuestionForm';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			input: '',
			question: '',
			randomIndex: '',
			opacity: 1,
			imgOpacity: 0
		}
		
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.reset = this.reset.bind(this);
	}

	handleSubmit (e, state) {
		e.preventDefault();
		if(this.state.input !== '') {
			this.setState({
				question: this.state.input,
				randomIndex: Math.floor(Math.random() * (4 - 0 + 1)) + 0,
				opacity: 0,
				imgOpacity: 1
			});
		} else {
			return
		}
		
	}

	handleChange (e) {
		this.setState({
			input: e.target.value
		});
	}

	reset () {
		this.setState({
			question: '',
			input: '',
			opacity: 1,
			imgOpacity: 0
		});
	}
	render () {
		const answer = [
			"ans1.png",
			"ans2.png",
			"ans3.png",
			"ans4.png",
			"ans5.png",
		];
		return (
			<div className="App">
				<Ball
				question={this.state.question}
				answer={answer[this.state.randomIndex]}
				opacity={this.state.opacity}
				imgOpacity={this.state.imgOpacity}
				/>

				{this.state.question === '' ?
					<QuestionForm
					handleSubmit={this.handleSubmit}
					input={this.state.input}
					handleChange={this.handleChange}
					/>
					: <button 
					className="reset__button"
					onClick={this.reset}
					>Ask Again!
					</button>
				}
				</div>
		);
	}
  
}

export default App;
