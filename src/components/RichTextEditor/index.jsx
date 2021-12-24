import * as Styled from './style'
import React from 'react'
import ReactQuill, { Quill } from 'react-quill'
import * as Emoji from 'quill-emoji'
import ImageResize from 'quill-image-resize-module-react'
import 'react-quill/dist/quill.snow.css'
import 'quill-emoji/dist/quill-emoji.css'

Quill.register('modules/imageResize', ImageResize)
Quill.register('modules/emoji', Emoji)

const TOOLBAR_OPTIONS = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['bold', 'italic', 'underline'],
    [{ color: [] }],
    [{ align: [] }],
    ['image', 'emoji'],
]
const RichEditor = ({ value, set }) => {
    return (
        <Styled.RichEditor>
            <ReactQuill
                value={value}
                onChange={set}
                modules={{
                    imageResize: {
                        // parchment: Quill.import('parchment'),
                        modules: ['Resize', 'DisplaySize'],
                    },
                    toolbar: {
                        container: TOOLBAR_OPTIONS,
                    },
                    'emoji-toolbar': true,
                    'emoji-textarea': false,
                    'emoji-shortname': true,
                }}
            />
        </Styled.RichEditor>
    )
}

export default RichEditor
