import React from 'react'
import PropTypes from 'prop-types'
import { ScholarOppTemplate } from '../../templates/scholar-opp'

const ScholarOppPreview = ({ entry, widgetFor }) => (
  <ScholarOppTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

ScholarOppPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ScholarOppPreview
