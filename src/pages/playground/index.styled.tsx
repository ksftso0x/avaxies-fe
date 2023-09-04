import styled from "styled-components";
export const PlayGroundContainer = styled.div`
  min-height: 100vh;
  display: flex;
  transition: all 0.85s;
  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`;
export const PlayGroundDisplay = styled.div`
  display: flex;
  height: 100vh;
  background-color: #eaebec;
  padding-top: 3rem;
  padding-bottom: 3rem;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  width: 58.3333333333%;
  @media screen and (max-width: 991px) {
    width: 100%;
    height: 400px;
  }
  img {
    position: absolute;
  }
`;
export const PlayGroundItem = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 5px 0 5px -5px rgb(0 0 0 / 10%);
  background-color: #fff;
  padding: 1.5rem;
  width: 41.6666666667%;
  position: relative;
  color: #04396c;
  @media screen and (max-width: 991px) {
    width: 100%;
    box-sizing: border-box;
  }
`;
export const PlayGroundTitle = styled.h1`
  font-family: Chivo;
  font-weight: 900;
  font-size: 48px;
  margin-top: 0;
  margin-bottom: 0.5rem;
  line-height: 1.2;
`;
export const Detail = styled.div`
  font-size: 18px;
  font-family: Space Mono;
`;
export const CombineContent = styled.div`
  font-size: 18px;
  font-family: Space Mono;
  button {
    color: white;
    font-size: 16px;
    background: #e91e63;
    border: none;
    font-family: Chivo;
    font-weight: 900;
    cursor: pointer;
    padding: 6px 16px;
    min-width: 64px;
    box-sizing: border-box;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    line-height: 1.75;
    border-radius: 4px;
    text-transform: capitalize;
  }
`;
