angular.module('starter.controllers', [])

    .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {
        // Form data for the login modal
        $scope.loginData = {};
        $scope.fbLoginStatus = 'Loading..';

        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeLogin = function () {
            //$scope.modal.hide();
        };

        // Open the login modal
        $scope.login = function () {
            //$scope.modal.show();
        };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function () {
            console.log('Doing login', $scope.loginData);

            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function () {
                $scope.closeLogin();
            }, 1000);
        };
    })

    .controller('PlaylistsCtrl', function ($scope) {
        $scope.playlists = [
            {title: 'Reggae', id: 1}
        ];

        $scope.iterations = 0;

        document.addEventListener('deviceready', function () {
            console.log('Init Called');
            window.plugin.backgroundMode.enable();
            setInterval(function () {
                $scope.iterations++;
                navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
            }, 1000);
        }, false);

        $scope.coords = {
            longitude: "Loading..",
            latitude: "Loading.."
        };

        var geoSuccess = function (position) {
            $scope.coords = position.coords;
            $scope.$apply();
        };

        var geoError = function () {
            $scope.coords = {
                longitude: "Error",
                latitude: "Error"
            }
        };

        $scope.fbLoginStatus = 'Waiting for click';
        $scope.initFb = function () {
            window.plugin.facebookConnectPlugin.browserInit('566304933457592');
            window.plugin.facebookConnectPlugin.login(function () {
                $scope.fbLoginStatus = 'success';
            }, function () {
                $scope.fbLoginStatus = 'error';
            });
        };
    })

    .controller('PlaylistCtrl', function ($scope, $stateParams) {
    });
