import React from "react";

import UserAvatar from "./UserAvatar";

class UserCard extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div className="card">
        <UserAvatar image={user.picture.large} />
        <div>
          <b>Имя:</b> {user.name.first}
        </div>
        <div>
          <b>Фамилия:</b> {user.name.last},
        </div>
        <div>
          <b>Пол:</b> {user.gender}
        </div>
        <div>
          <b>Дата рождения:</b> {user.dob.date},
        </div>
        <div>
          <b>Возраст:</b> {user.dob.age},
        </div>
        <div>
          <b>Адрес:</b> {user.location.city}
        </div>
        <div>
          <b>Email:</b> {user.email},
        </div>
        <div>
          <b>Телефон:</b> {user.phone}.
        </div>
      </div>
    );
  }
}

export default UserCard;
