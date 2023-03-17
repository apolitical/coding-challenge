import styled from "styled-components";
import BackgroundImage from "./../assets/space.jpg";

export const Page = styled.div`
  background-image: url(${BackgroundImage});
  height: 100vh;
  width: 100%;
  background-position: center;
  background-size: cover;
  padding: 40px 0px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 40px;
`;

const styledComponents = { Page, Wrapper };

export default styledComponents;
