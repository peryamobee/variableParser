/**
 * Created by pery on 05/10/2015.
 */

angular.module('parserApp')
    .factory('fireList', function ($firebaseArray,user) {
        var firebaseUsers = new Firebase('https://firelife.firebaseio.com/users');
        var listRef = firebaseUsers.child('603013791'+'/lists');

        function List(name){
            this.store = listRef.child('name');
            this.memebers =[];
            this.lissners = {};

        }

        List.prototype.add = function (key,member) {
            var me = this;
            this.store.child(key).set(member, function (error) {
                me.fireEvent('add', key, member)
            })

        };
        List.prototype.remove = function(key){
            var me = this;
            this.store.child(key).remove(function (error) {
                me.fireEvent('remove',key)
            });

        };
        List.prototype.eventLisnner = function(event, fn){
            this.lissners[event] = this.lissners[event] || [];
            this.lissners[event].push(fn);
        };

        List.prototype.fireEvent = function(event){
            var eventList = this.lissners[event] || [];
            for (var i = 0, fn; fn = eventList[i]; i++) {
                var ret = fn.apply(this,[].slice.apply(arguments,1));
                if (!ret) break
            }
        };

        return List;
    });
