
@import "page.css"; 
problem is 
컴포넌트와 CSS가 분리되어 있다.
하나는 JS파일로, 하나는 CSS 파일로.
컴포넌트를 이용하는 것의 요점은 어플리케이션의 부분 부분을 캡슐화하는 것이다.

https://flatuicolors.com/
1. CSS module. 
create-react-app에서 사용가능하다.
javaScript 객체로 사용할 수 있다.
Header.module.scss or 
Header.module.css (local로 바꿔준다.)
import styles from "./Header.module.css";
navList 
className ={styles.navList}
javaScript에서는 nav-list 처럼 -를 사용할 수 없다.
className 기억하는데 고통스럽다.


2. yarn add styled-components
   JS를 이용한 CSS사용.
   we are going to be able to create components 
   that have styles 
   style이 안에 있는 컴포넌트를 생성할 수 있다.

* JavaScript안에 CSS가 있고, 컴포넌트를 바꾸면 된다.
* React Router Dom에서 주어진 {Link}가 따로 있다. 
* 브라우저 방식이 아닌 자바스크립트 방식으로 보내준다.
* href는 React Router에 존재하지 않는다. 따라서, to를 사용한다.
* You should not use <Link> outside a <Router>
* <> Router는 오직 하나의 Child만 Render한다.
* There is a styled-components extension on VSCode

Styled-components => LOCAL

Global style => 해당 사이트의 폰트를 설정하거나 SC를 설치할수도 있음.
*yarn add styled-reset
styled-reset은 styled-components를 이용해서 CSS를 초기화해서 0의 상태에서
시작하게 한다.

styled-components에는 props를 줄 수 있다.


{withRouter} from  "react-router-dom"
withRouter는 다른 컴포넌트를 감싸는 컴포넌트고, 감싸진 컴포넌트에 라우터 정보를 전달한다.


Basically TWO components
Wraps another component and gives him the information of the Router


const Header = () =>  && export default withRouter(Header)
Header가 withRouter라는 컴포넌트를 감싼 형태이기 때문에 props를 가질 수 있다.
props는 history, location, match를 가지고 있다. => Router에서 왔다.
withRouter 덕분에, 어떤 컴포넌트와도 연결할 수 있다.(props)
props => location.pathname

props를 확장할 수 있다.
spread operator
current는 boolean타입이다.
current가 true이려면 pathname => ('/')
current===true => pathname('/')
withRouter 컴포넌트 덕분에, Header가 우리가 어디에 있는지 알 수 있다.
{location : {pathname}}

{/* {console.log(props)} */}

## API Verbs

- [ ] Now playing (Movie)
- [ ] Top Rated (TV, Movie)
- [ ] Popular (TV, Movie)

yarn add axios
"append_to_response"를 api에서 지원한다.
ex) video, image append

@을 query에 입력하면, URL에서 인코딩을 해줘야 한다.
왜냐하면 String이기 때문!

리액트 컴포넌트 코딩패턴.

cotainer presenter pattern
컨테이너는 data를 가지고,
state(상태값)를 가지고, api를 불러온다.

presenter=> style
container=> data

1. 컨테이너를 먼저 만들고, 
2. api 메소들을 추가한 다음, 
3. 그 작업이 끝나면, 데이터를 보여주는 작업.

When a component mounts, "hey, whats up?" form을 보여준다.

해당 컴포넌트는 우리의 라우터의 위치를 알고 있다.
Header is made with withRouter 
because we are decorating it with withRouter.
<Header>는 Route가 아니기 때문에 Router에서 location 정보를 받을 수 없다." 


Detail은 해줄 필요가 없다.
디폴트로 Router는, 모든 Route들에게 props를 준다. BUT <Header>
리액트 라우터가 파라미터를 각각 다른 장소들에게 준다.

How to detect if id is number 
    const (parseInt or Number(id));
this.props로 받아와서. (history.push("/")) 할 수 있다.

https://medium.com/@umioh1109/react-es6-class-constructor%EC%97%90%EC%84%9C%EC%9D%98-super-9d53ba0611d9


디폴트로 리액트 Router가 모든 정보를 Route들에게 준다.
ex) 
Header.js
props 로케이션 정보를 헤더에게 주지 않는다. 

rerender 하고 싶다면, this.isMovie 안두고, this.state에 둘거다.

react에서는 children은 일반적으로 태그 사이의 값을 받는다.
children은 div안에 넣기 위해서 포지셔닝한다.

Children are the components that are placed inside the component.

*display grid는 flexbox보다 좋다.

CONTAINER 
1.state를 만든다.
2.state를 presenter로 전달한다.

PRESENTER
3.presenter는 state를 가지고 있다. 
4.value를 tracking 할 수 있다.


props 및 state는
React의 컴포넌트 객체에서 DOM 객체를 제어할 때 꼭 필요하다.


PROPS 

자식컴포넌트에서 부모 컴포넌트 객체에 데이터를 받아와서 출력해주고, 
출력해주는 부분들을 수정할 수 있도록 만들어 줄 수도 있습니다.

props는 개발에서 많이들 사용되는 용어인 프로퍼티(properties)의 줄임말이다.
props는 React에서는 사용자가 컴포넌트에 전달해서 보관하길 원하는 데이터다.
즉, 컴포넌트 내에서 데이터가 보관되면, 이 데이터는 수정되지 않고, 
보존되어야 하는 법칙이 성립된다. 
만약 props의 값을 변경하고자 할때는,
컴포넌트 내부가 아닌, 
부모 컴포넌트에서 이에 대한 부분이 변경되어야 한다.

var post =  { title : '테스트 타이틀' }
<Postdiv post={ post } />

 이처럼, 부모 객체에서는 자식객체에 post라는 데이터를 props 형태로 전달 해 줄수 있습니다.
*** 부모 객체에서 넘겨주는 데이터이기 때문에, 
*** 실제 사용하는 컴포넌트 내에서 props의 변경은 원칙적으로 금지되어 있습니다.

props의 설정은 propTypes를 통해 객체를 설정하거나,
getDefaultProps를 통해 props값을 받아올 수 있습니다.

STATE

React 컴포넌트는 
Component 상태를 저장할 수 있다.
props와의 차이점이라면, 
state는 컴포넌트 내부에 존재하고 있기 떄문에,
상태값이 변경이 가능하다.
3


1. getInitialState : component의 state 값을 초기화합니다

2. componentWillMount : render가 실행 되기 전, data를 제어합니다.
   this.setState({post : obj}); // this.setState를 통해서 state 값을 변경해 줍니다.

3. render : 가상 DOM 객체를 복제합니다.
4. returns {XML}

5. propTypes : component의 기본값을 불러옵니다. (childComp)

props 는 부모 컴포넌트가 자식 컴포넌트에게 주는 값입니다.
자식 컴포넌트에서는 props 를 받아오기만하고,
자식 컴포넌트에서는 props 를 받아오기만하고

반면에 state 는 컴포넌트 내부에서 선언하며 내부에서 값을 변경 할 수 있습니다.

propTypes is to check that the container is sending 
the right props to the presenter.




React 컴포넌트에서는 상태값(state)를 가지고 있습니다.
상태값이란 실제로 우리가 보고있는 뷰 화면에서 출력되는 부분과 연관된 객체라고 보시면 됩니다.

React 컴포넌트는 처음 이 객체가 생성될때, 화면에 관련된 상태값을 기본적으로 지정할 수 있게 됩니다.

즉, 기본적으로 컴포넌트가 생성될때에 처음 시점에서 호출하는 화면에 관련된 객체를 정의하는 함수입니다. 




props는 부모 컴포넌트에서 자식 컴포넌트의 데이터와 설정을 전달해 줄 수 있으며, 따라서 props를 컴포넌트 내에서 변경하는 일은 원칙적으로 금지되어 있습니다. 이를 위해서, 컴포넌트 내부에서 상태값을 제어할 수 있는 state를 사용하는데, state값은 this.state값을 직접 변경하는 것이 아닌, this.setState() 메소드를 통해서 상태값을 변경해 주어야 합니다.




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
