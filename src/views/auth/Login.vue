<template>
  <d-container fluid class="main-content-container px-4">
    <article class="card-body mx-auto" style="max-width: 400px;">
      <h4 class="card-title mt-3 text-center">Login</h4>
      <div class="alert alert-success" role="alert" v-if="output && output.code == 200">
        <h5 v-html="output.message"></h5>
      </div>
      <div class="alert alert-info" v-if="loading">
        <h5 class="text-white mb-0">Loading!!!</h5>
      </div>
      <div class="alert alert-danger" role="alert" v-if="errored">
        <h5 class="text-white mb-0">Please, Check your input data!</h5>
      </div>
      <form>
        <div class="form-group input-group">
          <div class="input-group-prepend">
            <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
        </div>
            <input class="form-control" placeholder="Email"
             type="email" v-model="u_username" name="username"
             v-validate="'required|email'"
             :class="{'is-invalid': errors.has('username')}">
        </div> <!-- form-group// -->
        <div class="form-group input-group">
          <div class="input-group-prepend">
            <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
        </div>
            <input class="form-control" placeholder="Password"
            v-validate="'required|password'"
            name="password"
            :class="{'is-invalid': errors.has('password')}"
            type="password" v-model="u_password">
        </div> <!-- form-group// -->
        <div class="form-group">
            <button @click="login" type="button"
            class="btn btn-primary btn-block"
            :class="{'disabled' : loading}"> Login </button>
        </div> <!-- form-group// -->
        <p class="text-center">Don't have an account? 
          <router-link to="/registration">Register</router-link> 
        </p>
    </form>
    </article>
  </d-container>
</template>

<script>
// First Row of Posts

export default {
  name: 'login',
  data() {
    return {
      u_password: '',
      u_username: '',
      output: null,
      loading: false,
      errored: false,
    };
  },
  methods: {
    login(e) {
      this.$validator.validate().then((valid) => {
        this.loading = true;
        if (!valid) {
          this.loading = false;
          this.errored = true;
        } else {
          this.errored = false;
          e.preventDefault();
          const currentObj = this;
          this.axios.post('https://backofficeapi.bayusyaits.com/api/users/login', {
            scope: 'login',
            form_params: {
              u_username: this.u_username,
              u_password: this.u_password,
            },
            body: {
              operation: 'Get user',
              keyword: 'User|Login',
            },
          })
            .then((response) => {
              currentObj.output = response.data;
              this.loading = false;
            })
            .catch((error) => {
              currentObj.output = error;
            });
        }
      });
    },
  },
};
</script>
