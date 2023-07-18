import { React, useRef } from 'react'
import { Head, Link, useForm, usePage } from '@inertiajs/react'
import { Editor } from '@tinymce/tinymce-react'

export default function AdminCreatePsikolog() {
    const editorRef = useRef()
    const { artikels } = usePage().props

    const { data, setData, post, processing, errors, reset } = useForm({
        judul: '',
        tag: '',
        detail: '',
        thumbnail: null,
    })

    const _handleEditorChange = (e) => {
        console.log('Content was updated')
        setData({ ...data, detail: e.target.getContent() })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // const detail = editorRef.current.getContent()
        // setData('detail', detail)
        console.log(data)
        post(route('artikels.store'))
    }

    return (
        <div className="flex flex-col justify-between gap-8 md:gap-12 px-6 pt-20 pb-32 md:px-16 lg:px-20">
            <a href={route('artikels.index')}>
                <button className="bg-primary rounded-lg py-1 px-4">
                    Back
                </button>
            </a>

            <form
                name="createForm"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                method="post"
            >
                <div className="flex flex-col">
                    <div className="mb-4">
                        <label className="">Judul</label>
                        <input
                            id="judul"
                            placeholder="Judul"
                            type="text"
                            className="w-full px-4 py-2 rounded-lg"
                            label="judul"
                            name="judul"
                            value={data.judul}
                            onChange={(e) => setData('judul', e.target.value)}
                            required
                        />
                        <span className="text-red-600">{errors.judul}</span>
                    </div>
                    <div className="mb-4">
                        <label className="">Tag</label>
                        <input
                            id="tag"
                            placeholder="Tag"
                            type="text"
                            className="w-full px-4 py-2 rounded-lg"
                            label="tag"
                            name="tag"
                            value={data.tag}
                            onChange={(e) => setData('tag', e.target.value)}
                            required
                        />
                        <span className="text-red-600">{errors.tag}</span>
                    </div>
                    <div className="mb-4">
                        <label className="">Thumbnail</label>
                        <input
                            id="thumbnail"
                            type="file"
                            className="w-full px-4 py-2"
                            label="thumbnail"
                            name="thumbnail"
                            onChange={(e) =>
                                setData('thumbnail', e.target.files[0])
                            }
                            required
                        />
                        <span className="text-red-600">{errors.thumbnail}</span>
                    </div>
                    <div className="mb-4">
                        <label className="">Detail</label>
                        <Editor
                            apiKey="fpssdfawcim7qf7tajsnz09q8rvkn6rabb4rohearbc71ea2"
                            init={{
                                plugins: [
                                    'advlist',
                                    'autolink',
                                    'charmap',
                                    'code',
                                    'fullscreen',
                                    'help',
                                    'image',
                                    'insertdatetime',
                                    'link',
                                    'lists',
                                    'media',
                                    'preview',
                                    'searchreplace',
                                    'table',
                                    'visualblocks',
                                ],
                                toolbar:
                                    'undo redo |link image | styles | bold italic underline strikethrough | align | bullist numlist',
                                statusbar: false,
                                image_title: true,
                                automatic_uploads: true,
                                images_upload_url: '/upload',
                                file_picker_types: 'image',
                                file_picker_callback: function (
                                    cb,
                                    value,
                                    meta
                                ) {
                                    var input = document.createElement('input')
                                    input.setAttribute('type', 'file')
                                    input.setAttribute('accept', 'image/*')
                                    input.onchange = function () {
                                        var file = this.files[0]

                                        var reader = new FileReader()
                                        reader.readAsDataURL(file)
                                        reader.onload = function () {
                                            var id =
                                                'blobid' + new Date().getTime()
                                            var blobCache =
                                                tinymce.activeEditor
                                                    .editorUpload.blobCache
                                            var base64 =
                                                reader.result.split(',')[1]
                                            var blobInfo = blobCache.create(
                                                id,
                                                file,
                                                base64
                                            )
                                            blobCache.add(blobInfo)
                                            cb(blobInfo.blobUri(), {
                                                title: file.name,
                                            })
                                        }
                                    }
                                    input.click()
                                },
                            }}
                            onInit={(evt, editor) =>
                                (editorRef.current = editor)
                            }
                            onChange={_handleEditorChange}
                        />
                        <span className="text-red-600">{errors.tag}</span>
                    </div>
                </div>
                <div className="mt-4">
                    <button
                        type="submit"
                        className="px-6 py-2 font-bold text-white bg-primary rounded"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}
