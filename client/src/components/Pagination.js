import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { angleLeft } from "react-icons-kit/fa/angleLeft";
import { angleRight } from "react-icons-kit/fa/angleRight";

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
      const isActive = i === page;
      const style = isActive
        ? {
            backgroundColor: "var(--richblack-bg)",
            color: "white",
            transition: "0.3s ease-in-out",
          }
        : null;
      numbers.push(
        <NumberButtons key={i} onClick={() => handleClick(i)} style={style}>
          {i}
        </NumberButtons>
      );
    }
    return numbers;
  };
  return (
    <Div>
      <ArrowButtons onClick={handlePrev} disabled={page === 1}>
        <Icon icon={angleLeft} />
      </ArrowButtons>
      <NumContainer>{renderNumbers()}</NumContainer>
      <ArrowButtons onClick={handleNext} disabled={page === totalPages}>
        <Icon icon={angleRight} />
      </ArrowButtons>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  padding-bottom: 50px;
  padding-top: 30px;
`;

const ArrowButtons = styled.button`
  border-radius: 50%;
  background: none;
  color: inherit;
  border: none;
  font-size: 2rem;
  cursor: pointer;
`;

const NumContainer = styled.div`
  padding-left: 5px;
  padding-right: 5px;
  display: flex;
  gap: 10px;
`;
const NumberButtons = styled.button`
  border-radius: 10%;
  border: none;
  padding: 13px;
  cursor: pointer;
`;

export default Pagination;
