import React, { useState } from "react";

function AddTask ({addTask}) {
  const [content, setContent] = useState("");

  const handleChange = e => { setContent(e.target.value) }

  const handleSubmit = e => {
    e.preventDefault();
    addTask({content});
    setContent("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            type="text"
            onChange={handleChange}
            value={content}
          />
          <label>Task to add</label>
        </div>

        <button
          onClick={handleSubmit}
          className="waves-effect waves-light blue btn"
        >
          <i className="material-icons left">add</i>add
        </button>
      </form>
    </div>
  );

}

export default AddTask;