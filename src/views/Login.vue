<template>
    <b-container class="bv-example-row bv-example-row-flex-cols "
                 style="max-width: 20rem;">
        <b-col align-self="center" class="mt-5">
            <div class="vue-tempalte">
                <form>
                    <h3>Sign In</h3>

                    <div class="form-group">
                        <label>Email address</label>
                        <input type="email" class="form-control form-control-lg" />
                    </div>

                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control form-control-lg" />
                    </div>

                    <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>

                    <p class="forgot-password text-right mt-2 mb-4">
                        <router-link to="/forgot-password">Registration</router-link>
                    </p>

                </form>
            </div>
        </b-col>
    </b-container>
</template>