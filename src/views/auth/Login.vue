<template>
  <d-container fluid class="main-content-container px-4">
    <article class="card-body mx-auto" style="max-width: 400px;">
      <h4 class="card-title mt-3 text-left">Login</h4>
      <div class="alert alert-success" role="alert"
      v-if="output && output.code === 200 && output.data">
        <h5 class="text-white mb-0" v-html="'You logged in as ' + output.data.name"></h5>
      </div>
      <div class="alert alert-info" v-if="loading && !output.data">
        <h5 class="text-white mb-0">Loading!!!</h5>
      </div>
      <div class="alert alert-danger" role="alert" v-if="errored">
        <h5 class="text-white mb-0">Username or password invalid!</h5>
      </div>
      <form>
        <div class="form-group input-group">
          <div class="invalid-input" v-if="errors.has('email')">
            <span class="invalid-text">Please enter valid email</span>
            <div class="invalid-triangle_down"></div>
          </div>
          <input class="form-control" placeholder="Email"
             type="email" v-model="u_username" name="email"
             v-validate="'required|email'"
             :class="{'is-invalid': errors.has('email')}">
        </div> <!-- form-group// -->
        <div class="form-group input-group">
          <div class="invalid-input" v-if="errors.has('password')">
            <span class="invalid-text">Please enter valid password</span>
            <div class="invalid-triangle_down"></div>
          </div>
          <input class="form-control" placeholder="Password"
          v-validate="'required'"
          name="password"
          :class="{'is-invalid': errors.has('password')}"
          type="password" v-model="u_password">
        </div> <!-- form-group// -->
        <div class="form-group">
          <button @click="login" type="button"
          class="btn btn-primary btn-block secondary-bg"
          :class="{'disabled' : loading}"
          :disabled="output.code === 200 || loading ? true : false">
            Login </button>
        </div> <!-- form-group// -->
        <p class="text-center" v-if="output.code !== 200">Don't have an account?
          <router-link class="secondary-color" to="/registration">
          Register</router-link>
        </p>
      </form>
    </article>
    <footer class="page-footer font-small unique-color-dark pt-4">

      <!-- Footer Elements -->
      <div class="container">

        <!-- Call to action -->
        <ul class="list-unstyled list-inline text-center py-2">
          <li class="list-inline-item">
            <h3 class="text-white">Footer</h3>
          </li>
        </ul>
        <!-- Call to action -->

      </div>
      <!-- Footer Elements -->

    </footer>

  </d-container>
</template>
<style lang="scss" scoped>
  .secondary-bg {
    background-color: #aa66cc !important;
    border-color: #aa66cc !important;
    &:hover {
      background-color: #8d46b1 !important;
      border-color: #8d46b1 !important;
    }
  }

  .secondary-color {
    color: #aa66cc !important;
    &:hover {
      color: #8d46b1 !important;
    }
  }

  .page-footer {
    position: absolute;
    width: 100%;
    float: left;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #aa66cc !important;
  }
  .invalid-input {
    position: absolute;
    -webkit-transform: translate3d(119px, 61px, 0px);
    transform: translate3d(119px, 61px, 0px);
    top: 0px;
    left: 0px;
    will-change: transform;
    margin: -100px -20px;
    z-index: 10;
    .invalid-text {
      background-color: #cb2431;
      display: inline-block;
      padding: 3px 16px;
      border: 0;
      border-radius: 2px;
      box-shadow: 0 0 0 1px rgba(139, 3, 0, .75), 0 1px 10px rgba(0, 0, 0, .35);
      color: #fff;
      font-size: 0.83em;
    }

    .invalid-triangle_down {
      width: 0;
      height: 0;
      z-index: 11;
      margin-left: 30%;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 10px solid #cb2431;
    }
  }
</style>


<script>
// First Row of Posts

export default {
  name: 'login',
  data() {
    return {
      u_password: '',
      u_username: '',
      output: [
        {
          data: '',
          code: '',
          message: '',
        },
      ],
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
          this.errored = false;
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
              if (currentObj.output.code === 200) {
                setTimeout(() => {
                  this.loading = false;
                }, 3000);
              } else {
                this.loading = false;
                this.errored = true;
              }
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
