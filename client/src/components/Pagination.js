import styled from "styled-components";

const Pagination = ({ page, setPage, totalPages }) => {
  // 1- first handle the logic when clicking
  const handleClick = (event) => {
    setPage(event);
  };

  // 2- handle the previous click:
  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  // 3- handle the next click:
  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  // now we want to display a list of number in between prev and next:
  const renderNumbers = () => {
    const numbers = [];

    for (let i = 1; i <= totalPages; i++) {
      numbers.push(
        <button key={i} onClick={() => handleClick(i)}>
          {i}
        </button>
      );
    }
    return numbers;
  };
  return (
    <div>
      <button onClick={handlePrev} disabled={page === 1}>
        prev
      </button>
      {renderNumbers()}
      <button onClick={handleNext} disabled={page === 20}>
        next
      </button>
    </div>
  );
};

export default Pagination;
