<template>
  <div id="app">
    <NavBar v-if="!showNavigationBar" />
    <Header v-if="showNavigationBar" />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Header from "./components/Header.vue";

// @ is an alias to /src
export default {
  components: { NavBar,Header },
  data() {
    return {
      sngPage: {
        Index: true,
        RoadMap: true,
        ListOfCheckedTransactions: true,
        CheckRentrancy: true,
        SelectSmartContract: true,
        Initial:true,
        UpLoadSc: true,
        ContextOfSmartContract: true,
        LoadContext: true,
        UnFolding: true,
        UpLoadContext: true,
        LTLCheckOption: true,
        CSPSettingType:true,
        CSPNonTemplateSetting:true,
        CSPTemplateSetting:true,
        ContractSpecificProperty:true,
        ContractSpecificPropertyNonTemplate:true,
        GenaralVulSetting:true,
        CheckSmartContract:true
      },
    };
  },
  computed: {
      showNavigationBar() {
        if (this.$route.name in this.sngPage && this.$store.state.data.index === 0) {
          return true;
        }
        return false;
      },
  },
};

</script>

<style>
/* * {
  -webkit-user-select: none;
  -khtml-user-select: none;
  -o-user-select: none;
  user-select: none;
} */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>