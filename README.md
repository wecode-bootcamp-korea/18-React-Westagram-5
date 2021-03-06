# 18-React-Westagram-5

wecode 18기 React-Westagram 5팀입니다.

## State & Event
### Mission 1) Login | 사용자 입력 데이터 저장

- 다음의 순서에 맞게 코드를 작성하여 ID, PW `<input>`에 입력된 값을 state 에 저장해주세요.
1. ID `<input>` 에서 `onChange` event 발생
2. event 발생 시 `handleIdInput` 함수 실행
3. `handleIdInput` 는 이벤트를 인자로 받음
4. event가 일어난 요소에 담긴 value 값 (`event.target.value`)을 state에 저장
5. 위의 과정을 PW `<input>` 에도 동일하게 적용
6. 위 순서대로 완료 후 `Add : Mission 1 - 사용자 입력 데이터 저장 기능 구현` commit message를 남긴 후 push 해주세요.

### Mission 2) Login | 로그인 버튼 활성화 (validation)

- 입력한 아이디와 비밀번호가 기준에 맞는 경우에만 로그인 버튼 색상이 활성화될 수 있도록 해주세요.
- ex. ID - `@` 포함 / PW - 5글자 이상
- [삼항 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) 적용해서 조건에 따라 버튼 색상에 변화를 주시기 바랍니다.
- 위 순서대로 완료 후 `Add : Mission 2 - 로그인 버튼 활성화 기능 구현` commit message를 남긴 후 push 해주세요.

### Mission 3) Main | 댓글 기능

- 사용자가 댓글 입력 후 enter 를 누르거나 왼쪽의 버튼 클릭 시 댓글이 추가되도록 구현해주세요.
- 댓글 기능을 구현하기 위해서는 배열 데이터 타입을 활용해야 합니다.
- [Array.map](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 참고해서 시도해주세요.
- 위 순서대로 완료 후 `Add : Mission 3 - 댓글 기능 구현` commit message를 남긴 후 push 해주세요.

## State & Props
### Mission 4) Main | 댓글 컴포넌트화 + props로 데이터 전달

- **map 함수를 활용해 댓글 목록을 구현해주세요.**
- 댓글 하나를 컴포넌트화 시켜주세요.
- 부모의 `state` 에 저장된 댓글 데이터에 `Array.map()` 메소드를 적용해 댓글의 개수만큼 댓글 컴포넌트가 나타나게 해주세요.
- 필요한 데이터를 `props` 로 넘겨주세요.
- 기존에 보였던 대로 댓글이 화면에 나타나면 과제 완료입니다.
- 위 순서대로 완료 후 `Add : Mission 4 - 댓글 컴포넌트화, props로 데이터 전달 구현` commit message를 남긴 후 push 해주세요.
