<template>
    <div>
        <b-form @submit.prevent="onSubmit" :id="id">
            <b-form-group  label="Username" >
                <b-form-input
                        v-model="id"
                        placeholder="id"
                        required
                        type="number" min="1" max="20"
                ></b-form-input>
            </b-form-group>
            <b-form-group  label="Username" >
                <b-form-input
                        v-model="userId"
                        placeholder="userId"
                        required
                        type="number" min="1" max="100"
                ></b-form-input>
            </b-form-group>

            <b-form-group  label="Title:" >
                <b-form-input
                        v-model="title"
                        placeholder="Title"
                        required
                ></b-form-input>
            </b-form-group>
            <b-form-group label="Text:" >
                <b-form-textarea
                        v-model="body"
                        :state="null"
                        placeholder="Enter at least 10 characters"
                        rows="3"
                        required
                ></b-form-textarea>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                    title: '',
                    id: '',
                    body: '',
                    userId:''

            }
        },
        methods: {
            onSubmit() {
                const newTodo = {
                    title: this.title,
                    id: this.id,
                    body: this.body,
                    userId: this.userId
                    }
                    this.$emit('add-todo', newTodo)
                    this.$root.$emit('bv::hide::modal', 'edit-modal', '')
                }
            },
    }
</script>
