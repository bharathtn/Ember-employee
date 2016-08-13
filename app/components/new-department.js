import Ember from 'ember';

export default Ember.Component.extend({
    actions:{
        submit:function(){
            var name=this.get('name');
            var age=this.get('dno');
            this.get('onsubmit')(name,age);

        }
    }
});
