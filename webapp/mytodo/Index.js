sap.ui.getCore().attachInit(function () {
  sap.ui.core.Component.create({
    name: "mytodo",
    manifestFirst: true,
  }).then(function (oComponent) {
    new sap.m.Shell({
      app: new sap.ui.core.ComponentContainer({
        component: oComponent,
        height: "100%",
      }),
    }).placeAt("content");
  });
});
