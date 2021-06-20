import React from 'react'
import PropTypes from 'prop-types'
import { MeetTheOwnerTemplate } from '../../templates/meet-the-owner'

const MeetTheOwnerPreview = ({ entry, widgetFor }) => (
  <MeetTheOwnerTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

MeetTheOwnerPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default MeetTheOwnerPreview
