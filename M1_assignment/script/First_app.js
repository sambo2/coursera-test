(function()
{
  'use strict';
  var appT = angular.module('moduleOneapp', []);
      appT.controller('ViewController', ViewController);
      //injection to avoid manification error
      ViewController.$inject = ['$scope'];
      function ViewController($scope)
      {
            //this function manipulate the string into array
             $scope.manuipulate_string = function ()
             {
               //set the display message to empty
               $scope.msg_display = "";
               var msg_string = "";
               //this checks if the input box contain value
               if ($scope.source_string != null && $scope.source_string != "")
               {
                  //if the input box is not empty the value is set to a variable
                  var original_list = $scope.source_string;
                  //this variable contains the delimieter for seperation
                  var saperatorString = ",";
                  //this split the string into array list
                  var new_list = original_list.split(saperatorString);
                  //this returns the length of the new list
                  var array_size = new_list.length;
                       //checks if is less than or equal to 3
                        if (array_size <= 3)
                        {
                          //set the message string to new message
                           msg_string = "Enjoy!";
                          //assign to msg display to render in the view
                           $scope.msg_display = msg_string;
                        }
                        else
                        {
                           msg_string = "Too Much!";
                           $scope.msg_display = msg_string;
                        }
                    }
               else
               {
                   //display the message below if the input box is empty
                   msg_string = "please enter data first!";
                   $scope.msg_display = msg_string;
               }
             }
          }

})(); //end of the code
