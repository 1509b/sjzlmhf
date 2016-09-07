'use strict';

/**
 * @ngdoc overview
 * @name yeomanApp
 * @description
 * # yeomanApp
 *
 * Main module of the application.
 */
angular
  .module('yeoman', ['ui.router']).config(function($stateProvider){
  	  $stateProvider.state("main",{
	  		url:"main",
	  		templateUrl:'../views/main.html',
	  		controller:"main"
	  	})
  });
