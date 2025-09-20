/*global QUnit*/

sap.ui.define([
	"sap/btp/helloworldui/controller/Hello_World.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Hello_World Controller");

	QUnit.test("I should test the Hello_World controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
