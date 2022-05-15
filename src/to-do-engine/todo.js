export default class TODO {
    constructor (title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    }

    get priority() {
        return this._priority;
    }
    set priority(value) {
        value = value.toString().toUpperCase();
        switch (value) {
            case "HIGH":
                this._priority = 1;
                break;
             case "LOW":
                 this._priority = 0;
                  break;
            default:
                break;
        }
    }

    get completed () {
        return this._completed
    }

    set completed (value) {
        this._completed = value;
    }
};