<template>
  <div id="main">
    <div id="header">
      <h1>Check Reentrancy Detailed Information</h1>
    </div>

      <div class="grey">
        <span>Details information</span>
      </div>

      <div class="blue">
        <div class="atable">
          <table class="table table-striped table-hover table-sm">
            <thead class="table-inside">
              <tr>
                <th style="width: 10%" scope="col">#</th>
                <th style="width: 30%" scope="col">Smart Contract Name</th>
                <th style="width: 15%" scope="col">Context</th>
                <th style="width: 15%" scope="col">LTL</th>
                <th style="width: 10%" scope="col">Status</th>
                <th style="width: 20%" scope="col">Result</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in getListCheck" v-bind:key="index">
                <th scope="row">{{index+1}}</th>
                <td>{{item[0]}}</td>
                <td>{{item[1]}}</td>
                <td>{{item[2]}}</td>
                <td>{{item[3]}}</td>
                <td>{{item[4]}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    <div id="action">
      <div id="btn-addsc" @click="routing('addsc')">Add Smart Contracts</div>
      <div id="btn" @click="routing('back')">Back</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data () {
    return {
      info: null
    }
  },
  methods: {
    routing(param) {
      if (param == "back") {
        this.$router.push({ name: "ListOfCheckedTransactions" });
        this.$store.commit("setIndex", 0);      

      }
      if (param == "addsc") {
        this.$router.push({ name: "SelectSmartContract" });
         this.$store.commit("setIndex", 2);  
      }
    }, 
    ...mapActions(["setlistcheck"]),//Back to List Of Checked Transactions
  },
  computed: {
    ...mapGetters(["getListCheck"]),
  },

  created() {
    this.setlistcheck(this.$route.query.id);
  },
};
</script>

<style scoped>
.main{
  font-family: Arial, Helvetica, sans-serif;
}
#header {
  text-align: center;
  margin-bottom: 2%;
  margin-top: 2%;
}
.table-inside{
  background-color: #d9edf7;
  color: #3a7694;
}
.blue {
  border-radius: 10px;
  width: 80%; 
  text-align: center;
  margin-left: 10%;
  margin-right: 30%;
  height: 470px;
  color: black;
}
.grey {
  width: 150px;
  height: 30px;
  color: black;
}
.grey {
  margin-left: 11%;
  margin-bottom: 25px;
  background: white;
  z-index: 3;
  position: relative;
}
.blue {
  border: 1px solid #d9edf7;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  margin-top: -40px;
  background: none;
  z-index: 2;
  position: relative;
}

h1 {
  text-align: center;
  font-size: 35px;
  font-weight: bold;
}

.atable {
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  margin-left: 50px;
  margin-top: 50px;
  margin-right: 50px;
  padding-bottom: 15%;;
  border: 1px solid #d9edf7;
  border-radius: 10px;
}

#btn{
  cursor: pointer;
  width: 12%;
  height: 2%;
  border: 1px solid #2196f3;
  text-align: center;
  color: #2196f3;
  font-size: 13px;
  line-height: 22px;
  font-weight: 600;
  padding: 4px 3px;
  border-radius: 4px;
  cursor: pointer;
}
#btn:hover {
  background-color: #1079cf;
  color: white;
}
#btn-addsc{
  cursor: pointer;
  width: 25%;
  height: 2%;
  border: 1px solid #2196f3;
  text-align: center;
  color: #2196f3;
  font-size: 13px;
  line-height: 22px;
  font-weight: 600;
  padding: 4px 3px;
  border-radius: 4px;
  cursor: pointer;
}
#btn-addsc:hover {
  background-color: #1079cf;
  color: white;
}
#action {
  margin: 0 auto;
  margin-top: 4%;
  display: flex;
  justify-content: space-between;
  width: 60%;
  padding-bottom: 5%;
}
div#main {
    padding-bottom: 10%;
}
</style>