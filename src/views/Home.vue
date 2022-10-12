<template>
    <div id="content">
        <h1 id="nav" class="bv-no-focus-ring">
            <span class="bd-content-title">Crate</span>
            <hr>
        </h1>
        <b-card-group deck>
            <b-card title="Create" >
                <b-card-text>
                    <div>
                        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                            <b-form-group
                                    id="input-group-1"
                                    label="Email address:"
                                    label-for="input-1"
                            >
                                <b-form-input
                                        id="input-1"
                                        v-model="form.email"
                                        type="email"
                                        placeholder="Enter email"
                                        required
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                                <b-form-input
                                        id="input-2"
                                        v-model="form.name"
                                        placeholder="Enter name"
                                        required
                                ></b-form-input>
                            </b-form-group>
                            <b-button type="submit" variant="primary">Submit</b-button>
                        </b-form>
                    </div>
                </b-card-text>
            </b-card>

            <b-card title="Redact" >
                <b-card-text>
                    <div>
                        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                            <b-form-group
                                    id="input-group-1"
                                    label="Email address:"
                                    label-for="input-1"
                            >
                                <b-form-input
                                        id="input-1"
                                        v-model="form.email"
                                        type="email"
                                        placeholder="Enter email"
                                        required
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                                <b-form-input
                                        id="input-2"
                                        v-model="form.name"
                                        placeholder="Enter name"
                                        required
                                ></b-form-input>
                            </b-form-group>
                            <b-button type="submit" variant="primary">Submit</b-button>
                        </b-form>
                    </div>
                </b-card-text>
            </b-card>
        </b-card-group>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    email: '',
                    name: '',
                    food: null,
                    checked: []
                },
                foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
                show: true
            }
        },
        methods: {
            onSubmit(event) {
                event.preventDefault()
                alert(JSON.stringify(this.form))
            },
            onReset(event) {
                event.preventDefault()
                // Reset our form values
                this.form.email = ''
                this.form.name = ''
                this.form.food = null
                this.form.checked = []
                // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
            }
        }
    }
</script>