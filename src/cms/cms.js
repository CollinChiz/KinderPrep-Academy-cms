import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
// import BlogPostPreview from './preview-templates/BlogPostPreview'
import MeetTheOwnerPreview from './preview-templates/MeetTheOwnerPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import GalleryPreview from './preview-templates/GalleryPreview'
import ScholarOppPreview from './preview-templates/ScholarOppPreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('meet', MeetTheOwnerPreview)
CMS.registerPreviewTemplate('gallery',GalleryPreview)
CMS.registerPreviewTemplate('scholar',ScholarOppPreview)
// CMS.registerPreviewTemplate('blog', BlogPostPreview)
