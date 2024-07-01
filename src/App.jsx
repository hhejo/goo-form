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
  const [today, setToday] = useState("");
  const [pastedText, setPastedText] = useState("");
  const [programInfo, setProgramInfo] = useState(initialProgramInfo);

  const handleChange = (e) => {
    setPastedText(e.target.value);
  };

  const submitPaste = (e) => {
    e.preventDefault();
    setProgramInfo({
      programName: pastedText.match(/\*프로그램명:\s*(.*)/)[1].trim(),
      programType: pastedText.match(/\*프로그램구분:\s*(.*)/)[1].trim(),
      mainArea: pastedText.match(/\*대영역:\s*(.*)/)[1].trim(),
      subArea: pastedText.match(/\*중영역:\s*(.*)/)[1].trim(),
    });
    setPastedText("");
  };

  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    setToday(`${year}-${month}-${day}`);
  }, []);

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto">
        <form className="flex flex-col shadow-lg mb-2">
          <textarea
            className="border-2 rounded transition mb-2"
            placeholder="여기에 붙여넣으세요."
            rows="10"
            cols="30"
            value={pastedText}
            onChange={handleChange}
          ></textarea>
          <button
            className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
            onClick={submitPaste}
          >
            추출하기
          </button>
        </form>
        <div>
          <div className="flex justify-between bg-white shadow-lg rounded p-2 mb-2">
            <div>지역: 천안</div>
            <div>참여 수업일: {today} (TODAY)</div>
          </div>
          <div className="flex flex-col bg-white shadow-lg rounded p-2 mb-2">
            <div>프로그램명: {programInfo.programName}</div>
          </div>
          <div className="flex flex-col bg-white shadow-lg rounded p-2 mb-2">
            <div>프로그램구분: {programInfo.programType}</div>
            <div>대영역: {programInfo.mainArea}</div>
            <div>중영역: {programInfo.subArea}</div>
          </div>
        </div>
        <form>
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
                <input
                  type="radio"
                  name="1번"
                  value="1"
                  id="전혀 그렇지 않다"
                  className="custom-radio radio-a cursor-pointer transition"
                />
                <label htmlFor="전혀 그렇지 않다"></label>
                <input
                  type="radio"
                  name="1번"
                  value="2"
                  id="그렇지 않다"
                  className="custom-radio radio-a cursor-pointer transition"
                />
                <label htmlFor="그렇지 않다"></label>
                <input
                  type="radio"
                  name="1번"
                  value="3"
                  id="보통이다"
                  className="custom-radio radio-b cursor-pointer transition"
                />
                <label htmlFor="보통이다"></label>
                <input
                  type="radio"
                  name="1번"
                  value="4"
                  id="그렇다"
                  className="custom-radio radio-c cursor-pointer transition"
                />
                <label htmlFor="그렇다"></label>
                <input
                  type="radio"
                  name="1번"
                  value="5"
                  id="매우 그렇다"
                  className="custom-radio radio-c cursor-pointer transition"
                />
                <label htmlFor="매우 그렇다"></label>
              </div>
            </div>

            {/* 2번 ~ 11번 */}
            <div>2. 본 프로그램의 교육내용이 도움이 되었다고 생각하십니까?</div>
            <div>
              3. 본 프로그램을 통해 알게 된 교육내용과 정보가 향후 진로선택과
              준비에 도움이 되겠습니까?
            </div>
            <div>
              4. 본 프로그램 참여 후, 참여 전에 가졌던 기대감에 비해 만족감은
              향상되었습니까?
            </div>
            <div>5. 본 교육 프로그램의 교육 방법에 대해 만족하셨습니까?</div>
            <div>6. 본 프로그램의 교육 강사에 대해 만족하셨습니까?</div>
            <div>
              7. 본 프로그램의 교육 장소 및 기타시설에 대해 만족하셨습니까?
            </div>
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
        </form>
      </div>
    </div>
  );
}

export default App;
