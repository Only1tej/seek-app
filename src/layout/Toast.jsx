import React from 'react'

function Toast() {
    return (
        <div className="toast toast-top toast-center">
            <div className="alert alert-info">
                <div>
                    <span>New mail arrived.</span>
                </div>
            </div>
            <div className="alert alert-success">
                <div>
                    <span>Message sent successfully.</span>
                </div>
            </div>
        </div>
    )
}

export default Toast