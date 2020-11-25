import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Header = styled.header`
  position: fixed;
  top: 0;
  background-color: white;
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #d6d6d6;
  z-index: 2;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const HeaderColumn = styled.div`
  width: 33%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:last-of-type {
    justify-content: flex-end;
    padding-right: 2em;
    div {
      &:hover {
        cursor: pointer;
      }
    }
  }
  &:first-child {
    margin-right: auto;
    text-align: left;
    display: flex;
    justify-content: center;
  }
`;

const Span = styled.span`
  font-size: 1.1em;
`;

const PopUp = styled.div`
  width: 800px;
  height: 320px;
  position: fixed;
  top: 4rem;
  margin: 0 auto;
  border: 1px solid #d8d8d8;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.7rem;
  line-height: 180%;
  padding-left: 1rem;
  box-shadow: 5px 5px 10px #e6e6e6, -5px -5px 10px #ffffff;
  z-index: 10;
  div.exit {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10px;
    right: 10px;
    border-right: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
    &:hover {
      cursor: pointer;
    }
  }
`;

const Timer = styled.div`
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 2px solid black;
  margin-right: 2rem;
`;

const Time = styled.div``;

const Button = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  &:hover {
    background-color: yellow;
    cursor: pointer;
  }
`;

export default withRouter(({ history }) => {
  const [popupOpen, setPopupOpen] = useState(false);

  const whereAmI = history.location.pathname.toLowerCase();

  const popupToggle = () => {
    setPopupOpen((v) => !v);
  };

  return (
    <Header>
      <HeaderWrapper>
        <HeaderColumn>
          <Span>
            {whereAmI === "/typea" && "타입 A"}
            {whereAmI === "/typeb" && "타입 B"}
            {whereAmI === "/typec" && "타입 C"}
          </Span>
        </HeaderColumn>
        <HeaderColumn>테마 중심 요약하기</HeaderColumn>
        <HeaderColumn>
          {whereAmI === "/typeb" && <div onClick={popupToggle}>사용법</div>}
          {whereAmI === "/typec" && <div onClick={popupToggle}>사용법</div>}
        </HeaderColumn>
      </HeaderWrapper>
      {whereAmI === "/typeb" && popupOpen && (
        <PopUp>
          <div>[ 시스템 사용법 ]</div>
          <div>0. 본 시스템의 기본 단위는 어절 단위입니다.</div>
          <div>
            1. 중요하다고 생각되는 내용을 선택하세요. 선택된 내용은 자동으로
            하이라이트가 적용됩니다.
          </div>
          <div>
            2. 더 중요하다고 생각되는 내용은 한 번 더 선택하세요. 하이라이트가
            중첩되어 더욱 강하게 나타납니다. <br />
          </div>
          <div>( 중첩은 최대 세 번 까지 가능합니다. )</div>
          <div>
            3. 원본을 얼만큼 압축해서 요약하고 싶나요? 목표 게이지를 직접
            드래그하여 목표를 설정하세요.
          </div>
          <div>
            4. 선택된 내용을 본인만의 언어로 다시 정리하여 쓸 필요는 없습니다.
            지금 보이는 구조가 곧 요약의 결과물이니까요.
          </div>
          <br />
          <div>[ 조작법 ]</div>
          <div>
            어절 선택하기 : 컨트롤(Windows) 키 + 드래그 / 커맨드(MAC OS) 키 +
            드래그
          </div>
          <div>
            어절 제외하기 : 알트(Windows) 키 + 드래그 / 옵션(MAC OS) 키 + 드래그
          </div>
          <div className="exit" onClick={popupToggle}>
            X
          </div>
        </PopUp>
      )}
      {whereAmI === "/typec" && popupOpen && (
        <PopUp>
          <div>[ 중첩 단계별 보기 ]</div>
          <div>1. 누군가가 요약한 내용이 하이라이트 되어 나타납니다.</div>
          <div>
            2. 중첩 단계를 선택하여 하이라이트 적용 수준을 조정하세요. <br />
          </div>
          <div>
            3. '선택된 단계만 보기' 버튼을 누르면, 선택되지 않은 어절들이
            흐릿해집니다.
          </div>
          <br />
          <div>[ 요약 히스토그램 ]</div>
          <div>
            1. 문서 전체에 대해 하이라이트 중첩이 어떤 양상을 보이고 있는지 한
            눈에 확인할 수 있게 도와줍니다.
          </div>
          <div>
            2. 히스토그램 내부의 그래프를 클릭하여 해당 어절을 확인할 수 있는
            곳으로 빠르게 이동할 수 있습니다.
          </div>
          <div>3. 요약의 핵심이 되는 부분으로 빠르게 이동하세요.</div>

          <div className="exit" onClick={popupToggle}>
            X
          </div>
        </PopUp>
      )}
    </Header>
  );
});