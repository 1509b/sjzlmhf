'use strict';

/**
 * @ngdoc overview
 * @name yeomanApp
 * @description
 * # yeomanApp
 *
 * Main module of the application.
 */
angular.module('yeoman', ['ui.router']).config(function($stateProvider){
  	  $stateProvider.state("sma",{
	  		url:"sma",
	       templateUrl:'views/sma.html',
	  		controller:"sma"
	  	}).state("j-center",{
	  		url:"j-center",
	       templateUrl:'views/j-center.html',
	  		controller:"j-center"
	  	}).state("f_index",{
	  		url:"f_index",
	       templateUrl:'views/f_index.html',
	  		controller:"f_index"
	  	}).state("f_index1",{
	  		url:"f_index1",
	       templateUrl:'views/f_index1.html',
	  		controller:"f_index1"
	  	}).state("mxyTwo",{
	  		url:"mxyTwo",
	       templateUrl:'views/mxyTwo.html',
	  		controller:"os"
	  	}).state("history",{
	  		url:"history",
	       templateUrl:'views/history.html',
	  		controller:"history"
	  	}).state("mxy",{
	  		url:"mxy",
	       templateUrl:'views/mxy.html',
	  		controller:"mxy"
	  	})
  });
