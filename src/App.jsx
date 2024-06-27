import { useState, useEffect } from "react";

// 에러 처리 확실히

//   https://docs.google.com/forms/d/e/1FAIpQLSfHc6xaHt-ZkBNo5htWVCl5MGKeRpVkleFWV4AufjAfpix9vw/viewform

// 만족도조사 부탁드립니다^^

// *참여날짜: 24년 6월 24일
// *프로그램명:  공간정리와 마음 돌보기
// *프로그램구분: 외부연계
// *대영역: 사례관리
// *중영역: 생활관리

const initialProgramInfo = {
  programName: "",
  programType: "",
  mainArea: "",
  subArea: "",
};

function App() {
  const [todayFormatted, setTodayFormatted] = useState("");
  const [textPasted, setTextPasted] = useState("");
  const [programInfo, setProgramInfo] = useState(initialProgramInfo);

  const handleChange = (e) => {
    setTextPasted(e.target.value);
  };

  const submitPaste = () => {
    const programNameMatch = textPasted.match(/\*프로그램명:\s*(.*)/);
    const programTypeMatch = textPasted.match(/\*프로그램구분:\s*(.*)/);
    const mainAreaMatch = textPasted.match(/\*대영역:\s*(.*)/);
    const subAreaMatch = textPasted.match(/\*중영역:\s*(.*)/);
    setProgramInfo({
      programName: programNameMatch[1].trim(),
      programType: programTypeMatch[1].trim(),
      mainArea: mainAreaMatch[1].trim(),
      subArea: subAreaMatch[1].trim(),
    });
  };

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    setTodayFormatted(`${year}-${month}-${day}`);
  }, []);

  return (
    <>
      <div>지역: 천안</div>
      <div>참여 수업일: {todayFormatted} (TODAY)</div>
      <div className="flex">
        <label>아래에 붙여넣기</label>
        <textarea onChange={handleChange}></textarea>
        <button onClick={submitPaste}>추출하기</button>
      </div>
      <div>프로그램명: {programInfo.programName}</div>
      <div>프로그램구분: {programInfo.programType}</div>
      <div>대영역: {programInfo.mainArea}</div>
      <div>중영역: {programInfo.subArea}</div>
      <fieldset>
        <legend>점수 순서</legend>
        <div className="flex">
          <div>전혀 그렇지 않다</div>
          <div>그렇지 않다</div>
          <div>보통이다</div>
          <div>그렇다</div>
          <div>매우 그렇다</div>
        </div>
        {/* 1번 */}
        <div>
          <div>1. 본 프로그램에 대해 전반적으로 만족하셨습니까?</div>
          <div className="flex">
            <input type="radio" name="1번" value="1" id="전혀 그렇지 않다" />
            <label htmlFor="전혀 그렇지 않다">전혀 그렇지 않다</label>
            <input type="radio" name="1번" value="2" id="그렇지 않다" />
            <label htmlFor="그렇지 않다">그렇지 않다</label>
            <input type="radio" name="1번" value="3" id="보통이다" />
            <label htmlFor="보통이다">보통이다</label>
            <input type="radio" name="1번" value="4" id="그렇다" />
            <label htmlFor="그렇다">그렇다</label>
            <input type="radio" name="1번" value="5" id="매우 그렇다" />
            <label htmlFor="매우 그렇다">매우 그렇다</label>
          </div>
        </div>

        {/* radio css 적용 */}
        <div className="p-4">
          <form>
            <label className="inline-flex items-center">
              <input type="radio" name="option" className="custom-radio" />
              <span className="ml-2">Option 1</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="option" className="custom-radio" />
              <span className="ml-2">Option 2</span>
            </label>
          </form>
        </div>

        {/* 2번 ~ 11번 */}
        <div>2. 본 프로그램의 교육내용이 도움이 되었다고 생각하십니까?</div>
        <div>
          3. 본 프로그램을 통해 알게 된 교육내용과 정보가 향후 진로선택과 준비에
          도움이 되겠습니까?
        </div>
        <div>
          4. 본 프로그램 참여 후, 참여 전에 가졌던 기대감에 비해 만족감은
          향상되었습니까?
        </div>
        <div>5. 본 교육 프로그램의 교육 방법에 대해 만족하셨습니까?</div>
        <div>6. 본 프로그램의 교육 강사에 대해 만족하셨습니까?</div>
        <div>7. 본 프로그램의 교육 장소 및 기타시설에 대해 만족하셨습니까?</div>
        <div>8. 본 프로그램에 대한 안내와 운영에 대해 만족하셨습니까?</div>
        <div>
          9. 본 프로그램이 자신에게 실질적으로 도움이 된다고 생각하십니까?
        </div>
        <div>10. 본 프로그램을 다른 친구에게 추천하고 싶습니까?</div>
        <div>
          11. 이 외 프로그램 운영과 개선에 대한 의견이 있으시면 자유롭게
          작성하여 주십시오.
        </div>
      </fieldset>
    </>
  );
}

export default App;
