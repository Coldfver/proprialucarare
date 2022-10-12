<template>
        <div id="content">
            <h1 id="nav" class="bv-no-focus-ring">

                <span class="bd-content-title">Check</span>
                <hr>
            </h1>
            <b-card-group deck >
                <b-card
                        title="Currency account"
                >
                    <b-card-text>12 lei</b-card-text>
                    <hr>
                </b-card>
                <b-card
                        title="Exchange Rates"
                >
                    <div >
                        <b-table striped hover :items="items"></b-table>
                    </div>
                </b-card>
            </b-card-group>
        </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    { Currency: 40, Well: 'Dickerson', Date: 'Macdonald' },
                ]
            }
        },
    }
</script>