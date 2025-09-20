sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller, MessageBox) => {
    "use strict";

    return Controller.extend("sap.btp.helloworldui.controller.Hello_World", {
        onInit() {
        },
        onPress: function () {
            MessageBox.alert("You have been alerted!");
        }
    });
});