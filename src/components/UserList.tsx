import { useState } from "react";
import "./UserList.css";

interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user" | "guest";
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "김철수", email: "kim@example.com", role: "admin" },
    { id: 2, name: "이영희", email: "lee@example.com", role: "user" },
    { id: 3, name: "박민수", email: "park@example.com", role: "user" },
  ]);

  const [newUser, setNewUser] = useState<Omit<User, "id">>({
    name: "",
    email: "",
    role: "user",
  });

  const addUser = () => {
    if (newUser.name && newUser.email) {
      const user: User = {
        id: Math.max(...users.map((u) => u.id), 0) + 1,
        ...newUser,
      };
      setUsers([...users, user]);
      setNewUser({ name: "", email: "", role: "user" });
    }
  };

  const deleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const getRoleBadgeClass = (role: User["role"]): string => {
    const classes = {
      admin: "badge-admin",
      user: "badge-user",
      guest: "badge-guest",
    };
    return classes[role];
  };

  return (
    <div className="userlist-container">
      <h2>사용자 목록 관리</h2>
      <p className="description">
        TypeScript 인터페이스와 제네릭을 활용한 사용자 관리 시스템입니다.
      </p>

      <div className="add-user-form">
        <h3>새 사용자 추가</h3>
        <div className="form-group">
          <input
            type="text"
            placeholder="이름"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="이메일"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <select
            value={newUser.role}
            onChange={(e) =>
              setNewUser({ ...newUser, role: e.target.value as User["role"] })
            }
          >
            <option value="admin">관리자</option>
            <option value="user">사용자</option>
            <option value="guest">게스트</option>
          </select>
          <button onClick={addUser} className="btn-add">
            추가
          </button>
        </div>
      </div>

      <div className="users-list">
        <h3>등록된 사용자 ({users.length}명)</h3>
        {users.length === 0 ? (
          <p className="empty-message">등록된 사용자가 없습니다.</p>
        ) : (
          <div className="user-cards">
            {users.map((user) => (
              <div key={user.id} className="user-card">
                <div className="user-info">
                  <h4>{user.name}</h4>
                  <p>{user.email}</p>
                  <span
                    className={`role-badge ${getRoleBadgeClass(user.role)}`}
                  >
                    {user.role === "admin"
                      ? "관리자"
                      : user.role === "user"
                      ? "사용자"
                      : "게스트"}
                  </span>
                </div>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="btn-delete"
                >
                  삭제
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="info-box">
        <h3>타입 정의</h3>
        <pre>{`interface User {
  id: number
  name: string
  email: string
  role: 'admin' | 'user' | 'guest'
}

const [users, setUsers] = useState<User[]>([...])
const [newUser, setNewUser] = useState<Omit<User, 'id'>>({...})`}</pre>
      </div>
    </div>
  );
};

export default UserList;
