sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend("mytodo.controller.Home", {
    onTodoPress: function (oEvent) {
      console.log("call");

      // Get the pressed list item (safer than getSource)
      const oItem = oEvent.getParameter("listItem") || oEvent.getSource();

      // If you use a named model, pass its name here: getBindingContext("todos")
      const oContext = oItem.getBindingContext();
      if (!oContext) {
        console.error("No binding context found for pressed item");
        return;
      }

      const sPath = oContext.getPath(); // e.g. "/todos/1"
      const iIndex = sPath.split("/").pop();

      this.getOwnerComponent().getRouter().navTo("Detail", {
        todoIndex: iIndex,
      });
    },
    onAddTodo: function () {
      console.log("call");

      const oModel = this.getView().getModel();
      const data = oModel.getData();
      if (!data.newTodoText.trim()) {
        return; // ignore empty
      }
      data.todos.push({ text: data.newTodoText.trim(), done: false });
      data.newTodoText = ""; // reset input
      oModel.setData(data); // triggers UI refresh
    },
    onClearTodo: function () {
      const oModel = this.getView().getModel();
      const oData = oModel.getData();
      oData.todos = [];
      oModel.setData(oData);
    },
  });
});
