import React from 'react'
import { TagCloud } from 'react-tagcloud'

import {
  AbsoluteCenterContainer,
  StyledTag
} from '../styles/OrgPresentation.js'

const data = [
  { value: '"สวัสดีครับอาจารย์"', count: 30 },
  { value: '"อาจารย์ที่คณะใจดีไหมครับ"', count: 28 },
  // { value: '"อาหารอะไรที่อร่อยที่สุด"', count: 25 },
  // { value: '"มีแฟนตอนเรียน ดูแลยังไงดีครับ"', count: 30 },
  // { value: '"มีแฟนตอนเรียน! ดูแลยังไงดีครับ?"', count: 32 }
]

const TagCloudAbsolute = AbsoluteCenterContainer(TagCloud)

const Tag = (tag, size, color) => (
  <StyledTag
    key={tag.value}
    size={size}
  >
    {tag.value}
  </StyledTag>
)

const OrgPresentation = props => {
  return (
    <div>
      <div className="container-fluid" style={{ height: '100vh' }}>
        <TagCloudAbsolute
          className="text-center"
          minSize={28}
          maxSize={48}
          tags={data}
          renderer={Tag}
        />
      </div>
    </div>
  )
}

export default OrgPresentation
