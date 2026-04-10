# 마이링크 (MyLink) 시스템 순서도 (Flowchart)

마이링크 서비스의 주요 기능인 **회원가입/인증**, **링크 추가**, 그리고 **방문자 액션 및 트래킹** 과정을 정의한 순서도입니다.

## 1. 회원가입 및 프로필 초기화 (Authentication & Init Flow)
Google 소셜 로그인을 진행한 후, 신규 계정일 경우 지메일 아이디를 파싱해 초기 `displayName`을 배정하는 과정입니다.

```mermaid
sequenceDiagram
    actor User as 소유자(Owner)
    participant Client as 웹 프론트엔드
    participant DB as Firebase (Auth / Firestore)
    
    User->>Client: [Google 계정으로 시작] 버튼 클릭
    Client->>DB: Google OAuth 인증 요청
    DB-->>Client: 인증 성공 (이메일, 이름, 프로필 사진 반환)
    Client->>DB: Firestore에서 `users/{uid}` 문서 존재 여부 확인
    
    alt 기존 가입자 (회원)
        DB-->>Client: 기존 유저 데이터 반환
        Client-->>User: 대시보드 본문 화면으로 이동
    else 신규 가입자 (최초 로그인)
        Client->>Client: 이메일 ID(@ 앞부분) 파싱하여 초기 `displayName` 생성
        Client->>DB: `users/{uid}` 문서 신규 생성 (파싱된 닉네임 등 저장)
        DB-->>Client: 사용자 데이터베이스 구축 완료
        Client-->>User: 대시보드 화면 (빈 상태-Empty State) 제공
    end
```

<br/>

## 2. 링크 생성 프로세스 (Link Creation Flow)
소유자가 대시보드에서 새로운 링크를 입력하고 파비콘을 연동하여 추가하는 과정입니다.

```mermaid
flowchart TD
    A([소유자: 링크 추가 폼 진입]) --> B[제목(Title) 및 목적지 URL 작성]
    B --> C{URL 형식 검증이 통과되었는가?}
    
    C -- 아니오 --> D[오류 메시지: 올바른 주소를 입력해주세요.]
    C -- 예 --> E[추가하기 버튼 클릭]
    
    E --> F[구글 파비콘 API에 URL 전달하여 아이콘 이미지 URL 추출]
    F --> G[Firestore: `users/{uid}/links` 서브 컬렉션에 링크 문서 생성]
    G --> H([최상단 최신순 위치에 새 링크 블록 렌더링 완료])
```

<br/>

## 3. 방문자 열람 및 클릭 트래킹 (Visitor & Analytics Flow)
외부 방문자가 크리에이터의 프로필에 접속하여 링크를 클릭하고, 시스템이 이를 카운팅하는 제약 사항 흐름입니다.

```mermaid
sequenceDiagram
    actor Visitor as 방문자(Visitor)
    participant Client as 웹 프론트엔드
    participant DB as Firestore DB
    
    Visitor->>Client: 고유 닉네임 주소 접속 (`mylink.com/displayName`)
    Client->>DB: `displayName` 필드를 기준으로 일치하는 유저 데이터 검색
    
    alt 일치하는 데이터가 없는 경우
        DB-->>Client: 검색 결과 없음 (Null)
        Client-->>Visitor: 404 (존재하지 않는 페이지) 에러 화면 출력
    else 일치하는 데이터가 있는 경우
        DB-->>Client: 프로필 데이터 및 등록된 `links` 전체 목록 반환
        Client-->>Visitor: 통합 마이링크 프로필 화면 렌더링
        
        Visitor->>Client: 특정 [외부 링크] 버튼 클릭
        par 이동 및 트래킹 동시 실행
            Client->>DB: 해당 링크 문서의 클릭수(Click Count) 1 증가
            Client-->>Visitor: 새 탭(`_blank`)으로 외부 목적지 URL 이동 구동
        end
    end
```
