import dynamic from "next/dynamic";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import Table from "quill-table";
import "quill-table-ui";

// Ensure module isn't registered twice
if (!Quill.imports["modules/table"]) {
  Quill.register("modules/table", Table, true);
}

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    [{ table: true }], // Enable table support
  ],
};

const RichTextEditor = ({ value, onChange }) => {
  return <ReactQuill value={value} onChange={onChange} modules={modules} />;
};

export default RichTextEditor;
