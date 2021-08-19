
import React from 'react'


class AddStudent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            age: "",
            profileImg: ""
        }
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        this.props.addStudentHandler(this.state)
        this.setState({
            name: "",
            age: "",
            profileImg: ""
        })
    }

    render() {
        return (
            <section>
                <form onSubmit= {this.handleFormSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={(e) => this.handleInputChange(e)}
                        />
                    </label>

                    <label>
                        Age:
                        <input
                            type="number"
                            min="12"
                            max="100"
                            name="age"
                            value={this.state.age}
                            onChange={(e) => this.handleInputChange(e)}
                        />
                    </label>

                    <label>
                        Profile Image:
                        <input
                            type="text"
                            name="profileImg"
                            value={this.state.profileImg}
                            onChange={(e) => this.handleInputChange(e)}
                        />
                    </label>
                    <button> Submit </button>
                </form>

            </section>
        );
    }

}




export default AddStudent;