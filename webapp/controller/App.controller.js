sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  function (Controller, JSONModel) {
    "use strict";
    return Controller.extend("mytodo.controller.App", {
      onInit: function () {
        const oData = {
          todos: [
            { text: "Learn UI5", done: false },
            { text: "Build a Todo app", done: true },
          ],
          newTodoText: "", // <-- track input text
        };

        const oModel = new JSONModel(oData);
        this.getView().setModel(oModel);
      },

      onAddTodo: function () {
        const oModel = this.getView().getModel();
        const data = oModel.getData();
        if (!data.newTodoText.trim()) {
          return; // ignore empty
        }
        data.todos.push({ text: data.newTodoText.trim(), done: false });
        data.newTodoText = ""; // reset input
        oModel.setData(data); // triggers UI refresh
      },
      onToggleTodo: function (oEvent) {
        const oItem = oEvent.getSource();
        const oContext = oItem.getBindingContext();
        const oModel = oContext.getModel();
        const bDone = oContext.getProperty("done");

        oModel.setProperty(oContext.getPath() + "/done", !bDone);
      },
      onClearTodo: function () {
        const oModel = this.getView().getModel();
        const oData = oModel.getData();
        oData.todos = [];
        oModel.setData(oData);
      },
      onDeleteTodo: function (oEvent) {
        const oButton = oEvent.getSource(); // The button clicked
        const oContext = oButton.getBindingContext(); // Context of the row
        const oModel = oContext.getModel();
        const sPath = oContext.getPath(); // e.g. "/todos/2"

        // Get array from model
        const aTodos = oModel.getProperty("/todos");

        // Extract index from path
        const iIndex = parseInt(sPath.split("/").pop(), 10);

        // Remove todo
        aTodos.splice(iIndex, 1);

        // Update model
        oModel.setProperty("/todos", aTodos);
      },
    });
  }
);
