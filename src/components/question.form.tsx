import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


const QuestionFormComponent: React.FC = () => {

    return (

        <div className="questionForm">
            <div className="container">
                <div className="wrapper">
                    <form className="form-group">
                        <div className="form-group">
                            <label>Question</label>
                            <input type="text" name="question" placeholder="Question?" className="form-control" required />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" required />
                        </div>
                        <div className="form-group">
                            <input type="submit" name="submit" className="btn btn-secondary" required />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default QuestionFormComponent
