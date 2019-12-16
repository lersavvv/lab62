import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import UserList from "./UserList";
import Preloader from "./Preloader";
import Button from "./Button";

class TenUsers extends React.Component {
  //добавляем конструктор класса в котором указываем значание начальной переменной this.state
  constructor(props) {
    super(props);
    this.state = { users: [] };
    this.state = { zagruzka: false };
    this.GetUsers = this.GetUsers.bind(this);
  }

  async GetUsers() {
    //устанавливает состояние
    this.setState({ zagruzka: true });
    const response = await fetch("https://randomuser.me/api/?results=10");
    const usersJSON = await response.json();

    if (usersJSON && usersJSON.results) {
      this.setState({ users: usersJSON.results, zagruzka: false });
    }
  }

  render() {
    const { users, zagruzka } = this.state;

    if (zagruzka) return <Preloader />;
    return (
      <div>
        <h1>Информация о пользователях</h1>
        <Button handleClick={() => this.GetUsers()} label={"Обновить"} />
        <div>{users && <UserList users={users} />}</div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<TenUsers />, rootElement);
