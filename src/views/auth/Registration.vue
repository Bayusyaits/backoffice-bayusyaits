<template>
  <d-container fluid class="main-content-container px-4">
    <article class="card-body mx-auto" style="max-width: 400px;">
      <h4 class="card-title mt-3 text-left">Registration</h4>
      <div class="alert alert-success" role="alert"
       v-if="output && output.code == 200">
        <h5 v-html="output.message"></h5>
      </div>
      <div class="alert alert-danger" role="alert" v-if="errored">
        <h5 class="text-white mb-0">Please enter valid data!</h5>
      </div>
      <div class="alert alert-info" v-if="loading && !output.code">
        <h5 class="text-white mb-0">Loading!!!</h5>
      </div>
      <form>
        <div class="form-group input-group">
          <div class="invalid-input" v-if="errors.has('firstname')">
            <span class="invalid-text">Please enter valid firstname</span>
            <div class="invalid-triangle_down"></div>
          </div>
          <input v-validate="'required|alpha'" v-model="u_firstname"
            class="form-control" placeholder="Full name" type="text"
            name="firstname"
            :class="{'is-invalid': errors.has('firstname')}">
        </div> <!-- form-group// -->
        <div class="form-group input-group">
          <div class="invalid-input" v-if="errors.has('lastname')">
            <span class="invalid-text">Please enter valid lastname</span>
            <div class="invalid-triangle_down"></div>
          </div>
          <input v-validate="'required|alpha'" v-model="u_lastname"
          class="form-control" placeholder="Last name" type="text"
          name="lastname"
          :class="{'is-invalid': errors.has('lastname')}">
        </div> <!-- form-group// -->
        <div class="form-group input-group">
        <select class="custom-select" v-validate="'included:+621,+628'"
        style="max-width: 120px;" data-vv-as="selected_area" v-model="u_area_number">
            <option value="+628">+628</option>
            <option value="+621">+621</option>
        </select>
        <div class="invalid-input" v-if="errors.has('phone_number')">
          <span class="invalid-text">Please enter valid indonesia phone number</span>
          <div class="invalid-triangle_down"></div>
        </div>
          <input v-validate="'required|numeric'" v-model="u_phone_number"
          class="form-control" placeholder="Phone number"
          name="phone_number"
          :class="{'is-invalid': errors.has('phone_number')}" type="text">
        </div> <!-- form-group// -->

        <div class="form-group input-group">
          <label class="form-label" for="month">Date of birth</label>
        </div>
        <div class="form-group input-group">
          <div class="form-check-inline">
          <select class="custom-select" v-validate="'required'"
          style="max-width: 120px;" data-vv-as="selected"
          id="month" v-model="u_dob.month"
          name="month"
          :class="{'is-invalid': errors.has('month')}">
            <option>Month</option>
            <option value='01'>1</option>
            <option value='02'>2</option>
            <option value='03'>3</option>
            <option value='04'>4</option>
            <option value='05'>5</option>
            <option value='06'>6</option>
            <option value='07'>7</option>
            <option value='08'>8</option>
            <option value='09'>9</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12'>12</option>
          </select>
          </div>
          <div class="form-check-inline">
            <div class="invalid-input" v-if="errors.has('month')
             || errors.has('date') || errors.has('year')">
              <span class="invalid-text">Please enter valid dates</span>
              <div class="invalid-triangle_down"></div>
            </div>
            <select v-validate="'required'"
            class="custom-select" data-vv-as="selected"
            id="date" v-model="u_dob.date"
            name="date"
            :class="{'is-invalid': errors.has('date')}">
              <option>Date</option>
              <option value='01'>1</option>
              <option value='02'>2</option>
              <option value='03'>3</option>
              <option value='04'>4</option>
              <option value='05'>5</option>
              <option value='06'>6</option>
              <option value='07'>7</option>
              <option value='08'>8</option>
              <option value='09'>9</option>
              <option value='10'>10</option>
              <option value='11'>11</option>
              <option value='12'>12</option>
              <option value='13'>13</option>
              <option value='14'>14</option>
              <option value='15'>15</option>
              <option value='16'>16</option>
              <option value='17'>17</option>
              <option value='18'>18</option>
              <option value='19'>19</option>
              <option value='20'>20</option>
              <option value='21'>21</option>
              <option value='22'>22</option>
              <option value='23'>23</option>
              <option value='24'>24</option>
              <option value='25'>25</option>
              <option value='26'>26</option>
              <option value='27'>27</option>
              <option value='28'>28</option>
              <option value='29'>29</option>
              <option value='30'>30</option>
              <option value='31'>31</option>
            </select>
          </div>
          <div class="form-check-inline">
            <select name='year' class="custom-select"
            data-vv-as="selected" v-validate="'required'"
            id="year" v-model="u_dob.year"
            :class="{'is-invalid': errors.has('year')}">
                  <option>Year</option>
                  <option value="2000">2000</option>
                  <option value="1999">1999</option>
                  <option value="1998">1998</option>
                  <option value="1997">1997</option>
                  <option value="1996">1996</option>
                  <option value="1995">1995</option>
                  <option value="1994">1994</option>
                  <option value="1993">1993</option>
                  <option value="1992">1992</option>
                  <option value="1991">1991</option>
                  <option value="1990">1990</option>
                  <option value="1989">1989</option>
                  <option value="1988">1988</option>
                  <option value="1987">1987</option>
                  <option value="1986">1986</option>
                  <option value="1985">1985</option>
                  <option value="1984">1984</option>
                  <option value="1983">1983</option>
                  <option value="1982">1982</option>
                  <option value="1981">1981</option>
                  <option value="1980">1980</option>
                  <option value="1979">1979</option>
                  <option value="1978">1978</option>
                  <option value="1977">1977</option>
                  <option value="1976">1976</option>
                  <option value="1975">1975</option>
                  <option value="1974">1974</option>
                  <option value="1973">1973</option>
                  <option value="1972">1972</option>
                  <option value="1971">1971</option>
                  <option value="1970">1970</option>
                  <option value="1969">1969</option>
                  <option value="1968">1968</option>
                  <option value="1967">1967</option>
                  <option value="1966">1966</option>
                  <option value="1965">1965</option>
                  <option value="1964">1964</option>
                  <option value="1963">1963</option>
                  <option value="1962">1962</option>
                  <option value="1961">1961</option>
                  <option value="1960">1960</option>
                  <option value="1959">1959</option>
                  <option value="1958">1958</option>
                  <option value="1957">1957</option>
                  <option value="1956">1956</option>
                  <option value="1955">1955</option>
                  <option value="1954">1954</option>
                  <option value="1953">1953</option>
                  <option value="1952">1952</option>
                  <option value="1951">1951</option>
                  <option value="1950">1950</option>
                  <option value="1949">1949</option>
                  <option value="1948">1948</option>
                  <option value="1947">1947</option>
                  <option value="1946">1946</option>
                  <option value="1945">1945</option>
                  <option value="1944">1944</option>
                  <option value="1943">1943</option>
                  <option value="1942">1942</option>
                  <option value="1941">1941</option>
                  <option value="1940">1940</option>
            </select>
          </div>
        </div>
        <div class="form-group text-left">
          <div class="form-check form-check-inline">
            <input v-validate="'required|alpha'" type="radio" class="form-check-input"
            id="input-registration_male" value="male" v-model="u_gender"
            name="gender"
            :class="{'is-invalid': errors.has('gender')}">
            <label class="form-check-label" for="input-registration_male">Male</label>
          </div>

          <div class="form-check form-check-inline">
            <input v-validate="'required|alpha'" type="radio" class="form-check-input"
            id="input-registration_female" value="female" v-model="u_gender"
            name="gender"
            :class="{'is-invalid': errors.has('gender')}">
            <label class="form-check-label" for="input-registration_female">Female</label>
          </div>
        </div>
        <div class="form-group input-group">
          <div class="invalid-input" v-if="errors.has('email')">
              <span class="invalid-text">Please enter valid email</span>
              <div class="invalid-triangle_down"></div>
            </div>
          <input v-validate="'required|email'"
            class="form-control" placeholder="Email" type="email"
            v-model.trim="u_username"
            name="email"
            :class="{'is-invalid': errors.has('email')}">
        </div> <!-- form-group// -->
        <div class="form-group">
          <button @click="register" type="button"
            class="btn btn-primary btn-block secondary-bg"
            :class="{'disabled' : loading}"
            :disabled="output.code === 200 || loading ? true : false">
            Register </button>
        </div> <!-- form-group// -->
      </form>
    </article>
    <footer class="page-footer font-small unique-color-dark pt-4"
    :class="[output && output.code == 200 ? 'bg-disabled' : 'bg-active']">

      <!-- Footer Elements -->
      <div class="container">

        <!-- Call to action -->
        <ul class="list-unstyled list-inline text-center py-2">
          <li v-if="output && output.code == 200">
            <router-link class="btn secondary-bg text-white btn-lg btn-block"
             to="/login">Login</router-link>
          </li>
          <li class="list-inline-item" v-else>
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
    position: relative;
    width: 100%;
    float: left;
    &.bg-active {
          background-color: #aa66cc !important;
    }
    &.bg-disabled {
          background-color: #d3a1ec !important;
    }
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
  name: 'registration',
  data() {
    return {
      u_password: '',
      u_firstname: '',
      u_lastname: '',
      u_phone_number: '',
      u_username: '',
      u_gender: '',
      u_mrm: '',
      u_area_number: '',
      u_ip: '',
      u_dob: [
        {
          date: '',
          month: '',
          year: '',
        },
      ],
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
    getIp() {
      $.getJSON('https://ipfind.co/me?auth=<your_api_key>', function (data) {
        this.u_ip = JSON.stringify(data, null, 2);
        console.log(this.u_ip);
      });
    },
    register(e) {
      this.$validator.validate().then((valid) => {
        this.loading = true;
        if (!valid) {
          this.loading = false;
          this.errored = true;
        } else {
          this.errored = false;
          e.preventDefault();
          const currentObj = this;
          this.axios.post('https://backofficeapi.bayusyaits.com/api/users/registration', {
            scope: 'registration',
            form_params: {
              u_firstname: this.u_firstname,
              u_lastname: this.u_lastname,
              u_phone_number: this.u_area_number + this.u_phone_number,
              u_username: this.u_username,
              u_gender: this.u_gender,
              u_dob: `${this.u_dob.year}-${this.u_dob.month}-${this.u_dob.date}`,
              u_password: 'Password8',
              u_mrm: '5550001',
              u_ip: this.u_ip,
            },
            body: {
              operation: 'Add new user',
              keyword: 'User|Registration',
            },
          })
            .then((response) => {
              currentObj.output = response.data;
              if (currentObj.output.code === 200) {
                setTimeout(() => {
                  this.loading = false;
                  // this.$router.push('/login');
                }, 3000);
              } else {
                this.loading = false;
                this.errored = true;
                const clear = async () => {
                  this.u_username = null;
                };
                clear().then(() => {
                  this.$validator.reset();
                });
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
