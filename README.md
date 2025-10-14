# TypeScript + React Playground

TypeScript와 React를 학습하고 실험하기 위한 playground 프로젝트입니다.

## 🚀 특징

- **TypeScript**: 타입 안전성을 보장하는 최신 TypeScript 5.5 사용
- **React 18**: 최신 React 기능 활용
- **Vite**: 빠른 개발 서버와 빌드 도구
- **ESLint**: 코드 품질 유지
- **현대적인 UI**: 아름답고 반응형 디자인

## 📦 설치

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프리뷰 서버 실행
npm run preview

# 린트 검사
npm run lint
```

## 📚 포함된 예제

### 1. 카운터 (Counter)

- TypeScript 인터페이스와 제네릭 활용
- React Hooks (useState) 사용
- Props 타입 정의

### 2. 사용자 목록 관리 (UserList)

- 복잡한 인터페이스 정의
- 유니온 타입과 리터럴 타입
- 유틸리티 타입 (Omit) 활용
- CRUD 기능 구현

### 3. TypeScript 고급 기능

- **제네릭**: 재사용 가능한 컴포넌트 작성
- **유틸리티 타입**: Readonly, Partial, Required, Pick, Omit
- **조건부 타입**: 타입 조건에 따른 분기
- **매핑된 타입**: 기존 타입 변환
- **타입 가드**: 런타임 타입 체크
- **판별된 유니온**: 태그를 이용한 타입 구분

## 🛠️ 기술 스택

- **TypeScript 5.5**: 정적 타입 체크
- **React 18.3**: UI 라이브러리
- **Vite 5.3**: 빌드 도구
- **ESLint**: 코드 린팅

## 📖 TypeScript 학습 포인트

### 타입 시스템

```typescript
// 기본 타입
const count: number = 0;
const message: string = "Hello";
const isActive: boolean = true;

// 인터페이스
interface User {
  id: number;
  name: string;
  email: string;
}

// 제네릭
function identity<T>(arg: T): T {
  return arg;
}

// 유니온 타입
type Role = "admin" | "user" | "guest";

// 유틸리티 타입
type PartialUser = Partial<User>;
type ReadonlyUser = Readonly<User>;
```

### React + TypeScript

```typescript
// Props 타입 정의
interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

// 컴포넌트
const Button = ({ text, onClick, disabled = false }: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

// Hooks with TypeScript
const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<User | null>(null);
```

## 🎨 프로젝트 구조

```
ts-playground/
├── src/
│   ├── components/
│   │   ├── Counter.tsx
│   │   ├── Counter.css
│   │   ├── UserList.tsx
│   │   ├── UserList.css
│   │   ├── TypeScriptExamples.tsx
│   │   └── TypeScriptExamples.css
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   └── index.css
├── public/
│   └── vite.svg
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── .eslintrc.cjs
```

## 💡 사용 팁

1. **타입 추론 활용**: TypeScript는 많은 경우 타입을 자동으로 추론합니다.
2. **strict 모드**: `tsconfig.json`에서 strict 모드가 활성화되어 더 안전한 코드를 작성할 수 있습니다.
3. **유틸리티 타입**: 반복적인 타입 정의를 줄이고 코드를 간결하게 유지합니다.
4. **타입 가드**: 런타임에서 안전하게 타입을 체크합니다.

## 🔧 설정 파일

### tsconfig.json

- **strict**: 엄격한 타입 체크 활성화
- **noUnusedLocals**: 사용하지 않는 로컬 변수 경고
- **noUnusedParameters**: 사용하지 않는 파라미터 경고

### vite.config.ts

- React 플러그인 설정
- 빠른 HMR (Hot Module Replacement)

## 🤝 기여

이 프로젝트는 학습 목적으로 만들어졌습니다. 자유롭게 수정하고 실험해보세요!

---

**Happy Coding! 🎉**
