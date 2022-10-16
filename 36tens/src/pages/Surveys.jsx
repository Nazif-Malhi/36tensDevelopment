import React from "react";
import styled from "styled-components";

const SurveyWrapper = styled.div`
  height: 100vh;
  background-color: #f7f8fa;
  .conati {
    display: flex;
    height: calc(100% - 70px);
  }
`;
const SurveyContainer = styled.div`
  width: 20px;
  height: 40px;
  background: red;
`;
const Surveys = () => {
  return (
    <SurveyWrapper>
      <div className="conati">
        <SurveyContainer />
      </div>
    </SurveyWrapper>
  );
};

export default Surveys;
