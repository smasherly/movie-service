import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li key={page} className="page-item">
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

// <div>
// <nav aria-label="...">
//   <ul class="pagination pagination-lg">
//     <li class="page-item disabled">
//       <a class="page-link" href="#" tabindex="-1">
//         1
//       </a>
//     </li>
//     <li class="page-item">
//       <a class="page-link" href="#">
//         2
//       </a>
//     </li>
//     <li class="page-item">
//       <a class="page-link" href="#">
//         3
//       </a>
//     </li>
//   </ul>
// </nav>
// </div>
