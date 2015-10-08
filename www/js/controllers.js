angular.module('starter.controllers', ['ion-gallery'])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
        $scope.modal.show();
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



.controller('TeamCtrl', function ($scope, $ionicModal, $timeout, $ionicScrollDelegate, $location) {

    $scope.gallery = [{
        image: "img/team/t1.jpg",
        name: "Roman Vision",
        logo: "img/team-logo/t1.jpg",

        }, {
        image: "img/team/t2.jpg",
        name: "Yuvamann",
        logo: "img/team-logo/t2.jpg",

        }, {
        image: "img/team/t3.jpg",
        name: "Khelaiya",
        logo: "img/team-logo/t3.png",

        }, {
        image: "img/team/t4.jpg",
        name: "Nirmall Roals",
        logo: "img/team-logo/t4.png",

        }, {
        image: "img/team/t5.jpg",
        name: "Vinipull",
        logo: "img/team-logo/t5.png",

        }, {
        image: "img/team/t6.jpg",
        name: "Borivali Stars",
        logo: "img/team-logo/t6.png",

        }, {
        image: "img/team/t7.jpg",
        name: "Roaring Lions",
        logo: "img/team-logo/t7.png",

        }, {
        image: "img/team/t8.jpg",
        name: "Jyoti Giants",
        logo: "img/team-logo/t8.jpg",


        }, {
        image: "img/team/t9.jpg",
        name: "Balzing Blues",
        logo: "img/team-logo/t9.png",

        }, {
        image: "img/team/t10.jpg",
        name: "Khelbaajz",
        logo: "img/team-logo/t10.png",

        }, {
        image: "img/team/t11.jpg",
        name: "Transform Heroes",
        logo: "img/team-logo/t11.png",
        }];

    $scope.gallerys = _.chunk($scope.gallery, 3);
})

.controller('TeamDetailCtrl', function ($scope, $stateParams) {
    $scope.sponsor = [{
        image: "img/sponsor/1.png",
    }, {
        image: "img/sponsor/2.png",
    }, {
        image: "img/sponsor/3.png",
    }, {
        image: "img/sponsor/1.png",
    }, {
        image: "img/sponsor/2.png",
    }, {
        image: "img/sponsor/3.png",
    }, {
        image: "img/sponsor/s2.jpg",
    }, {
        image: "img/sponsor/s3.jpg",
    }, {
        image: "img/sponsor/s4.jpg",
    }, {
        image: "img/sponsor/s1.jpg",
    }, {
        image: "img/sponsor/s2.jpg",
    }, {
        image: "img/sponsor/s3.jpg",
    }, {
        image: "img/sponsor/s4.jpg",
    }];
    $scope.repeatslides = _.chunk($scope.sponsor, 4);

    $scope.gallery = [{
        "src": "img/gallery/1.jpg",
        //      "sub":"lnzdvnsjd"

    }, {
        "src": "img/gallery/2.jpg",

    }, {
        "src": "img/gallery/3.jpg",

    }, {
        "src": "img/gallery/4.jpg",

    }, {
        "src": "img/gallery/1.jpg",

    }, {
        "src": "img/gallery/2.jpg",

    }, {
        "src": "img/gallery/3.jpg",

    }, {
        "src": "img/gallery/4.jpg",

    }];

    $scope.gallerys = _.chunk($scope.gallery, 3);
    console.log($scope.gallerys);
    $scope.tabs = 'photos';
    $scope.tab = 'about';
    $scope.classa = 'active';
    $scope.classb = '';

    $scope.tabchange = function (tabs, g) {
        //        console.log(tab);
        $scope.tabs = tabs;
        if (g == 1) {
            $scope.classg = "active";
            $scope.classh = '';
            $scope.classi = '';
        } else if (g == 2) {
            $scope.classg = '';
            $scope.classh = "active";
            $scope.classi = '';
        } else {
            $scope.classg = '';
            $scope.classh = '';
            $scope.classi = "active";
        }
    };

    $scope.tabchangemain = function (tab, a) {
        //        console.log(tab);
        $scope.tab = tab;
        if (a == 1) {
            $scope.classa = "active";
            $scope.classb = '';
            $scope.classc = '';
            $scope.classd = '';
            $scope.classe = '';
            $scope.classf = '';
        } else if (a == 2) {
            $scope.classa = '';
            $scope.classb = "active";
            $scope.classc = '';
            $scope.classd = '';
            $scope.classe = '';
            $scope.classf = '';
        } else if (a == 3) {
            $scope.classa = '';
            $scope.classb = '';
            $scope.classc = "active";
            $scope.classd = '';
            $scope.classe = '';
            $scope.classf = '';
        } else if (a == 4) {
            $scope.classa = "";
            $scope.classb = '';
            $scope.classc = '';
            $scope.classd = "active";
            $scope.classe = '';
            $scope.classf = '';
        } else if (a == 5) {
            $scope.classa = "";
            $scope.classb = '';
            $scope.classc = '';
            $scope.classd = '';
            $scope.classe = "active";
            $scope.classf = '';
        } else if (a == 6) {
            $scope.classa = "";
            $scope.classb = '';
            $scope.classc = '';
            $scope.classd = '';
            $scope.classe = '';
            $scope.classf = "active";
        }
    };
    

});
