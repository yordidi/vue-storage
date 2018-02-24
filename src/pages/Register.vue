<template>
	<div class="m-register">
		<h4>保存未提交的注册信息</h4>
		<b-form @submit="onSubmit">
		      <b-form-group id="exampleInputGroup1"
		                    label="Email address:" label-for="exampleInput1"
		                    description="We'll never share your email with anyone else.">
		        <b-form-input id="exampleInput1"
		                      type="email" v-model="form.email" required
		                      placeholder="Enter email"
		        ></b-form-input>
		      </b-form-group>
		      <b-form-group id="exampleInputGroup2"
		                    label="Your Name:" label-for="exampleInput2">
		        <b-form-input id="exampleInput2"
		                      type="text" v-model="form.name" required
		                      placeholder="Enter name"
		        ></b-form-input>
		      </b-form-group>
		      <b-form-group id="exampleInputGroup3"
		                    label="Food:" label-for="exampleInput3">
		        <b-form-select id="exampleInput3"
		                      :options="foods" required
		                      v-model="form.food"
		        ></b-form-select>
		      </b-form-group>
		      <b-form-group id="exampleGroup4">
		        <b-form-checkbox v-model="form.checked" id="exampleInput4">
		          Check me out
		        </b-form-checkbox>
		      </b-form-group>
		      <b-button type="submit" variant="primary">Submit</b-button>
		      <b-button type="reset" variant="secondary">Reset</b-button>
		    </b-form>
	</div>
</template>

<script>
  import store from 'store2'
	export default {
	   data() {
	    return {
		     form: {
		       email: '',
		       name: '',
		       food: null,
		       checked: false,
		       secret: 'S3CR3T',
           food: null
		     },
		     foods: [
		       { text:'Select One', value:null },
		       'Carrots','Beans','Tomatoes','Corn'
		     ],
         isSended: false
	   	}
	   },
	   methods: {
	     onSubmit(evt) {
	       evt.preventDefault();
         this.isSended = true;
	       alert(JSON.stringify(this.form));
	     }
	   },

	   //路由离开钩子
	   beforeRouteLeave(to, from, next) {
      if (this.isSended) {
        // 已经保存过信息，不做处理
        next(true)
      } else {
        // 有未保存的信息，提醒是否确定离开，并在用户离开后，存储信息
        const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
        if (answer) {
          store.session('form', this.form)
          next(true)
        } else {
          next(false)
        }
      }

	   },
	   //路由进入钩子
	   beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.form = store.session('form')
      })
	   },

	};

</script>

<style>
	.m-register {
		width: 600px;
		margin: 50px auto 0;
	}
</style>
