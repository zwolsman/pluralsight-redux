import React from "react";
import { NavLink } from "react-router-dom";

const CourseListRow = ({ course }) => {
  const { watchHref, id, title, authorId, category, length } = course;
  return (
    <tr>
      <td>
        <a href={watchHref} target="_blank" rel="noopener noreferrer">
          Watch
        </a>
      </td>
      <td>
        <NavLink to={`/course/${id}`}>{title}</NavLink>
      </td>
      <td>{authorId}</td>
      <td>{category}</td>
      <td>{length}</td>
    </tr>
  );
};

export default CourseListRow;
