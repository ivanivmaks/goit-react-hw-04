import css from "./SearchBar.module.css";
import toast from "react-hot-toast";
import { Formik, Form, Field } from "formik";

const initialValues = {
  topic: "",
};

export default function SearchBar({ onSearch }) {
  const handleSearch = (values) => {
    onSearch(values.topic);

     if (values.topic.trim() === "") {
       toast.error("Please enter a search term!");
       return;
     }
  };

  
  return (
    <header className={css.header}>
      <Formik initialValues={initialValues} onSubmit={handleSearch}>
        <Form className={css.form}>
          <Field  
            type="text"
            name="topic"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={css.input}
          />
          <button className={css.searchBtn} type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
}
