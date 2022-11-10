import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import { Navigate } from 'react-router-dom';
import Github from './images/github.svg';


const jsonData = require('./data/data.json');
const data = JSON.parse(JSON.stringify(jsonData));

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`

const MainTitle = styled.h1`
  text-align: center;
  font-weight: bold;
`

const BoxTitle = styled.h2`
  text-align: left;
  padding: 0px;
  margin: 0px;
  font-weight: bold;
  border-bottom: 1px solid #cbcbcb;
`

const ProfileBox = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 20px 20px 40px;
  border-radius: 10px;
  margin-bottom: 20px;
`

const SubBox = styled.div`
  width: 25%;
  height: 200px;
  margin: 10px;
  display: inline-block;
  vertical-align: top;
  border-bottom: 1px solid #cbcbcb;

  @media (max-width: 768px) {
    width: 25%;
    height: 330px;
  }
`

const SecondSubBox = styled.div`
  width: 40%;
  height: 100%;
  margin: 10px;
  display: inline-block;
  vertical-align: top;
  border-bottom: 1px solid #cbcbcb;
`;

const App = () => {
  const personalInformation = data.personalInformation;
  const career = data.careerNEducation;
  const skills = data.skillsNStack;
  const projects = data.projects;
  const selfIntro = data.selfIntroduce;

  const firstSelfIntroBody: string = selfIntro.firstSubBody.split("\n").map((line: string) => {
    return <p>{line}</p>;
  });

  const secondSelfIntroBody: string = selfIntro.secondSubBody.split("\n").map((line: string) => {
    return <p>{line}</p>;
  });

  const thirdSelfIntroBody: string = selfIntro.thirdSubBody.split("\n").map((line: string) => {
    return <p>{line}</p>;
  });

  const fourthSelfIntroBody: string = selfIntro.fourthSubBody.split("\n").map((line: string) => {
    return <p>{line}</p>;
  });

  return (
    <Container>
      <GlobalStyle />
      <MainTitle>{personalInformation.name}'s profile</MainTitle>
      <ProfileBox>
        <BoxTitle>Personal Information</BoxTitle>
        <h3>이름: {personalInformation.name}</h3>
        <h3>생년월일: {personalInformation.birth}</h3>
        <h3>나이: {personalInformation.age}</h3>
        <h3>이메일: {personalInformation.email}</h3>
        <h3>깃허브: <a href='https://github.com/' style={{textDecoration: "none", color: "#000"}}>{personalInformation.github}</a></h3>
        <h3>블로그: <a href='https://velog.io/@jqk2195' style={{textDecoration: "none", color: "#000"}}>{personalInformation.blog}</a></h3>
      </ProfileBox>
      <ProfileBox>
        <BoxTitle>Career & Stack</BoxTitle>
        <h3> - {career.university}</h3>
        <h3> - {career.webEdu}</h3>
        <h3> - {career.awsEdu}</h3>
      </ProfileBox>
      <ProfileBox>
        <BoxTitle>Skills & Stack</BoxTitle>
          <SubBox>
            <h3>{skills.languages[0]}</h3>
            <p>전반적인 HTML 지식과 웹을 꾸미기 위한 CSS 대부분의 지식을 보유하고 있습니다.</p>
          </SubBox>
          <SubBox>
            <h3>{skills.languages[1]}</h3>
            <p>JavaScript의 기본적인 문법과 ES6 문법, 그리고 JavaScript의 슈퍼셋인 TypeScript에 대해 이해하고 활용할 수 있습니다.</p>
          </SubBox>
          <SubBox>
            <h3>{skills.languages[2]}</h3>
            <p>Python을 읽고 이해할 수 있으며 라이브러리인 Numpy, Pandas를 통해 데이터를 조작하고 Matplotlib를 통해 데이터를 시각화 한 경험이 있습니다.</p>
          </SubBox>
          <SubBox>
            <h3>{skills.frameworks[0]}</h3>
            <p>React를 통해 프로젝트의 프론트엔드 부분을 구축하였고 React만이 가지고 있는 장점을 이해하고 있습니다.</p>
          </SubBox>
          <SubBox>
            <h3>{skills.frameworks[1]}</h3>
            <p>express가 어떻게 프론트엔드 부분과 데이터를 주고받는지 이해하고 있습니다.</p>
          </SubBox>
          <SubBox>
            <h3>{skills.database[0]}</h3>
            <p>MongoDB를 통한 noSQL 데이터 처리방법을 어느정도 이해하고 있습니다.</p>
          </SubBox>
          <SubBox>
            <h3>{skills.tools[0]}</h3>
            <p>Git의 버전관리와 branch에 대해 이해하고 있으며 이를 통해 팀프로젝트를 진행한 경험이 있습니다.</p>
          </SubBox>
          <SubBox>
            <h3>{skills.tools[1]}</h3>
            <p>AWS의 EC2와 인스턴스 배포, 그외의 유틸리티에 대해 어느정도 이해하고 있습니다.</p>
          </SubBox>
          <SubBox>
            <h3>{skills.tools[2]}</h3>
            <p>피그마를 통한 웹 페이지 디자인을 간략하게 구현할 수 있습니다.</p>
          </SubBox>
      </ProfileBox>
      <ProfileBox>
        <BoxTitle>Projects</BoxTitle>
        <SecondSubBox>
          <h3>{projects[0]}</h3>
          <p>역할: 프론트엔드</p>
          <p>웹의 전반적 디자인, 게시판 CRUD기능</p>
          <p>사용기술: React, Express, MongoDB</p>
          <p>첫 프로젝트인 만큼 배울점이 많은 프로젝트 였습니다. 프로젝트의 전반적인 기획, 피그마와 깃허브의 사용방법에 대해 이해할 수 있었으며 팀원의 백엔드 코드를 리뷰하고 몽고DB의 사용방법에 대해 터득할 수 있었습니다.</p>
          <a href="https://github.com/UOUWebDev/first-CRUD" style={{textDecoration: "none"}}><img src={Github}/> first-CRUD</a>
        </SecondSubBox>
        <SecondSubBox>
          <h3>{projects[1]}</h3>
          <p>역할: 기획, 프론트엔드, 백엔드</p>
          <p>프로젝트 기획, 웹의 전반적 디자인, 게시판 CRUD기능</p>
          <p>사용기술: React, Express, MongoDB</p>
          <p>개인프로젝트로 웹디자인, CRUD기능, 서버구축, 페이지네이션, 비동기 Ajax 데이터 통신 등의 기능을 구현하였습니다.</p>
          <a href="https://github.com/Eriniss/ICT-ulsan-project" style={{textDecoration: "none", marginRight: "20px"}}><img src={Github}/>ICT-ulsan-project</a>
          <a href="https://github.com/Eriniss/ICT-ulsan-project-server" style={{textDecoration: "none"}}><img src={Github}/>ICT-ulsan-project-server</a>
        </SecondSubBox>
      </ProfileBox>
      <ProfileBox>
        <BoxTitle>Self-Introduce</BoxTitle>
        <h3>{selfIntro.firstSubTitle}</h3>
        <p>{firstSelfIntroBody}</p>
        <h3>{selfIntro.secondSubTitle}</h3>
        <p>{secondSelfIntroBody}</p>
        <h3>{selfIntro.thirdSubTitle}</h3>
        <p>{thirdSelfIntroBody}</p>
        <h3>{selfIntro.fourthSubTitle}</h3>
        <p>{fourthSelfIntroBody}</p>
      </ProfileBox>
      <footer>
        <ProfileBox>
          <a href="http://myprofile-env.eba-vqtawm76.ap-northeast-2.elasticbeanstalk.com/" style={{textDecoration: "none", color: "#121212"}}>이 이력서는 AWS를 통해 http://myprofile-env.eba-vqtawm76.ap-northeast-2.elasticbeanstalk.com에 배포되었습니다</a>
        </ProfileBox>
      </footer>
    </Container>
  );
};

export default App;