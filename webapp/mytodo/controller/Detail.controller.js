sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";
  return Controller.extend("mytodo.controller.Detail", {
    onInit: function () {
      const oRouter = this.getOwnerComponent().getRouter();
      oRouter
        .getRoute("Detail")
        .attachPatternMatched(this._onObjectMatched, this);
    },
    _onObjectMatched: function (oEvent) {
      const iIndex = oEvent.getParameter("arguments").todoIndex;
      this.getView().bindElement("/todos/" + iIndex);
    },
    onNavBack: function () {
      this.getOwnerComponent().getRouter().navTo("Home");
    },
  });
});
