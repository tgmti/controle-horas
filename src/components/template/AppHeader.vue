<template>
    
    <div id="appheader">
        <v-navigation-drawer
        persistent
        :mini-variant="miniVariant"
        :clipped="clipped"
        v-model="drawer"
        enable-resize-watcher
        fixed
        app
        >

        <v-list>
            <v-list-tile
            value="true"
            v-for="(item, i) in items" :key="i"
            >
                <router-link :to="item.path">
                    <v-list-tile-action>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.name"></v-list-tile-title>
                    </v-list-tile-content>
                </router-link>
            </v-list-tile>
        </v-list>
        </v-navigation-drawer>

        <v-toolbar
            app
            :clipped-left="clipped"
        >
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-btn icon @click.stop="miniVariant = !miniVariant">
                <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
            </v-btn>
            <v-btn icon @click.stop="clipped = !clipped">
                <v-icon>web</v-icon>
            </v-btn>
            <v-btn icon @click.stop="fixed = !fixed">
                <v-icon>web</v-icon>
            </v-btn>
            <v-toolbar-title v-text="title"></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click.stop="rightDrawer = !rightDrawer">
                <v-icon>menu</v-icon>
            </v-btn>
        </v-toolbar>


        <v-navigation-drawer
        temporary
        :right="right"
        v-model="rightDrawer"
        fixed
        app
        >
        <v-list>
            <v-list-tile @click="right = !right">
            <v-list-tile-action>
                <v-icon>compare_arrows</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
            </v-list-tile>
        </v-list>
        </v-navigation-drawer>

    </div>


</template>

<script>
import {routes} from "@/router"

export default {
    name: "AppHeader",
    data () {
        return {
            items: routes,

            fixed: false,
            rightDrawer: false,

            clipped: false,
            drawer: true,
            miniVariant: false,
            right: true,
            title: 'Controle de Horas'

        }
    }
}
</script>

<style>

</style>
