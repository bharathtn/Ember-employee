import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        createEmp: function (name, age) {
            alert(name, age);
            var record = this.get('store').createRecord('employee', {
                name: name,
                age: age
            });
            record.save().then(function () {
                alert("Saved!");
            });

        }
    }
});
