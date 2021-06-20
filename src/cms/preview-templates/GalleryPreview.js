import React from 'react'
import PropTypes from 'prop-types'
import { GalleryTemplate } from '../../templates/gallery'

const GalleryPreview = ({ entry, widgetFor }) => (
  <GalleryTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

GalleryPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default GalleryPreview
