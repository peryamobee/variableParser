/**
 * Created by pery on 05/10/2015.
 */
function List(){
    this.memebers =[];
    this.lissners = {};

}

List.prototype.add = function (member) {
    this.memebers.push(member);
    this.fireEvent('add', member, this.members)
};
List.prototype.remove = function(member, bu){
    var i = this.memebers.indexOf(member);
    if(i > -1){
        this.memebers.splice(i, 1);
        this.fireEvent('remove',member)
    }
};
List.prototype.eventLisnner = function(event, fn){
    this.lissners[event] = this.lissners[event] || [];
    this.lissners[event].push(fn);
};

List.prototype.fireEvent = function(event){
    var eventList = this.lissners[event] || [];
    for (var i = 0, fn; fn = eventList[i]; i++) {
        var ret = fn.apply(this,arguments);
        if (!ret) break
    }
};