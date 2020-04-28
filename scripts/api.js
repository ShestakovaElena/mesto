class Api {
  constructor(option) {
    this.option = option;
  }

  getUserData() {
    return fetch(`${this.option.baseUrl}/users/me`, {
      method: 'GET',
      headers: this.option.headers,
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(`Не удалось получить данные. Ошибка:${res.status}`))
      })
      .catch((err) => {
        return Promise.reject(new Error(`Ошибка:${err.message}`))
      });
  }

  getInitialCards() {
    return fetch(`${this.option.baseUrl}/cards`, {
      method: 'GET',
      headers: this.option.headers,
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(`Не удалось получить данные. Ошибка:${res.status}`))
      })
      .catch((err) => {
        return Promise.reject(new Error(`Ошибка:${err.message}`))
      });
  }

  sendUserData(name, about) {
    return fetch(`${this.option.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.option.headers,

      body: JSON.stringify({
        name: name,
        about: about
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(`Не удалось получить данные. Ошибка:${res.status}`))
      })
      .catch((err) => {
        return Promise.reject(new Error(`Ошибка:${err.message}`))
      });
  }
}