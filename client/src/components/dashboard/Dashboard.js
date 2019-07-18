import React, {Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/authActions'
import { Link } from 'react-router-dom'

class Dashboard extends Component {
    onLogoutClick = e => {
        e.preventDefault()
        logoutUser()
    }

    render() {
        console.log(this.props.state)
         
        const user = this.props.user

        return (
            
            <div style={{ height: "75vh" }} className="container
            valign-wrapper">
                <div className="row">
                    <div className="col s12 center-align">
                        <h4>
                            {/* <b>Hey there,</b> {user.name.split(" ")[0]} */}
                            <p className="flow-text grey-text text-darken-1">
                                You are logged into the Staff portal{" "}
                                <span style={{ fontFamily: "monospace"
                                 }}>MERN</span> app :)
                            </p>
                        </h4>
                        <button
                        style={{
                            width: "150px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px",
                            marginTop: "1rem"
                        }}
                        onClick={this.onLogoutClick}
                        className="btn btn-large waves-effect waves-light 
                        hoverable blue accent-3">
                            <Link
                                to="/register">Logout</Link>
                            
                        </button>
                    </div>
                </div>
            </div>
        )
                    
    }
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func,
    auth: PropTypes.object
}

const mapStateToProps = state => ({
    // state: state,
    auth: state
    // user: state.user
})

export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard)