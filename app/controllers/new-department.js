import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newDep: function (name, dno) {
            alert(name, dno);
            var record = this.get('store').createRecord('department', {
                name: name,
                dno: dno
            });
            record.save().then(function () {
                alert("Saved!");
            });

        }
    }
});
