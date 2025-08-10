sap.ui.define(
  ["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel"],
  function (UIComponent, JSONModel) {
    "use strict";

    return UIComponent.extend("mytodo.Component", {
      metadata: {
        manifest: "json",
      },

      init: function () {
        // call base component's init
        UIComponent.prototype.init.apply(this, arguments);

        // Create and set JSON model at the component level, accessible by all views
        var oModel = new JSONModel({
          todos: [
            { text: "Learn UI5", done: false },
            { text: "Build a Todo app", done: true },
          ],
          newTodoText: "",
        });

        this.setModel(oModel);

        // enable routing
        this.getRouter().initialize();
      },
    });
  }
);
