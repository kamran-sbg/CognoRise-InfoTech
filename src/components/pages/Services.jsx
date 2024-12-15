import { useState } from "react";

export const Services = ({ value }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, description }]);
    setTitle("");
    setDescription("");
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let renderTasks = <h2 className="mx-auto text-center">No Task Available</h2>;
  if (mainTask.length > 0) {
    renderTasks = mainTask.map((t, i) => (
      <li key={i} className="font-bold ms-3 text-lg">
        <div className="flex justify-between items-center">
          <h5 className="font-bold text-lg capitalize">{t.title}</h5>
          <h6 className="font-bold text-md uppercase">{t.description}</h6>
          <button
            onClick={() => deleteHandler(i)}
            className="bg-red-500 text-white rounded-md px-3 m-2 py-1"
          >
            Delete
          </button>
        </div>
      </li>
    ));
  }

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={submitHandler}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            className="border-3 border-black rounded-full p-2"
            placeholder="Enter Your Todo"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="border-3 border-black rounded-full p-2"
            placeholder="Enter The Description"
            value={description}
            required
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="bg-yellow-500 text-white rounded-md py-2">
            Add Todo
          </button>
        </div>
      </form>
      <div className="bg-transparent text-black p-2 m-3">
        <ol>{renderTasks}</ol>
      </div>
    </div>
  );
};
