import React, {Component} from 'react';

class QuestionForm extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div className="question-form">
                <h1 className="form-title">Ask The Magic 8 Ball A Yes/ No Question</h1>
                <form className="form" onSubmit={this.props.handleSubmit}>
                    {/* <button className="voice__button">
                        <img src={require('../images/micro.png')} alt="micro"/>
                    </button> */}
                    <div className="input-group">
                        <h3 className="render-question">{this.props.input}</h3>
                        <input 
                            type="text"
                            value={this.props.input}
                            onChange={this.props.handleChange}
                            className="question__input"
                        />
                        <button type="submit" className="submit__button">Ask</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default QuestionForm;