import React from 'react'
import PropTypes from "prop-types"

const MessageHistory = ({ msg }) => {
    if(!msg) return null;

    return msg.map((row, i) => (
      <div key={i} className='message__history mt-3'>
        <div className='send text-weight-bold text-secondary'>
          <div className='sender'>{row.sender}</div>
          <div className='date'>
            {row.msgAt && new Date(row.msgAt).toLocaleString()}
          </div>
        </div>
        <div className='message'>{row.message}</div>
      </div>
    ));
}

export default MessageHistory
MessageHistory.propTypes = {
    msg: PropTypes.array.isRequired,
}