const DeleteTodo = ({
  todo,
  onDelete,
  isEditing,
  onEdit,
  onSave,
  onCancel,
}) => {
  return (
    <>
      <div className="todo-actions">
        {isEditing ? (
          <>
            <button className="save-btn" onClick={onSave}>
              Save
            </button>
            <button className="cancel-btn" onClick={onCancel}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <button className="delete-btn" onClick={() => onDelete(todo.id)}>
              Delete Todo
            </button>
            <button className="edit-btn" onClick={onEdit}>
              Edit Todo{" "}
            </button>
          </>
        )}
      </div>
    </>
  );
};
export default DeleteTodo;
