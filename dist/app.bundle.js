/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI_todo/index.js":
/*!******************************!*\
  !*** ./src/UI_todo/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    function createDiv () {
        return document.createElement('div');
    } 

    function createH2 () {
        return document.createElement('h2');
    }

    function createPara () {
        return document.createElement('p');
    }

    function createInput () {
        return document.createElement('input');
    }

    function createListItem () {
        return document.createElement('li');
    }

    function createUL () {
        return document.createElement('ul');
    }



    const body = document.querySelector('body');
    const h1 = document.createElement('h1');
    const button = document.createElement('button');
    const containerDiv = createDiv();
    const headerDiv = createDiv();
    const leftSideDiv = createDiv();
    const rightSideDiv = createDiv();
    const leftSideHeading = createH2();
    const rightSideHeading = createH2();
    const rightSideDivTop = createDiv();

    h1.innerText = 'WHAT TO-DO';
    headerDiv.appendChild(h1);


    leftSideHeading.innerText = 'Projects';
    leftSideDiv.appendChild(leftSideHeading);

    rightSideHeading.innerText = 'Project One Name'
    rightSideDivTop.appendChild(rightSideHeading);
    rightSideDiv.appendChild(rightSideDivTop);



    containerDiv.appendChild(headerDiv);
    containerDiv.appendChild(leftSideDiv);
    containerDiv.appendChild(rightSideDiv);
   
    body.appendChild(containerDiv);
}

/***/ }),

/***/ "./src/to-do-engine/project.js":
/*!*************************************!*\
  !*** ./src/to-do-engine/project.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PROJECT)
/* harmony export */ });
class PROJECT  {
    constructor (name, description) {
        this.name = name;
        this.description = description;
        this.todo_list = [];
    }

    addToDos (todo) {
        this.todo_list.push(todo);
    }

    removeToDo (index) {
        const removedElement = this.todo_list.splice(index, 1)
    }
}

/***/ }),

/***/ "./src/to-do-engine/todo.js":
/*!**********************************!*\
  !*** ./src/to-do-engine/todo.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TODO)
/* harmony export */ });
class TODO {
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _to_do_engine_project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-do-engine/project.js */ "./src/to-do-engine/project.js");
/* harmony import */ var _to_do_engine_todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-do-engine/todo.js */ "./src/to-do-engine/todo.js");
/* harmony import */ var _UI_todo_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI_todo/index.js */ "./src/UI_todo/index.js");




(0,_UI_todo_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

const projectLists = [];
const defaultProject = new _to_do_engine_project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Default Project', 'This is the default project');
projectLists.push(defaultProject);

function createProject (name, description) {
    projectLists.push(new _to_do_engine_project_js__WEBPACK_IMPORTED_MODULE_0__["default"](name, description));
}

function createTodo(title, description, dueDate, priority) {
    return (new _to_do_engine_todo_js__WEBPACK_IMPORTED_MODULE_1__["default"](title, description, dueDate, priority));
}

function addTodoToProject (projectIndex, toDo) {
    let element = projectLists[projectIndex];
    element.addToDos(toDo);
}

function removeTodoFromProject (projectIndex, toDoIndex) {
    let projectElement = projectLists[projectIndex];
    projectElement.removeToDo(toDoIndex);
}

function toggleComplete (toDoName) {
    let completed = toDoName.completed;
    (completed === false) ? (toDoName.completed = true) : (toDoName.completed = false);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUFlLHNDQUFZO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDeERlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2pDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOZ0Q7QUFDTjtBQUNOOztBQUVwQyw2REFBRTs7QUFFRjtBQUNBLDJCQUEyQixnRUFBTztBQUNsQzs7QUFFQTtBQUNBLDBCQUEwQixnRUFBTztBQUNqQzs7QUFFQTtBQUNBLGdCQUFnQiw2REFBSTtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9VSV90b2RvL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90by1kby1lbmdpbmUvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG8tZG8tZW5naW5lL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlRGl2ICgpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIH0gXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVIMiAoKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVBhcmEgKCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUlucHV0ICgpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTGlzdEl0ZW0gKCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVVTCAoKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIH1cblxuXG5cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBjb250YWluZXJEaXYgPSBjcmVhdGVEaXYoKTtcbiAgICBjb25zdCBoZWFkZXJEaXYgPSBjcmVhdGVEaXYoKTtcbiAgICBjb25zdCBsZWZ0U2lkZURpdiA9IGNyZWF0ZURpdigpO1xuICAgIGNvbnN0IHJpZ2h0U2lkZURpdiA9IGNyZWF0ZURpdigpO1xuICAgIGNvbnN0IGxlZnRTaWRlSGVhZGluZyA9IGNyZWF0ZUgyKCk7XG4gICAgY29uc3QgcmlnaHRTaWRlSGVhZGluZyA9IGNyZWF0ZUgyKCk7XG4gICAgY29uc3QgcmlnaHRTaWRlRGl2VG9wID0gY3JlYXRlRGl2KCk7XG5cbiAgICBoMS5pbm5lclRleHQgPSAnV0hBVCBUTy1ETyc7XG4gICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGgxKTtcblxuXG4gICAgbGVmdFNpZGVIZWFkaW5nLmlubmVyVGV4dCA9ICdQcm9qZWN0cyc7XG4gICAgbGVmdFNpZGVEaXYuYXBwZW5kQ2hpbGQobGVmdFNpZGVIZWFkaW5nKTtcblxuICAgIHJpZ2h0U2lkZUhlYWRpbmcuaW5uZXJUZXh0ID0gJ1Byb2plY3QgT25lIE5hbWUnXG4gICAgcmlnaHRTaWRlRGl2VG9wLmFwcGVuZENoaWxkKHJpZ2h0U2lkZUhlYWRpbmcpO1xuICAgIHJpZ2h0U2lkZURpdi5hcHBlbmRDaGlsZChyaWdodFNpZGVEaXZUb3ApO1xuXG5cblxuICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChoZWFkZXJEaXYpO1xuICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChsZWZ0U2lkZURpdik7XG4gICAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHJpZ2h0U2lkZURpdik7XG4gICBcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lckRpdik7XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUFJPSkVDVCAge1xuICAgIGNvbnN0cnVjdG9yIChuYW1lLCBkZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMudG9kb19saXN0ID0gW107XG4gICAgfVxuXG4gICAgYWRkVG9Eb3MgKHRvZG8pIHtcbiAgICAgICAgdGhpcy50b2RvX2xpc3QucHVzaCh0b2RvKTtcbiAgICB9XG5cbiAgICByZW1vdmVUb0RvIChpbmRleCkge1xuICAgICAgICBjb25zdCByZW1vdmVkRWxlbWVudCA9IHRoaXMudG9kb19saXN0LnNwbGljZShpbmRleCwgMSlcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVE9ETyB7XG4gICAgY29uc3RydWN0b3IgKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcbiAgICB9XG4gICAgc2V0IHByaW9yaXR5KHZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIFwiSElHSFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX3ByaW9yaXR5ID0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICBjYXNlIFwiTE9XXCI6XG4gICAgICAgICAgICAgICAgIHRoaXMuX3ByaW9yaXR5ID0gMDtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBjb21wbGV0ZWQgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29tcGxldGVkXG4gICAgfVxuXG4gICAgc2V0IGNvbXBsZXRlZCAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fY29tcGxldGVkID0gdmFsdWU7XG4gICAgfVxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBQUk9KRUNUIGZyb20gJy4vdG8tZG8tZW5naW5lL3Byb2plY3QuanMnO1xuaW1wb3J0IFRPRE8gZnJvbSAnLi90by1kby1lbmdpbmUvdG9kby5qcyc7XG5pbXBvcnQgVUkgZnJvbSAnLi9VSV90b2RvL2luZGV4LmpzJztcblxuVUkoKTtcblxuY29uc3QgcHJvamVjdExpc3RzID0gW107XG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBQUk9KRUNUKCdEZWZhdWx0IFByb2plY3QnLCAnVGhpcyBpcyB0aGUgZGVmYXVsdCBwcm9qZWN0Jyk7XG5wcm9qZWN0TGlzdHMucHVzaChkZWZhdWx0UHJvamVjdCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QgKG5hbWUsIGRlc2NyaXB0aW9uKSB7XG4gICAgcHJvamVjdExpc3RzLnB1c2gobmV3IFBST0pFQ1QobmFtZSwgZGVzY3JpcHRpb24pKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgcmV0dXJuIChuZXcgVE9ETyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSk7XG59XG5cbmZ1bmN0aW9uIGFkZFRvZG9Ub1Byb2plY3QgKHByb2plY3RJbmRleCwgdG9Ebykge1xuICAgIGxldCBlbGVtZW50ID0gcHJvamVjdExpc3RzW3Byb2plY3RJbmRleF07XG4gICAgZWxlbWVudC5hZGRUb0Rvcyh0b0RvKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVG9kb0Zyb21Qcm9qZWN0IChwcm9qZWN0SW5kZXgsIHRvRG9JbmRleCkge1xuICAgIGxldCBwcm9qZWN0RWxlbWVudCA9IHByb2plY3RMaXN0c1twcm9qZWN0SW5kZXhdO1xuICAgIHByb2plY3RFbGVtZW50LnJlbW92ZVRvRG8odG9Eb0luZGV4KTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlQ29tcGxldGUgKHRvRG9OYW1lKSB7XG4gICAgbGV0IGNvbXBsZXRlZCA9IHRvRG9OYW1lLmNvbXBsZXRlZDtcbiAgICAoY29tcGxldGVkID09PSBmYWxzZSkgPyAodG9Eb05hbWUuY29tcGxldGVkID0gdHJ1ZSkgOiAodG9Eb05hbWUuY29tcGxldGVkID0gZmFsc2UpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9