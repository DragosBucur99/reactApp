export default function EditState({ editState }) {
  return (
    <div style={{ display: editState ? "" : "none" }}>
      <button
        type="submit"
        form="edit-form"
        // onClick={(e) => e.preventDefault()}
      >
        Edit
      </button>
    </div>
  );
}
