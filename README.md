# angelswing-frontend-test

-   This README starts with an English instruction.
-   한국어 설명은 영어 텍스트가 끝나는 부분에서 시작합니다.


## Summary  
  
- Please write a web application based on `Typescript + React` by referring to the design specifications and requirements given.  
- Use the given API and `Openlayers` library to mark the circular marker on the map.  
  
## Test Topics  
  
Please focus on the following items and proceed with the task:  
  
1. Ability to accurately reflect design requirements  
2. Ability to acquire new APIs and libraries  
3. Ability to write structured code  
4. Proficiency in Javascript and Typescript
5. Understanding the Web Ecosystem  
  
## Development Environment  
  
1. Please create a `React` project based on `Typescript` with `ESLint`.
2. Please write components using `CSS-in-JS` library.  
3. Please install the `Openlayers` library to display the map and the markers for each location.  
4. (Optional) Please use a library such as `Jest` for unit testing of components and functions.  
  
## Requirements  
  
Please satisfy the following requirements:
  
### Basic requirements  
  
1. Please make sure that the UX/UI of the web page matches the given requirements on Figma.  
  - https://www.figma.com/file/GMxzmwuhjGaLqkgPOSf1c4/FE-TEST?node-id=0%3A1  
2. Use the `React component` or `custom hook` to manage the circles that will be displayed in the `Openlayers` map.  
3. (Optional) Please write at least one test suite with three test cases for one of the components.

### When the page is opened the first time
  
1. The center of the `Openlayers` map should be at [Seoul City Hall](https://www.google.com/maps/place/Seoul+City+Hall/@37.5662952,126.9779451,15z/data=!4m2!3m1!1s0x0:0xe92b70ac420cf0a8?sa=X&ved=2ahUKEwi62Yygm5_sAhUGMd4KHaCBDK0Q_BIwFHoECBcQBQ), which must be set to `zoom level 16`.  
2. The page should send a GET request to [Angelswing's serverless api for testing](https://angelswing-frontend-test-serverless-api.vercel.app/api/locations).
The API returns the following JSON objects:
  
```json  
{  
  "locations":[  
    [37.56755685,126.97328373],  
    [37.56722338,126.98351298],  
    [37.56269872,126.97860143]  
  ]  
}  
```  
3. Based on the response above, place a circle on each of these three locations as follows (notice the blue circles at three distinct locations):  
  
![blue circles](./blue-circles.png)

## How to submit

- Compress the source code except for files like `node_modules`. Also, please include hidden files and folders such as `.git` folder.
- Upload the compressed source code to a drive.
- Please send the drive link to [recruit@angelswing.io](mailto:recruit@angelswing.io).
  
## Other  
  
- It is advisable not to use `Docker` to keep the setup simple. More time should be spent on the code anyway.
- When working on a different operating system (UNIX, non-UNIX), problems can occur, such as `CRLF` and [filename case sensitivity](https://en.wikipedia.org/wiki/Case_sensitivity).
Please make sure that the `Linter` and/or `IDE` is using the appropriate settings in order to avoid that.

## 요약

- 주어진 디자인 시안과 요구사항을 참고해 Typescript + React 기반 웹 애플리케이션을 작성해주세요.
- 주어진 API와 Openlayers 라이브러리를 활용해 지도 위에 원형 마커를 표시해주세요.

## 테스트 주요 항목

아래 항목에 초점을 두어 과제를 진행해주세요:

1. 디자인 시안을 정확하게 반영하는 능력
2. 새로운 API 및 라이브러리의 습득 능력
3. 구조화된 코드 작성 능력
4. Javascript 및 Typescript 숙련도
5. 웹 생태계에 대한 이해도

## 개발 환경

1. `Typescript` + `ESLint` 기반의 `React` 프로젝트를 생성해주세요.
2. `CSS-in-JS` 라이브러리를 사용해 컴포넌트를 작성해주세요.
3. 지도 위치에 맞는 마커를 표시하기 위해 `Openlayers` 라이브러리를 설치해주세요.
4. (선택) 컴포넌트 및 함수의 유닛 테스트를 위한 `Jest` 등의 라이브러리를 사용해주세요.

## 작업 요청사항

다음 사항을 충족시켜 주세요:
    
### 공통

1.  웹페이지의 UX/UI를 주어진 Figma 시안과 일치하도록 만들어 주세요.
    - https://www.figma.com/file/GMxzmwuhjGaLqkgPOSf1c4/FE-TEST?node-id=0%3A1 
2. Openlayers 지도 내에 표시될 원을 React 컴포넌트 또는 커스텀 훅을 사용해 관리해주세요.
3. (선택) 컴포넌트의 `test suite`를 구성하고, 테스트를 작성해주세요.

### 웹 페이지가 처음 열렸을 때

1.  `Openlayers` 지도의 중심은  [서울 시청](https://www.google.com/maps/place/Seoul+City+Hall/@37.5662952,126.9779451,15z/data=!4m2!3m1!1s0x0:0xe92b70ac420cf0a8?sa=X&ved=2ahUKEwi62Yygm5_sAhUGMd4KHaCBDK0Q_BIwFHoECBcQBQ) 으로, `zoom level`은 `16`에 설정되어 있어야 합니다.
2.  [테스트를 위해 만들어진 엔젤스윙의 서버리스 API로 GET 요청](https://angelswing-frontend-test-serverless-api.vercel.app/api/locations) 을 보내고, 적절한 방식으로 요청 결과를 관리해주세요.
API는 다음과 같은 JSON object를 반환합니다:

```json  
{  
  "locations":[  
    [37.56755685,126.97328373],  
    [37.56722338,126.98351298],  
    [37.56269872,126.97860143]  
  ]  
}  
```  
3. 각각의 장소에 원을 나타내주세요 (세 곳의 다른 장소에 있는 푸른 원을 확인해주세요):
    
[![blue circles](./blue-circles.png)](./blue-circles.png)

# 과제 제출 방법

-`node_modules`와 같은 파일을 제외한 나머지 소스 코드를 압축하세요. '.git'폴더와 같은 숨겨진 파일 및 폴더는 포함 해주세요.
- 압축 된 소스 코드를 드라이브에 업로드해주세요.
- 해당 드라이브 링크를 recruit@angelswing.io 로 보내주세요.

## 기타

- 빠른 실행 환경을 유지하기 위해 `Docker`는 사용하지 않습니다.
- 다른 운영체제(unix, non-unix)에서 테스트를 할 때, `CRLF` 등으로 인해 문제가 발생할 수 있습니다.
`Linter` 및 `IDE` 설정에 유의해주세요.
