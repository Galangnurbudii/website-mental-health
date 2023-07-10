import {React, useRef} from "react";
import { Head, Link, useForm } from "@inertiajs/react";   
import { Editor } from "@tinymce/tinymce-react";

export default function AdminCreatePsikolog() {
    const editorRef = useRef();

    const { data, setData, post, processing, errors, reset } = useForm({
        judul: "",
        tag: "",
        detail: "",
    });

    function handleSubmit(e) {
        // e.preventDefault();
        // post(route("psikologs.store"));
        console.log(editorRef.current.getContent());
    }

    return (
        <div className="flex flex-col justify-between gap-8 md:gap-12 px-6 pt-20 pb-32 md:px-16 lg:px-20">
            <div className="flex items-center justify-between" style={{fontWeight: 'bold'}}>
                <a className='px-4 py-2 text-sm text-white bg-blue-500 rounded' href={route("artikels.index")}>Back</a>
            </div>

             <form name="createForm" onSubmit={handleSubmit}>
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
                            isFocused={true}
                            value={data.judul}
                            onChange={(e) =>
                                setData("judul", e.target.value)
                            }
                            required
                        />
                        <span className="text-red-600">
                            {errors.judul}
                        </span>
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
                            isFocused={true}
                            value={data.tag}
                            onChange={(e) =>
                                setData("tag", e.target.value)
                            }
                            required
                        />
                        <span className="text-red-600">
                            {errors.tag}
                        </span>
                    </div>
                    <div className="mb-4">
                        <label className="">Detail</label>
                        <Editor 
                            apiKey="fpssdfawcim7qf7tajsnz09q8rvkn6rabb4rohearbc71ea2" 
                            init={{plugins: [
                                "advlist", "autolink", "charmap", "code", "fullscreen", 
                                "help", "image", "insertdatetime", "link", "lists", "media", 
                                "preview", "searchreplace", "table", "visualblocks"
                                ], 
                                toolbar: "undo redo |link image | styles | bold italic underline strikethrough | align | bullist numlist",
                                statusbar: false
                            }}
                            onInit={ (evt, editor) => editorRef.current = editor}
                        />
                        <span className="text-red-600">
                            {errors.tag}
                        </span>
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
    );

}