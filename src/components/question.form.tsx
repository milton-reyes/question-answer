import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const ClassicEditor = require('@ckeditor/ckeditor5-build-classic')
const CKEditor = require('@ckeditor/ckeditor5-react')

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
                            {/* <textarea  className="form-control" required /> */}
                            
                            <CKEditor
                                editor={ClassicEditor}
                                data="<p>Hello from CKEditor 5!</p>"
                                onInit={(editor:any) => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log('Editor is ready to use!', editor);
                                }}
                                onChange={(event:any, editor:any) => {
                                    const data = editor.getData();
                                    console.log({ event, editor, data });
                                }}
                                onBlur={(event:any, editor:any) => {
                                    console.log('Blur.', editor);
                                }}
                                onFocus={(event:any, editor:any) => {
                                    console.log('Focus.', editor);
                                }}
                            />
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
