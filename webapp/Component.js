sap.ui.getCore().attachInit(function () {
  sap.ui.require(["sap/ui/core/mvc/XMLView"], function (XMLView) {
    XMLView.create({
      viewName: "mytodo.view.App",
    }).then(function (oView) {
      oView.placeAt("content");
    });
  });
});
