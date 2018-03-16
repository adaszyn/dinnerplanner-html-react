export class DinnerStore {
  constructor() {
    this._numberOfGuests = 0;
    this._menu = {};
    if ("localStorage" in window) {
      if (!localStorage.menu) {
          localStorage.menu = JSON.stringify({});
      }
      if (!localStorage.numberOfGuests) {
          localStorage.numberOfGuests = "1";
      }
    }
  }
  get menu() {
    if ("localStorage" in window) {
      return JSON.parse(localStorage.menu);
    }
    return this._menu;
  }
  set menu(menu) {
    if ("localStorage" in window) {
      localStorage.menu = JSON.stringify(menu);
    }
  }
  get numberOfGuests() {
    if ("localStorage" in window) {
      return parseInt(localStorage.numberOfGuests, 10);
    }
    return this._numberOfGuests;
  }
  set numberOfGuests(value) {
    if ("localStorage" in window) {
      localStorage.numberOfGuests = value;
    }
    this._numberOfGuests = value;
  }

  addItem = dish => {
    const menu = this.menu;
    this.menu = { ...menu, [dish.id]: dish };
  };
}
