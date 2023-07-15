import { React, useRef } from 'react'
import { Head, Link, useForm, usePage } from '@inertiajs/react'
import { Editor } from '@tinymce/tinymce-react'

export default function AdminEditArtikel() {
    const editorRef = useRef()
    const { artikels } = usePage().props

    const { data, setData, post, processing, errors, reset } = useForm({
        judul: artikels.judul ||  '',
        tag: artikels.tag || '',
        detail: artikels.detail || '',
        id_user: artikels.id_user || '',
        thumbnail: null,
    })

    const _handleEditorChange = (e) => {
        console.log('Content was updated')
        setData({ ...data, detail: editorRef.current.getContent() })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // const detail = editorRef.current.getContent()
        // setData('detail', detail)
        console.log(data)
        post(route('updateArtikel', artikels.id))
    }

    return (
        <div className="flex flex-col justify-between gap-8 md:gap-12 px-6 pt-20 pb-32 md:px-16 lg:px-20">
            <a href={route('artikels.index')}>
                <button className="bg-primary text-white rounded py-1 px-4">
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
                            className="w-full px-4 py-2"
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
                            className="w-full px-4 py-2"
                            label="tag"
                            name="tag"
                            value={data.tag}
                            onChange={(e) => setData('tag', e.target.value)}
                            required
                        />
                        <span className="text-red-600">{errors.tag}</span>
                    </div>
                    <div className="mb-4">
                        <label className="">Id user</label>
                        <input
                            id="id_user"
                            placeholder="Id user"
                            type="number"
                            className="w-full px-4 py-2"
                            label="id_user"
                            name="id_user"
                            value={data.id_user}
                            onChange={(e) => setData('id_user', e.target.value)}
                            required
                        />
                        <span className="text-red-600">{errors.id_user}</span>
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
                            value={data.detail}
                            onEditorChange={_handleEditorChange}
                            onInit={(evt, editor) =>
                                (editorRef.current = editor)
                            }
                        />
                        <span className="text-red-600">{errors.tag}</span>
                    </div>
                </div>
                <div className="mt-4">
                    <button
                        type="submit"
                        className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}
