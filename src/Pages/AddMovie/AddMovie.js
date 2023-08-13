import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../Context/dataContext";
import "./AddMovie.css";
export const AddMovie = () => {
  const {
    dataState: { movies },
    dispatchData,
  } = useData();
  const navigate = useNavigate();

  const formRef = useRef(null);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const formdata = new FormData(formRef.current);
    const obj = {};
    for (const [key, value] of formdata.entries()) {
      if (key === "genre" || key === "cast") {
        obj[key] = value.split(",");
      } else {
        obj[key] = value;
      }
    }
    dispatchData({
      type: "ADD_MOVIE",
      payload: { id: movies.length + 1, ...obj },
    });
    navigate("/");
  };

  return (
    <>
      <h3>Add Movies</h3>
      <form className="form" ref={formRef} onSubmit={formSubmitHandler}>
        <input name="title" type="text" placeholder="Title" required />

        <textarea name="summary" placeholder="Summary" required />

        <input name="year" type="number" placeholder="Release Year" required />

        <input name="rating" type="number" placeholder="Rating" required />

        <input
          name="cast"
          type="text"
          placeholder="Cast , comma seperated"
          required
        />

        <input
          name="genre"
          type="text"
          placeholder="Genre , comma seperated"
          required
        />

        <input
          name="writer"
          type="text"
          placeholder="Writer , comma seperated"
          required
        />

        <input name="Director" type="text" placeholder="Director" required />

        <input name="imageURL" type="url" placeholder="Image Url" required />

        <button type="submit">Add Movie</button>
      </form>
    </>
  );
};
